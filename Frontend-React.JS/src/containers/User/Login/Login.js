import React, { Component } from "react";
import { connect } from "react-redux";
import "./Login.scss";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <div className="container-login">
        <div className="title">Login</div>
        <div className="content-form">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter your password" required />
              </div>
            </div>

            <button className="button">Đăng nhập</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
