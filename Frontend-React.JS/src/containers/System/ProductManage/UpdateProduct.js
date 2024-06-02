import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { path } from "../../../utils";

class UpdateProduct extends Component {
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

                  <span className="text-muted fw-light">Update Product</span>
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
                            <label htmlFor="firstName" className="form-label">
                              Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="firstName"
                              name="firstName"
                              value="John"
                              autoFocus
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label className="form-label" htmlFor="category">
                              Category
                            </label>
                            <select
                              id="category"
                              className="select2 form-select"
                            >
                              <option value="">Select</option>
                              <option value="Australia">Australia</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Brazil">Brazil</option>
                              <option value="Canada">Canada</option>
                              <option value="China">China</option>
                              <option value="France">France</option>
                              <option value="Germany">Germany</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Japan">Japan</option>
                              <option value="Korea">Korea, Republic of</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Russia">Russian Federation</option>
                              <option value="South Africa">South Africa</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">
                                United Arab Emirates
                              </option>
                              <option value="United Kingdom">
                                United Kingdom
                              </option>
                              <option value="United States">
                                United States
                              </option>
                            </select>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label className="form-label" htmlFor="size">
                              Size
                            </label>
                            <select id="size" className="select2 form-select">
                              <option value="">Select</option>
                              <option value="Australia">Australia</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Brazil">Brazil</option>
                              <option value="Canada">Canada</option>
                              <option value="China">China</option>
                              <option value="France">France</option>
                              <option value="Germany">Germany</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Japan">Japan</option>
                              <option value="Korea">Korea, Republic of</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Russia">Russian Federation</option>
                              <option value="South Africa">South Africa</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">
                                United Arab Emirates
                              </option>
                              <option value="United Kingdom">
                                United Kingdom
                              </option>
                              <option value="United States">
                                United States
                              </option>
                            </select>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="weight" className="form-label">
                              Weight
                            </label>
                            <select id="weight" className="select2 form-select">
                              <option value="">Select Language</option>
                              <option value="en">English</option>
                              <option value="fr">French</option>
                              <option value="de">German</option>
                              <option value="pt">Portuguese</option>
                            </select>
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
                              Description
                            </label>
                            <textarea
                              className="form-control"
                              id="description"
                              rows={4}
                              defaultValue={""}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="introduction"
                              className="form-label"
                            >
                              Introduction
                            </label>
                            <textarea
                              className="form-control"
                              id="introduction"
                              rows={4}
                              defaultValue={""}
                            />
                          </div>
                          <div className="mb-3 col-md-12">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Image</th>
                                  <th>Link</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody className="table-border-bottom-0">
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src={
                                          "https://th.bing.com/th?id=OIP.q2cJZpr0M01UydHoVIFbHAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                                        }
                                        alt="product"
                                        className="w-px-100 h-px-100 rounded margin-left-10"
                                        style={{ marginLeft: "10px" }}
                                      />
                                    </div>
                                  </td>
                                  <td style={{ width: "200px" }}>
                                    "https://th.bing.com/th?id=OIP.q2cJZpr0M01UydHoVIFbHAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                                  </td>

                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-icon btn-icon-only btn-outline-primary"
                                      data-bs-toggle="tooltip"
                                      title="Edit"
                                    >
                                      <i className="bx bx-edit" />
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-icon btn-icon-only btn-outline-danger"
                                      data-bs-toggle="tooltip"
                                      title="Delete"
                                    >
                                      <i className="bx bx-trash" />
                                    </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct);
