import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiSend } from "react-icons/fi";
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import UserChat from "./UserChat";
import ListMessages from "../../../components/Chat/ListMessages";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";

var stompClient = null;

class CustomerCare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            privateChats: [],
            publicChats: [],
            listUsers: [],
            tab: '',
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
            isConnected: true
        }));

        // Kiểm tra xem stompClient đã khởi tạo và kết nối chưa
        if (this.stompClient && this.stompClient.connected) {
            this.stompClient.subscribe('/user/' + this.state.userData.email + '/private', this.onPrivateMessage);
            this.userJoin();
        } else {
            console.error('Stomp client is not connected.');
            // Xử lý khi kết nối không thành công
        }
    }
    userJoin = () => {
        var chatMessage = {
            senderName: 'Peace Bakery',
            status: "JOIN"
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
                senderName: 'Peace Bakery',
                receiverName: this.state.userData.email,
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
        this.getUsers();
        this.startFetchingMessages();
    }
    fetchMessages = (email) => {
        fetch(`http://localhost:8081/message?email=${email}`)
            .then(response => response.json())
            .then(data => {

                this.setState({ privateChats: data });
            })
            .catch(error => console.error('Error fetching messages:', error));
    }
    startFetchingMessages = () => {
        const { userData } = this.state;
        if (userData  && userData.email) {
            this.fetchMessages(userData.email); // Fetch tin nhắn ban đầu
            this.messagePolling = setInterval(() => {
                this.fetchMessages(userData.email); // Fetch tin nhắn định kỳ
                this.getUsers();
            }, 1000);
        } else {
            console.error("User info not available");
        }
    }
    getUsers = () => {
        try {
            fetch(`http://localhost:8081/users`)
                .then(async response => {
                    var data = await response.json();
                    this.setState({
                        listUsers: data
                    });
                })
                .catch(error => console.error('Error fetching users:', error));
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }
    componentDidMount() {
        this.registerUser();

    }
    handleTabClick = (user) => {
        const { userData } = this.state;
        this.setState({ tab: user });

        if (userData.email) {
            this.fetchMessages(user); // Fetch tin nhắn cho user mới
        }
        this.setState({
            userData: {
                email: user
            }
        });
        this.startFetchingMessages();
    }
    componentWillUnmount() {
        this.disconnect(); // Đóng kết nối khi component bị unmount (tắt modal)
    }

    render() {

        return (
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Menu page={"CustomerCare"} />
                    <div className="layout-page">
                        <NavBar />
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <h4 className="text-primary-cake fw-bold">Chăm sóc khách hàng</h4>
                    <div className="chat-box">
                        <div className="member-list">
                            {this.state.listUsers.map((user, index) => (
                                <UserChat
                                    key={index}
                                    user={user}
                                    userActive={this.state.userData.email === user}
                                    onClick={() => this.handleTabClick(user)}
                                />
                            ))}
                        </div>

                        {this.state.tab!=="CHATROOM" && <div className="chat-content">
                            <div className="messagesAdmin">
                                <ListMessages listMess={this.state.privateChats} isAdmin={true}/>
                            </div>
                            <div className="send-message">
                                <input type="text" className="input-message" placeholder="Nhập tin nhắn" value={this.state.userData.message}
                                       onChange={(e) => this.handleMessage(e)} />
                                <button className="send-btn" onClick={() => this.sendPrivateValue()}>
                                    <FiSend />
                                </button>
                            </div>
                        </div>

                        }
                    </div>
                    </div>

                    </div>
                </div>
            </div>
    </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(CustomerCare);
