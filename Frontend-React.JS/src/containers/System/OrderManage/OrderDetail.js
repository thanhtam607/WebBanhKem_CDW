import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { path } from "../../../utils";
import {getBillById, updateStatusBill} from "../../../services/billService";

class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order : {},
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    let response = await getBillById(id);
    if (response && response.errCode === 0) {
      this.setState({
        order: response.data
      })
    }

  }
  async updateOrderStatus(newStatus) {
    await updateStatusBill(this.state.order.id, newStatus);
    this.setState((prevState) => ({
      order: { ...prevState.order, status: newStatus },
    }));
  }
  getStatusClass(status) {
    switch (status) {
      case 1:
        return "status-1";
      case 2:
        return "status-2";
      case 3:
        return "status-3";
      case 4:
        return "status-4";
      case 5:
        return "status-5";
      case 6:
        return "status-6";
      default:
        return "";
    }
  }
  isStatusDisabled(currentStatus, statusOption) {
    const statusMap = {
      1: [], // "Đang chờ duyệt" can change to any status
      2: [1, 3, 4, 5, 6], // "Đã hủy" cannot change to any other status
      3: [1], // "Đặt hàng thành công" can change to any status except "Đang chờ duyệt"
      4: [1,2, 3], // "Đã thanh toán" can change to any status except "Đang chờ duyệt" and "Đặt hàng thành công"
      5: [1, 2, 3, 4],    // "Đang giao hàng" can only change to "Giao hàng thành công"
      6: [1, 2, 3, 4, 5], // "Giao hàng thành công" cannot change to any other status
    };
    return statusMap[currentStatus]?.includes(statusOption);
  }
  render() {
    let order = this.state.order;
    console.log(order.billDetailData)
    return (
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* Menu */}
          <Menu page={"Order Management"} />
          {/* / Menu */}
          {/* Layout container */}
          <div className="layout-page">
            <NavBar />
            {/* Content wrapper */}
            <div className="content-wrapper">
              {/* Content */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4
                  className="fw-bold"
                  // style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span className="fw-light text-primary-cake">Hóa Đơn</span></h4>
                  {/*<Link*/}
                  {/*  className="btn"*/}
                  {/*  style={{*/}
                  {/*    height: "35px",*/}
                  {/*    padding: "5px 10px",*/}
                  {/*    color: "#c11ee8",*/}
                  {/*    backgroundColor: "white",*/}
                  {/*  }}*/}
                  {/*>*/}
                  {/*  <i*/}
                  {/*    className="fas fa-chevron-left"*/}
                  {/*    style={{ marginRight: "10px" }}*/}
                  {/*  />*/}
                  {/*  Back*/}
                  {/*</Link>*/}




                <div className="container-xxl flex-grow-1 container-p-y">
                  <div className="card  col-11 mb-1">
                    <h5 className="card-header">Thông tin chi tiết</h5>

                    <hr className="my-0" />
                    <div className="card-body">
                      <form
                        id="formAccountSettings"
                        method="POST"
                        onSubmit="return false"
                      >
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label htmlFor="fullname" className="form-label">
                              Tên khách hàng
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={order.fullname}
                              autoFocus
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label htmlFor="phone" className="form-label">
                              Số điện thoại
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={order.phone_number}
                              autoFocus
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label htmlFor="address" className="form-label">
                              Địa chỉ
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={order.address}
                              autoFocus
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="price" className="form-label">
                              Thành tiền
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="price"
                              name="price"
                              value={order.pro_bill}
                            />
                          </div>
                          {/* // status */}
                          <div className="mb-3 col-md-6">
                            <label className="form-label" htmlFor="status">
                              Trạng thái
                            </label>
                              <select id="status"
                                  className={`select2 form-select select-status ${this.getStatusClass(order.status)}`}
                                  value={order.status}
                                  onChange={(e) => {
                                    const newStatus = parseInt(e.target.value, 10);
                                    this.updateOrderStatus(newStatus);
                                  }}
                              >
                                <option
                                    className="status-1"
                                    value={1}
                                    disabled={this.isStatusDisabled(order.status, 1)}
                                >
                                  Đang chờ duyệt
                                </option>
                                <option
                                    className="status-2"
                                    value={2}
                                    disabled={this.isStatusDisabled(order.status, 2)}
                                >
                                  Đã hủy
                                </option>
                                <option
                                    className="status-3"
                                    value={3}
                                    disabled={this.isStatusDisabled(order.status, 3)}
                                >
                                  Đặt hàng thành công
                                </option>
                                <option
                                    className="status-4"
                                    value={4}
                                    disabled={this.isStatusDisabled(order.status, 4)}
                                >
                                  Đã thanh toán
                                </option>
                                <option
                                    className="status-5"
                                    value={5}
                                    disabled={this.isStatusDisabled(order.status, 5)}
                                >
                                  Đang giao hàng
                                </option>
                                <option
                                    className="status-6"
                                    value={6}
                                    disabled={this.isStatusDisabled(order.status, 6)}
                                >
                                  Giao hàng thành công
                                </option>
                              </select>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="description" className="form-label">
                              Ghi chú
                            </label>
                            <textarea
                              className="form-control"
                              id="description"
                              rows={4}
                              defaultValue={order.notes}
                            />
                          </div>

                          <div className="mb-3 col-md-12">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Sản phẩm</th>
                                  <th>quantity</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody className="table-border-bottom-0">
                              {order.billDetailData && order.billDetailData.length > 0 ? (
                                  order.billDetailData.map((detail, index) => (
                                      <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                          <div className="d-flex align-items-center">
                                            <img
                                                src={"/"+detail.ProductData.Images[0].img}
                                                alt="product"
                                                className="w-px-40 h-auto rounded"
                                            />
                                            <div className="ms-3">
                                              <h6 className="mb-0">{detail.ProductData.name}</h6>
                                              <span className="text-muted" style={{ marginRight: "10px" }}>
                                                  Weight: {detail.ProductData.weight}g
                                              </span>
                                              <span className="text-muted">Size: {detail.ProductData.size}</span>
                                            </div>
                                          </div>
                                        </td>
                                        <td>{detail.amount}</td>
                                        <td>
                                           <span className="badge bg-label-primary me-1">
                                              {detail.ProductData.price}
                                           </span>
                                        </td>
                                      </tr>
                                  ))
                              ) : (
                                  <tr>
                                    <td colSpan="4" className="text-center">
                                      No details available
                                    </td>
                                  </tr>
                              )}

                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className="mt-5"
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <button
                            type="submit"
                            className="btn btn-primary me-2 "
                            style={{ padding: "0 10px" }}
                          >
                            Thêm Sản Phẩm
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
