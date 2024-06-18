import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiSend } from "react-icons/fi";
class Message extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        const message = this.props.message;
        let isOwner = false;
        let isAdmin = this.props.isAdmin;
        if((message.receiverName =='Peace Bakery' && !isAdmin) || (message.senderName =='Peace Bakery' && isAdmin)){
            isOwner= true;
        }


        return (
            <>
                <div className={isOwner ? "message owner" : "message"}>
                                    <div className="messageInfo">
                                        {/*<div className="messageInfoDetail">*/}
                                        {/*    <span className="username">{name}</span>*/}
                                        {/*</div>*/}
                                        {/*<img src={imgPersonal} alt="" />*/}
                                        <div className="timeMess">{message.date}</div>
                                    </div>
                    <div className={message.status === "MESSAGE" ? "messageContent" : "messagaOrder"}>
                        <p className="mess">{message.message}</p>
                    </div>
                                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);