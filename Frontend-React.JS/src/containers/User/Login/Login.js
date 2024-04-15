import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Login.scss"
class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
        
        }

    }

    componentDidMount() {
    }
    render() {
        return (
            <div>
                Login
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
