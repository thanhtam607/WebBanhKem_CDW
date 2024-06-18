import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiSend } from "react-icons/fi";
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import ListMessages from "./ListMessages";

var stompClient = null;

class ChatModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            privateChats: [],
            publicChats: [],
            tab: 'Peace Bakery',
            userData: {
                email: '',
                connected: false,
                message: ''
            },
            isConnected: false // Thêm trạng thái để theo dõi kết nối
        };
    }

    connect = () => {
        let Sock = new SockJS('http://localhost:8081/ws');
        stompClient = over(Sock);
        stompClient.connect({}, this.onConnected, this.onError);
    }

    disconnect = () => {
        if (stompClient) {
            stompClient.disconnect();
            this.setState({ isConnected: false }); // Cập nhật trạng thái kết nối
        }
    }

    onConnected = () => {
        this.setState(prevState => ({
            userData: { ...prevState.userData, connected: true },
            isConnected: true // Cập nhật trạng thái kết nối
        }));
        stompClient.subscribe('/chatroom/public', this.onMessageReceived);
        stompClient.subscribe('/user/' + this.state.userData.email + '/private', this.onPrivateMessage);
        this.userJoin();
    }

    userJoin = () => {
        const order = this.props.order
        let mess = `THÔNG TIN ĐƠN HÀNG - ID: ${order.id} - Thành tiền: ${order.pro_bill} - Status: ${order.status}`;

        var chatMessage = {
            senderName: this.state.userData.email,
            status: "JOIN",
            receiverName: this.state.tab,
            message: mess // Gán thông tin đơn hàng vào message
        };

        stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    }

    onMessageReceived = (payload) => {
        var payloadData = JSON.parse(payload.body);
        switch (payloadData.status) {
            case "JOIN":
                // Xử lý trạng thái JOIN nếu cần
                break;
            case "MESSAGE":
                this.setState(prevState => ({
                    publicChats: [...prevState.publicChats, payloadData]
                }));
                break;
            default:
                break;
        }
    }

    onPrivateMessage = (payload) => {
        var payloadData = JSON.parse(payload.body);
        this.setState(prevState => ({
            privateChats: [...prevState.privateChats, payloadData]
        }));
    }

    onError = (err) => {
        console.log(err);
    }

    handleMessage = (event) => {
        const { value } = event.target;
        this.setState(prevState => ({
            userData: { ...prevState.userData, message: value }
        }));
    }

    sendPrivateValue = () => {
        if (stompClient) {
            const currentDate = new Date();
            const formattedDate = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} ${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

            // Tạo đối tượng tin nhắn
            var chatMessage = {
                senderName: this.state.userData.email,
                receiverName: this.state.tab,
                message: this.state.userData.message,
                status: "MESSAGE",
                date: formattedDate // Thêm ngày giờ vào tin nhắn
            };

            if (this.state.userData.username !== this.state.tab) {
                const newMessage = {
                    ...chatMessage,
                    isOwner: chatMessage.receiverName === 'Peace Bakery'
                };

                this.setState(prevState => ({
                    privateChats: [...prevState.privateChats, newMessage]
                }));
            }
            stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
            this.setState(prevState => ({
                userData: { ...prevState.userData, message: "" }
            }));
        }
    }

    registerUser = () => {
        this.connect();
        this.startFetchingMessages();
    }

    fetchMessages = (email) => {
        fetch(`http://localhost:8081/message?email=${email}`)
            .then(response => response.json())
            .then(data => {
                console.log('Messages:', data);
                this.setState({ privateChats: data });
            })
            .catch(error => console.error('Error fetching messages:', error));
    }
    startFetchingMessages = () => {
        const { user } = this.props;
        if (user && user.userInfo && user.userInfo.email) {
            this.fetchMessages(user.userInfo.email); // Fetch tin nhắn ban đầu
            this.messagePolling = setInterval(() => {
                this.fetchMessages(user.userInfo.email); // Fetch tin nhắn định kỳ
            }, 1000); // Thực hiện fetch mỗi 5 giây (có thể điều chỉnh thời gian tùy ý)
        } else {
            console.error("User info not available");
        }
    }


    componentDidMount() {
        const { user } = this.props;
        if (user && user.userInfo && user.userInfo.email) {
            this.setState({
                userData: {
                    email: user.userInfo.email,
                }
            });
            this.fetchMessages(user.userInfo.email);
        } else {
            console.error("User info not available");
        }
    }
    componentWillUnmount() {
        this.disconnect(); // Đóng kết nối khi component bị unmount (tắt modal)
    }

    render() {
        return (
            <>
                <button type="button" className="btn bg-primary-cake text-white pad-bottom" data-bs-toggle="modal"
                        data-bs-target="#exampleModal" onClick={() => this.registerUser()}>
                    Liên hệ về đơn hàng
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header bg-primary-cake">
                                <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">Liên hệ đơn hàng</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <ListMessages listMess={this.state.privateChats} />
                            </div>
                            <div className="modal-footer">
                                <div className="send-message">
                                    <input type="text" className="input-message" placeholder="Nhập tin nhắn" value={this.state.userData.message}
                                           onChange={(e) => this.handleMessage(e)} />
                                    <button className="send-btn" onClick={() => this.sendPrivateValue()}>
                                        <FiSend />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(ChatModal);
