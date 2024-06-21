import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { checkMail, sendMail, userLogin } from "../../../services/userService";
import { getAllCartsByIdUser } from "../../../services/cartService";
import { FormattedMessage } from "react-intl";
import Swal from "sweetalert2";
import jwt from 'jsonwebtoken';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChangeInput = (value, type) => {
    this.setState({
      [type]: value,
    });
  };

  checkEmail = async (email) => {
    if (!email) return false;
    const res = await checkMail(email);
    return res.message; // Assuming res.message is true/false based on email validity
  };
  createJwtToken = (email) => {
    const now = Math.floor(Date.now() / 1000);
    const payload = {
      email: email,
      exp: now + 30 // Token sẽ hết hạn sau 30 giây
    };
    const token = jwt.sign(payload, 'secret_key');
    console.log(token)
    return token;
  };
  handleForgotPass = async () => {
    const { value: email } = await Swal.fire({
      title: "Quên mật khẩu",
      input: "email",
      inputLabel: "Email của bạn:",
      inputPlaceholder: "Nhập email của bạn...",
      confirmButtonColor: "#aeaeff",
      showCancelButton: true,
      cancelButtonText: "Hủy",
      confirmButtonText: "Tiếp tục",
    });

    if (email) {
      if (!(await this.checkEmail(email))) {
        Swal.fire({
          title: "Email không đúng",
          icon: "error",
          showCancelButton: false,
          confirmButtonText: "Thoát",
        });
      } else {
        const token = this.createJwtToken(email);
        const resetLink = `http://localhost:3000/resetpassword/${token}`;
        const html = `
          <h1>Đặt lại mật khẩu</h1>
          <p>Bạn vừa nhấn Quên mật khẩu. Vui lòng nhấn vào <a href="${resetLink}">Đây</a> để tiến hành đặt lại mật khẩu.</p>
          <p>Nếu không phải bạn, vui lòng bỏ qua email này.</p>
        `;
        sendMail(email, "Xác nhận tài khoản", html);
        Swal.fire({
          title: "Email đã được gửi đi",
          icon: "success",
          showCancelButton: false,
          confirmButtonText: "Đóng",
        });
      }
    }
  };

  handleSubmit = async () => {
    const { email, password } = this.state;
    if (!email || !password) {
      alert("Vui lòng nhập email và mật khẩu");
    } else {
      const res = await userLogin(email, password);
      if (res && res.errCode === 0) {
        const resCart = await getAllCartsByIdUser(res.data.id);
        this.props.userLoginSuccess(res.data, resCart.data);
        this.props.history.push("/");
      } else {
        alert("Đăng nhập thất bại");
      }
    }
  };

  render() {
    return (
        <div className="container-xxl">
          <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner">
              <div className="card">
                <div className="card-body">
                  <div className="app-brand justify-content-center">
                    <a href="/" className="app-brand-link gap-2">
                    <span className="app-brand-text demo text-primary-cake fw-bolder">
                      Peace Bakery
                    </span>
                    </a>
                  </div>

                  <h4 className="mb-2 text-black">
                    <FormattedMessage id="login.login" />
                  </h4>

                  <div id="formAuthentication" className="mb-3">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email-username"
                          placeholder="Enter your email or username"
                          autoFocus
                          value={this.state.email}
                          onChange={(e) =>
                              this.handleChangeInput(e.target.value, "email")
                          }
                      />
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <div className="d-flex justify-content-between">
                        <label className="form-label" htmlFor="password">
                          <FormattedMessage id="login.password" />
                        </label>
                        <a onClick={this.handleForgotPass}>
                          <small>
                            <FormattedMessage id="login.forgot_password" />
                          </small>
                        </a>
                      </div>
                      <div className="input-group input-group-merge">
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            name="password"
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            aria-describedby="password"
                            value={this.state.password}
                            onChange={(e) =>
                                this.handleChangeInput(e.target.value, "password")
                            }
                        />
                        <span className="input-group-text cursor-pointer">
                        <i className="bx bx-hide"></i>
                      </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="remember-me"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="remember-me"
                        >
                          {" "}
                          Nhớ mật khẩu{" "}
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button
                          className="btn btn-primary-cake text-white w-100"
                          onClick={this.handleSubmit}
                      >
                        <FormattedMessage id="login.login" />
                      </button>
                    </div>
                  </div>

                  <p className="text-center">
                  <span>
                    <FormattedMessage id="login.text_signin" />
                  </span>
                    <a href="/register">
                    <span className="text-primary-cake">
                      <FormattedMessage id="login.signin" />
                    </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoginSuccess: (userInfo, carts) =>
        dispatch(actions.userLoginSuccess(userInfo, carts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

