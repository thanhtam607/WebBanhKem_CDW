import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { path } from "../../../utils";

class CreateProduct extends Component {
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

                  <span className="text-muted fw-light">Create Product</span>
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
                            <img
                              src="data:image/jpeg;base64,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"
                              alt="product"
                              className="w-px-100 h-px-100 rounded"
                              style={{ marginLeft: "10px" }}
                            />
                            <img
                              src={
                                "https://th.bing.com/th?id=OIP.q2cJZpr0M01UydHoVIFbHAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                              }
                              alt="product"
                              className="w-px-100 h-px-100 rounded margin-left-10"
                              style={{ marginLeft: "10px" }}
                            />
                          </div>
                          <div className="mt-2">
                            <button
                              className="btn btn-primary me-2"
                              style={{ padding: "0 10px" }}
                            >
                              <i class="fas fa-upload"></i> Upload
                            </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
