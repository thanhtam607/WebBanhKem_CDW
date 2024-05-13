import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <div className="container-xxl">
                <div className="authentication-wrapper authentication-basic container-p-y">
                    <div className="authentication-inner">

                        <div className="card">
                            <div className="card-body">

                                <div className="app-brand justify-content-center">
                                    <a href="/" className="app-brand-link gap-2">

                                        <span className="app-brand-text demo text-primary-cake fw-bolder">Peace Bakery</span>
                                    </a>
                                </div>

                                <h4 className="mb-2 text-black">Đăng nhập</h4>


                                <form id="formAuthentication" className="mb-3" >
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="email-username"
                                            placeholder="Enter your email or username"
                                            autoFocus
                                        />
                                    </div>
                                       <div className="mb-3 form-password-toggle">
                                        <div className="d-flex justify-content-between">
                                            <label className="form-label" htmlFor="password">Mật khẩu</label>
                                            <a href="auth-forgot-password-basic.html">
                                                <small>Quên mật khẩu?</small>
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
                                            />
                                            <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="remember-me"/>
                                            <label className="form-check-label" htmlFor="remember-me"> Nhớ mật khẩu </label>
                                     </div>
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-primary-cake text-white w-100" type="submit">Đăng nhập</button>
                                    </div>
                                </form>

                                <p className="text-center">
                                    <span>Bạn chưa có tài khoản?</span>
                                    <a href="/register">
                                        <span className="text-pink"> Đăng ký ngay</span>
                                    </a>
                                </p>
                            </div>
                        </div>

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
