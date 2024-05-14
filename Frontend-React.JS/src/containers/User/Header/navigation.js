import React, { Component } from "react";
import { connect } from "react-redux";
import { path } from "../../../utils";
import { Link } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  // handle click event to show dropdown menu
  handleClickShowDropdown = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    const { pageActive } = this.props.pageActive;
    return (
      <nav className="navbar navbar-light bg-white navbar-expand-xl">
        <a href="users/theme#" className="navbar-brand">
          <h1 className="text-primary-cake display-6">Peace Bakery</h1>
        </a>
        <button
          className="navbar-toggler py-2 px-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars text-primary"></span>
        </button>
        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
          <div className="navbar-nav mx-auto">
            <a
              href="/"
              className={`nav-item nav-link ${
                pageActive === "Trang chủ" ? "active" : ""
              }`}
            >
              Trang chủ
            </a>
            <a
              href="/about"
              className={`nav-item nav-link ${
                pageActive === "Giới thiệu" ? "active" : ""
              }`}
            >
              Giới thiệu
            </a>
            <a
              href="/shop"
              className={`nav-item nav-link ${
                pageActive === "Sản phẩm" ? "active" : ""
              }`}
            >
              Sản phẩm
            </a>
            <a
              href="/contact"
              className={`nav-item nav-link ${
                pageActive === "Liên hệ" ? "active" : ""
              }`}
            >
              Liên hệ
            </a>
          </div>
          <div className="d-flex m-3 me-0">
            <button
              className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fas fa-search text-primary"></i>
            </button>
            <Link to={path.CART} className="position-relative me-4 my-auto">
              <i className="fa fa-shopping-bag fa-2x"></i>

              <span
                className="position-absolute bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center px-1"
                style={{
                  top: "-5px",
                  left: "15px",
                  height: "20px",
                  minWidth: "20px",
                }}
              >
                {this.props.user.carts ? this.props.user.carts.length : 0}
              </span>
            </Link>
            <div className="my-auto" style={{ position: "relative" }}>
              <div onClick={() => this.handleClickShowDropdown()}>
                <i className="fas fa-user fa-2x"></i>
              </div>
              {/* create a dropdown menu login and register show*/}
              <div
                style={{ position: "absolute", left: "-100px" }}
                className={`dropdown-menu ${this.state.isShow ? "show" : ""}`}
              >
                {this.props.user.isLoggedIn ? (
                  <div>
                    <a href="/profile" className="dropdown-item">
                      Thông tin cá nhân
                    </a>
                    <a href="/logout" className="dropdown-item">
                      Đăng xuất
                    </a>
                  </div>
                ) : (
                  <div>
                    <a href="/login" className="dropdown-item">
                      Đăng nhập
                    </a>
                    <a href="/register" className="dropdown-item">
                      Đăng ký
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
