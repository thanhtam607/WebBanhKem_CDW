import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Product.scss"
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
        <div className="rounded position-relative fruite-item">
          <div className="fruite-img">
            <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
          </div>
          <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
            <h4>Grapes</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
              <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
            </div>
          </div>
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
