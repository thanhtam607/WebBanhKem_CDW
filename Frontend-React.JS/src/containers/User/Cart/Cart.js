import React, { Component } from "react";
import { connect } from "react-redux";
import { path } from "../../../utils";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as actions from "../../../store/actions";
import {
  updateCart,
  updateStatusCart,
  deleteCart,
} from "../../../services/cartService";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  // update cart
  handleUpdateQuantityCart = async (id, quantity) => {
    const res = await updateCart(id, quantity);
    if (res.errCode === 0) {
      const carts = this.props.user.carts.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: quantity };
        }
        return item;
      });

      this.props.updateCartSuccess(carts);
    }
  };

  handleUpdateStatusCart = async (id, status) => {
    const res = await updateStatusCart(id, status);
    if (res.errCode === 0) {
      console.log("status", status);
      const carts = this.props.user.carts.map((item) => {
        if (item.id === id) {
          return { ...item, status: status };
        }
        return item;
      });

      this.props.updateCartSuccess(carts);
    }
  };

  handleDeleteCart = async (id) => {
    const res = await deleteCart(id);
    if (res.errCode === 0) {
      const carts = this.props.user.carts.filter((item) => item.id !== id);
      this.props.updateCartSuccess(carts);
    }
  };

  render() {
    return (
      <div>
        <Header pageActive={"Giỏ hàng"}> </Header>
        {/* Single Page Header start */}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Giỏ hàng</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="index.html">Trang chủ</a>
            </li>
            <span>/</span>
            <li className="breadcrumb-item active text-white">Giỏ hàng</li>
          </ol>
        </div>
        {/* Single Page Header End */}
        {/* Cart Page Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Products</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Tổng cộng</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.user.carts && this.props.user.carts.length > 0
                    ? this.props.user.carts.map((item, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">
                              <input
                                type="checkbox"
                                checked={item.status === 1}
                                onChange={() =>
                                  this.handleUpdateStatusCart(
                                    item.id,
                                    item.status === 1 ? 0 : 1
                                  )
                                }
                              />
                            </th>
                            <td>
                              <img
                                src={`${item.ProductData.Images[0]}`}
                                alt=""
                                style={{ width: "100px" }}
                              />
                            </td>
                            <td>{item.ProductData.name}</td>
                            <td>{item.ProductData.price}</td>
                            <td>
                              <div
                                className="input-group quantity "
                                style={{ width: "100px" }}
                              >
                                <div className="input-group-btn">
                                  <button
                                    onClick={() =>
                                      this.handleUpdateQuantityCart(
                                        item.id,
                                        item.quantity - 1
                                      )
                                    }
                                    className="btn btn-sm btn-minus rounded-circle bg-light border"
                                    style={{ width: "32px", height: "32px" }}
                                  >
                                    <i className="fa fa-minus" />
                                  </button>
                                </div>
                                <input
                                  value={item.quantity}
                                  type="text"
                                  className="form-control form-control-sm text-center border-0"
                                />
                                <div className="input-group-btn">
                                  <button
                                    onClick={() =>
                                      this.handleUpdateQuantityCart(
                                        item.id,
                                        item.quantity + 1
                                      )
                                    }
                                    className="btn btn-sm btn-plus rounded-circle bg-light border"
                                    style={{ width: "32px", height: "32px" }}
                                  >
                                    <i className="fa fa-plus" />
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td>{item.ProductData.price * item.quantity}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                style={{ width: "32px", height: "32px" }}
                                onClick={() => this.handleDeleteCart(item.id)}
                              >
                                <i class="fas fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
            <div className="row g-4 justify-content-end">
              <div className="col-8" />
              <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                <div className="bg-light rounded">
                  <div className="p-4">
                    <h1 className="display-6 mb-4">
                      Cart<span className="fw-normal">Tổng cộng</span>
                    </h1>
                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="mb-0 me-4">Thành tiền:</h5>
                      <p className="mb-0">$96.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-0 me-4">Phí giao hàng</h5>
                      <div className>
                        <p className="mb-0">Flat rate: $3.00</p>
                      </div>
                    </div>
                    <p className="mb-0 text-end">Shipping to Ukraine.</p>
                  </div>
                  <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                    <h5 className="mb-0 ps-4 me-4">Tổng thanh toán</h5>
                    <p className="mb-0 pe-4">$99.00</p>
                  </div>
                  <button
                    className="btn border-secondary btn_checkout"
                    type="button"
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cart Page End */}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartSuccess: (carts) => {
      dispatch(actions.updateCartSuccess(carts));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
