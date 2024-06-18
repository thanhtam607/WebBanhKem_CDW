import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from "./Message";
class ListMessages extends Component {
    constructor(props){
        super(props);
        this.state = {
            listMess:[],
        }
    }
    async componentDidMount() {
        this.setState({
            listMess: this.props.listMess
        });

    }
    render() {
        const { listMess, isAdmin } = this.props;

        return (
            <>
                {listMess.map((message) => (
                    <Message message={message} isAdmin={isAdmin}/>
                ))}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMessages);