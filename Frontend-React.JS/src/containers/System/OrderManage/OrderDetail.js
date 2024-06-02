import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { path } from "../../../utils";

class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
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
                <h4
                  className="fw-bold py-3 mb-4 "
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    className="btn"
                    style={{
                      height: "35px",
                      padding: "5px 10px",
                      color: "#c11ee8",
                      backgroundColor: "white",
                    }}
                  >
                    <i
                      className="fas fa-chevron-left"
                      style={{ marginRight: "10px" }}
                    />
                    Back
                  </Link>

                  <span className="text-muted fw-light">Hóa Đơn</span>
                </h4>

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
                              fullname
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value="John"
                              autoFocus
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label htmlFor="phone" className="form-label">
                              phone
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value="John"
                              autoFocus
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label htmlFor="address" className="form-label">
                              address
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value="John"
                              autoFocus
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="price" className="form-label">
                              Price
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="price"
                              name="price"
                              value="John"
                            />
                          </div>
                          {/* // status */}
                          <div className="mb-3 col-md-6">
                            <label className="form-label" htmlFor="status">
                              Status
                            </label>
                            <select id="status" className="select2 form-select">
                              <option value="">Select Language</option>
                              <option value="en">English</option>
                              <option value="fr">French</option>
                              <option value="de">German</option>
                              <option value="pt">Portuguese</option>
                            </select>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="description" className="form-label">
                              Note
                            </label>
                            <textarea
                              className="form-control"
                              id="description"
                              rows={4}
                              defaultValue={""}
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
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src="../assets/img/products/01.png"
                                        alt="product"
                                        className="w-px-40 h-auto rounded"
                                      />
                                      <div className="ms-3">
                                        <h6 className="mb-0">Product Name</h6>
                                        <span
                                          className="text-muted "
                                          style={{ marginRight: "10px" }}
                                        >
                                          Size: 1.5kg
                                        </span>
                                        <span className="text-muted">
                                          Weight: 1.5kg
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>2</td>
                                  <td>
                                    <span className="badge bg-label-primary me-1">
                                      $25
                                    </span>
                                  </td>
                                </tr>
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