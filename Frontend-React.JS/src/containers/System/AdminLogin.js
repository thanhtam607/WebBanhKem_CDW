import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { FormattedMessage } from "react-intl";

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  // handle onChange value and type input
  handleChangeInput = (value, type) => {
    this.setState({
      [type]: value,
    });
  };

  // handle submit form
  handleSubmit = async () => {
    const { email, password } = this.state;
    if (!email || !password) {
      alert("Vui lòng nhập email và mật khẩu");
    } else {
    }
  };

  componentDidMount() {}
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
                      <a href="auth-forgot-password-basic.html">
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
                    </div>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-primary-cake text-white w-100"
                      onClick={() => this.handleSubmit()}
                    >
                      <FormattedMessage id="login.login" />
                    </button>
                  </div>
                </div>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
