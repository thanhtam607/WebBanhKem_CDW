import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { path } from "../../../utils";
import "./Menu.scss";
class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { page } = this.props;
    return (
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <Link to={"/"} className="navbar-brand">
            <h1 className="text-primary-cake display-6" style={{ fontSize: "30px" }}>Peace Bakery</h1>

          </Link>
          <a
            href="javascript:void(0);"
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm align-middle" />
          </a>
        </div>
        <div className="menu-inner-shadow" />
        <ul className="menu-inner py-1">
          {/* Forms & Tables */}
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Quản lý</span>
          </li>
          {/* Product Management */}
          <li
            className={`menu-item ${
              page === "Product Management" ? "active" : ""
            }`}
          >
            <Link to={path.ADMINPRODUCTMANAGE} className="menu-link">
              <span className="menu-icon">
                <i className="bx bx-layer" />
              </span>
              <span className="menu-text">Quản lý sản phẩm</span>
            </Link>
          </li>
          {/* Order Management */}
          <li
            className={`menu-item ${
              page === "Order Management" ? "active" : ""
            }`}
          >
            <Link to={path.ADMINORDERMANAGE} className="menu-link">
              <span className="menu-icon">
                <i className="bx bx-cart" />
              </span>
              <span className="menu-text">Quản lý đơn hàng</span>
            </Link>
          </li>
          {/* User Management */}
          <li
            className={`menu-item ${
              page === "User Management" ? "active" : ""
            }`}
          >
            <Link to={path.ADMINUSERMANAGE} className="menu-link">
              <span className="menu-icon">
                <i className="bx bx-user" />
              </span>
              <span className="menu-text">Quản lý người dùng</span>
            </Link>
          </li>
        </ul>
      </aside>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
