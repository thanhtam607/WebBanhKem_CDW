import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetPassword } from '../../../services/userService';
import jwt from 'jsonwebtoken';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            pass: '',
            repass: '',
            error: '',
        }
    }

    componentDidMount() {
        const token = this.props.match.params.token
        try{
            const decodedToken = jwt.verify(token, 'secret_key')
            const currentTime = Math.floor(Date.now() / 1000);
            if (decodedToken.exp < currentTime) {
                this.props.history.push("/");
            } else {
                console.log('Token is valid');
                // Token hợp lệ, cho phép đặt lại mật khẩu
                this.setState({
                    email: decodedToken.email
                });
            }
        }catch (e){
            this.props.history.push("/");
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validatePassword = (pass) => {
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        return re.test(String(pass));
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { pass, repass } = this.state;

        if (!pass) {
            this.setState({ error: 'Mật khẩu không được để trống.' });
            return;
        }
        if (!repass) {
            this.setState({ error: 'Vui lòng nhập lại mật khẩu.' });
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

        const response = await resetPassword(this.state.email, pass);

        if (response.errCode === 0) {
            // Đặt lại mật khẩu thành công, chuyển hướng đến trang chủ
            this.props.history.push("/");
        } else {
            // Xử lý lỗi từ API
            if (response.errCode === 1) {
                this.setState({
                    error: response.message
                });
            } else {
                this.setState({
                    error: 'Đặt lại mật khẩu không thành công, vui lòng thử lại sau.'
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
                                <h4 className="mb-2 text-black">Đặt lại mật khẩu</h4>
                                <form id="formAuthentication" className="mb-3" action="/" method="POST" onSubmit={this.handleSubmit}>
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

                                        <button className="btn btn-primary-cake text-white w-100">Đặt lại mật khẩu</button>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
