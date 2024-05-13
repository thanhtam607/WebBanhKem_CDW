import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../store/actions";
import { KeyCodeUtils, LanguageUtils } from "../utils";
import './Login.scss';

import adminService from '../services/adminService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
    }

    initialState = {
        username: '',
        password: '',
        loginError: '',
        validateEmail: true
    }

    state = {
        ...this.initialState
    };

    refresh = () => {
        this.setState({
            ...this.initialState
        })
    }

    onUsernameChange = (e) => {
        const inputEmail = e.target.value;
        this.checkValidateEmail(inputEmail)
        if(this.state.validateEmail){
            this.setState({ username: inputEmail })
        }
        else{
            this.setState({ username: e.target.value })

        }

    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    redirectToSystemPage = () => {
        const { navigate } = this.props;
        const redirectPath = '/system/user-manage';
        navigate(`${redirectPath}`);
    }

    processLogin = () => {
        const { username, password } = this.state;

        const { adminLoginSuccess, adminLoginFail } = this.props;
        let loginBody = {
            username: 'admin',
            password: '123456'
        }
        //sucess
        let adminInfo = {
            "tlid": "0",
            "tlfullname": "Administrator",
            "custype": "A",
            "accessToken": "eyJhbGciOiJIU"
        }

        adminLoginSuccess(adminInfo);
        this.refresh();
        this.redirectToSystemPage();
        try {
            adminService.login(loginBody)
        } catch (e) {
            console.log('error login : ', e)
        }

    }

    handlerKeyDown = (event) => {
        const keyCode = event.which || event.keyCode;
        if (keyCode === KeyCodeUtils.ENTER) {
            event.preventDefault();
            if (!this.btnLogin.current || this.btnLogin.current.disabled) return;
            this.btnLogin.current.click();
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handlerKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handlerKeyDown);
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
            return;
        };
    }
    checkValidateEmail = (email) => {

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.setState({ loginError: '*Email không hợp lệ*' });
            this.setState({validateEmail: false})
        }
        else{
            this.setState({validateEmail: true})
            this.setState({loginError: ''})
        }
    }

    render() {
        const { username, password, loginError } = this.state;
        const { lang } = this.props;

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


                            <form id="formAuthentication" className="mb-3" action="/post-crud" method="POST">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email-username"
                                        placeholder={LanguageUtils.getMessageByKey("login.username", lang)}
                                        autoFocus
                                        value={username}
                                        onChange={this.onUsernameChange}
                                    />
                                </div>

                                {loginError !== '' && (
                                    <div className='login-error'>
                                        <span className='login-error-message text-danger'>{loginError}</span>
                                    </div>
                                )}
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
                                            placeholder={LanguageUtils.getMessageByKey("login.password", lang)}
                                            aria-describedby="password"
                                            value={password}
                                            onChange={this.onPasswordChange}
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
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
