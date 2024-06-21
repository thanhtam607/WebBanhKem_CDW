import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../../services/userService';
import {addUserSuccess} from "../../../store/actions";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            repass: '',
            error: '',
            termsAccepted: false
        }
    }

    componentDidMount() {
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleCheckboxChange = (e) => {
        this.setState({
            termsAccepted: e.target.checked
        });
    }

    validateEmail = (email) => {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(String(email).toLowerCase());
    }

    validatePassword = (pass) => {
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        return re.test(String(pass));
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, pass, repass, termsAccepted } = this.state;

        if (!email) {
            this.setState({ error: 'Email không được để trống.' });
            return;
        }
        if (!pass) {
            this.setState({ error: 'Mật khẩu không được để trống.' });
            return;
        }
        if (!repass) {
            this.setState({ error: 'Vui lòng nhập lại mật khẩu.' });
            return;
        }
        if (!termsAccepted) {
            this.setState({ error: 'Bạn phải đồng ý với điều khoản và chính sách.' });
            return;
        }

        if (!this.validateEmail(email)) {
            this.setState({ error: 'Địa chỉ email không hợp lệ.' });
            return;
        }

        if (!this.validatePassword(pass)) {
            this.setState({ error: 'Mật khẩu phải có ít nhất 6 ký tự bao gồm cả chữ và số.' });
            return;
        }

        if (pass !== repass) {
            this.setState({ error: 'Mật khẩu và mật khẩu nhập lại không khớp.' });
            return;
        }

        this.setState({ error: '' });
        // Proceed with the registration process
        const response = await createUser(this.state.email, this.state.pass);

        if (response.errCode === 0) {
            this.props.history.push("/");
        } else {
            if(response.errCode === 1){
                this.setState({
                    error: response.message
                });
            }
            else{
                this.setState({
                error: 'Đăng ký không thành công, vui lòng kiểm tra và thử lại!'
            });
            }
        }
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

                                <h4 className="mb-2 text-black">Đăng ký</h4>

                                <form id="formAuthentication" className="mb-3" action="/" method="POST" onSubmit={this.handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Nhập vào email của bạn..."
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            autoFocus
                                        />
                                    </div>
                                    <div className="mb-3 form-password-toggle">
                                        <label className="form-label" htmlFor="password">Mật khẩu</label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                name="pass"
                                                value={this.state.pass}
                                                onChange={this.handleChange}
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="password"
                                            />
                                            <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                                        </div>
                                    </div>
                                    <div className="mb-3 form-password-toggle">
                                        <label className="form-label" htmlFor="repassword">Nhập lại mật khẩu</label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type="password"
                                                id="repassword"
                                                className="form-control"
                                                name="repass"
                                                value={this.state.repass}
                                                onChange={this.handleChange}
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="repassword"
                                            />
                                            <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                                        </div>
                                    </div>
                                    {this.state.error && (
                                        <div className="alert alert-danger" role="alert">
                                            {this.state.error}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="terms-conditions"
                                                name="terms"
                                                checked={this.state.termsAccepted}
                                                onChange={this.handleCheckboxChange}
                                            />
                                            <label className="form-check-label" htmlFor="terms-conditions">
                                                Đồng ý với
                                                <a href="javascript:void(0);"> điều khoản và chính sách của chúng tôi.</a>
                                            </label>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary-cake text-white w-100">Đăng ký</button>
                                </form>

                                <p className="text-center">
                                    <span>Bạn đã có tài khoản?</span>
                                    <a href="/login">
                                        <span className="text-primary-cake">Đăng nhập tại đây.</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
