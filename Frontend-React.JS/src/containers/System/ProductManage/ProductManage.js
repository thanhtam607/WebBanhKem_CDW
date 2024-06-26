import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import TableProduct from "./TableProduct";
import {
  getListProducts,
  deleteProduct,
} from "../../../services/productService";
import Swal from "sweetalert2";
class ProductManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProducts: [],
    };
  }

  async componentDidMount() {

  }

  render() {
    let data = this.state.listProducts;

    return (
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* Menu */}
          <Menu page={"Product Management"} />
          {/* / Menu */}
          {/* Layout container */}
          <div className="layout-page">
            <NavBar />
            {/* Content wrapper */}
            <div className="content-wrapper">
              {/* Content */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                  <span className="text-primary-cake fw-light">Danh sách sản phẩm</span>
                </h4>
                {/* Basic Bootstrap Table */}
                <TableProduct itemsPerPage={12} />
              </div>

              {/* / Content */}
              <div className="content-backdrop fade" />
            </div>
            {/* Content wrapper */}
          </div>
          {/* / Layout page */}
        </div>
        <div className="layout-overlay layout-menu-toggle" />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
