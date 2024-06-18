import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserChat extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        const { userActive, user, onClick } = this.props;

        return (
            <div className={userActive ? "userChat userChatActive" : "userChat"} onClick={onClick}>
                <div className="userChatInfo">
                    <span>{user}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(UserChat);
