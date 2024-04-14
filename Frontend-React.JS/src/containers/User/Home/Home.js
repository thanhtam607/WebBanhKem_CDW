import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Home.scss"
class HOME extends Component {

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
                Home
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

export default connect(mapStateToProps, mapDispatchToProps)(HOME);
