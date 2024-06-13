import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { path } from "../../../utils";
import { getAllCategories } from "../../../services/categoryService";
import { createProduct } from "../../../services/productService";
import Swal from "sweetalert2";
class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      categories: [],
      name: "",
      category: "",
      size: "",
      weight: "",
      price: "",
      status: "",
      description: "",
      introduction: "",
      error: [],
    };
  }

  handleSubmit = async () => {
    //  check data
    if (this.checkData()) {
      // call api
      let response = await createProduct(
        this.state.category,
        this.state.name,
        this.state.size,
        this.state.weight,
        this.state.description,
        this.state.introduction,
        this.state.price,
        this.state.images,
        this.state.status
      );
      if (response && response.errCode === 0) {
        Swal.fire({
          title: "Thành công",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Theo dõi sản phẩm",
          cancelButtonText: "Thêm sản phẩm khác",
        }).then((result) => {
          if (result.isConfirmed) {
            this.props.history.push(path.productManage);
          } else {
            this.setState({
              images: [],
              name: "",
              category: "",
              size: "",
              weight: "",
              price: "",
              status: "",
              description: "",
              introduction: "",
            });
          }
        });
      } else {
        Swal.fire({
          title: "Lỗi",
          icon: "error",
          text: "Có lỗi xảy ra trong quá trình thêm sản phẩm",
        });
      }
    }
  };

  checkData = () => {
    const {
      name,
      category,
      size,
      weight,
      price,
      status,
      description,
      introduction,
      images,
    } = this.state;
    var error = [];
    if (!name) {
      error.push({ name: "name", message: "Vui lòng nhập tên sản phẩm" });
    }

    if (!category) {
      error.push({
        name: "category",
        message: "Vui lòng chọn danh mục sản phẩm",
      });
    }

    if (!size) {
      error.push({
        name: "size",
        message: "Vui lòng chọn kích thước sản phẩm",
      });
    }

    if (!weight) {
      error.push({
        name: "weight",
        message: "Vui lòng chọn trọng lượng sản phẩm",
      });
    }
    // check empty price and check price is number
    if (!price || Number.isNaN(Number(price))) {
      error.push({ name: "price", message: "Vui lòng nhập giá sản phẩm" });
    }

    if (!status) {
      error.push({
        name: "status",
        message: "Vui lòng chọn trạng thái sản phẩm",
      });
    }

    if (!description) {
      error.push({
        name: "description",
        message: "Vui lòng nhập mô tả sản phẩm",
      });
    }

    if (!introduction) {
      error.push({
        name: "introduction",
        message: "Vui lòng nhập giới thiệu sản phẩm",
      });
    }

    if (images.length === 0) {
      error.push({
        name: "images",
        message: "Vui lòng chọn hình ảnh sản phẩm",
      });
    }

    this.setState({
      error: error,
    });

    return this.state.error.length === 0;
  };

  handleChangeInput = (value, type) => {
    this.setState({
      [type]: value,
      error: this.state.error.filter((item) => item.name !== type),
    });
  };

  uploadImage = async (e) => {
    await this.uploadToImbb(e, (listLink) => {
      this.setState({
        images: [...this.state.images, ...listLink],
      });
    });
  };

  handleDeleteImage = (index) => {
    let images = this.state.images;
    images.splice(index, 1);
    this.setState({
      images: images,
    });
  };

  uploadToImbb = async (e, callback = false) => {
    let files = e.target.files;
    var listLink = [];
    if (files) {
      for (const file of [...files]) {
        console.log("Đang upload hình ảnh lên imgbb...");
        let apiUrl = "https://Hoaitin70.imgbb.com/json";
        let auth_token = "e721864fb61ac30573759a0e9f792a9ff4e08a36";
        let options = {
          async: false,
          crossDomain: true,
          processData: false,
          contentType: false,
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          mimeType: "multipart/form-data",
        };
        let formData = new FormData();
        formData.append("source", file);
        formData.append("type", "file");
        formData.append("action", "upload");
        formData.append("timestamp", +new Date() * 1);
        formData.append("auth_token", auth_token);
        options.body = formData;
        await fetch(apiUrl, options)
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            let obj = response;
            let linkRS = obj.image.display_url;
            console.log("Link: " + linkRS);
            listLink.push(linkRS);
          });
      }
      if (callback != false) {
        callback(listLink);
      }
    }
  };

  async componentDidMount() {
    let responseCategories = await getAllCategories();
    if (responseCategories && responseCategories.errCode === 0) {
      this.setState({
        categories: responseCategories.data,
      });
    }
  }

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
                  className="fw-bold"
                  // style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span className="text-primary-cake text-center fw-light">Thêm sản phẩm</span>
                </h4>
                  {/*<Link*/}
                  {/*  to={path.productManage}*/}
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
                            value={this.state.name}
                            autoFocus
                            onChange={(e) =>
                              this.handleChangeInput(e.target.value, "name")
                            }
                          />
                          {this.state.error &&
                            this.state.error.map((item, index) => {
                              if (item.name === "name") {
                                return (
                                  <p className="text-danger">{item.message}</p>
                                );
                              }
                            })}
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label" htmlFor="category">
                            Category
                          </label>
                          <select
                            id="category"
                            className="select2 form-select"
                            value={this.state.category}
                            onChange={(e) =>
                              this.handleChangeInput(e.target.value, "category")
                            }
                          >
                            <option value="">Select</option>
                            {this.state.categories &&
                              this.state.categories.map((item, index) => {
                                return (
                                  <option value={item.id}>{item.name}</option>
                                );
                              })}
                          </select>
                          {this.state.error &&
                            this.state.error.map((item, index) => {
                              if (item.name === "category") {
                                return (
                                  <p className="text-danger">{item.message}</p>
                                );
                              }
                            })}
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label" htmlFor="size">
                            Size
                          </label>
                          <select
                            value={this.state.size}
                            id="size"
                            className="select2 form-select"
                            onChange={(e) =>
                              this.handleChangeInput(e.target.value, "size")
                            }
                          >
                            <option value="">Select</option>
                            <option value="Nhỏ">Nhỏ</option>
                            <option value="Vừa">Vừa</option>
                            <option value="Lớn">Lớn</option>
                          </select>
                          {this.state.error &&
                            this.state.error.map((item, index) => {
                              if (item.name === "size") {
                                return (
                                  <p className="text-danger">{item.message}</p>
                                );
                              }
                            })}
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="weight" className="form-label">
                            Weight
                          </label>
                          <select
                            value={this.state.weight}
                            id="weight"
                            className="select2 form-select"
                            onChange={(e) =>
                              this.handleChangeInput(e.target.value, "weight")
                            }
                          >
                            <option value="">Select</option>
                            <option value="200">200</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                          </select>
                          {this.state.error &&
                            this.state.error.map((item, index) => {
                              if (item.name === "weight") {
                                return (
                                  <p className="text-danger">{item.message}</p>
                                );
                              }
                            })}
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="price" className="form-label">
                            Price
                          </label>
                          <input
                            onChange={(e) =>
                              this.handleChangeInput(e.target.value, "price")
                            }
                            className="form-control"
                            type="text"
                            id="price"
                            value={this.state.price}
                          />
                          {this.state.error &&
                            this.state.error.map((item, index) => {
                              if (item.name === "price") {
                                return (
                                  <p className="text-danger">{item.message}</p>
                                );
                              }
                            })}
                        </div>
                        {/* // status */}
                        <div className="mb-3 col-md-6">
                          <label className="form-label" htmlFor="status">
                            Status
                          </label>
                          <select
                            value={this.state.status}
                            id="status"
                            className="select2 form-select"
                            onChange={(e) =>
                              this.handleChangeInput(e.target.value, "status")
                            }
                          >
                            <option value="">Select</option>
                            <option value="0">Active</option>
                            <option value="1">Inactive</option>
                          </select>
                          {this.state.error &&
                            this.state.error.map((item, index) => {
                              if (item.name === "status") {
                                return (
                                  <p className="text-danger">{item.message}</p>
                                );
                              }
                            })}
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="description" className="form-label">
                            Description
                          </label>
                          <textarea
                            onChange={(e) =>
                              this.handleChangeInput(
                                e.target.value,
                                "description"
                              )
                            }
                            className="form-control"
                            id="description"
                            rows={4}
                            value={this.state.description}
                          />
                          {this.state.error &&
                            this.state.error.map((item, index) => {
                              if (item.name === "description") {
                                return (
                                  <p className="text-danger">{item.message}</p>
                                );
                              }
                            })}
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="introduction" className="form-label">
                            Introduction
                          </label>
                          <textarea
                            onChange={(e) =>
                              this.handleChangeInput(
                                e.target.value,
                                "introduction"
                              )
                            }
                            className="form-control"
                            id="introduction"
                            rows={4}
                            value={this.state.introduction}
                          />
                          {this.state.error &&
                            this.state.error.map((item, index) => {
                              if (item.name === "introduction") {
                                return (
                                  <p className="text-danger">{item.message}</p>
                                );
                              }
                            })}
                        </div>
                        <div
                          className="mb-3 col-md-12"
                          style={{ display: "flex" }}
                        >
                          {this.state.images &&
                            this.state.images.map((item, index) => {
                              return (
                                <div className="image-container" key={index}>
                                  <img
                                    src={item}
                                    // className="w-80 h-80"
                                    alt="Image"
                                    style={{
                                      width: "90px",
                                      height: "90px",
                                      objectFit: "contain",
                                    }}
                                  />
                                  <button
                                    className="close-btn"
                                    onClick={() =>
                                      this.handleDeleteImage(index)
                                    }
                                  >
                                    <i class="fas fa-times"></i>
                                  </button>
                                </div>
                              );
                            })}
                          {this.state.error &&
                            this.state.error.map((item, index) => {
                              if (item.name === "images") {
                                return (
                                  <p className="text-danger">{item.message}</p>
                                );
                              }
                            })}
                        </div>
                        <div className="mt-2">
                          <div
                            className={"upload-image btn-icon"}
                            style={{
                              height: "40px",
                              width: "100px",
                              borderRadius: "30px",
                              backgroundColor: "#6610f2",
                              color: "white",
                            }}
                          >
                            {" "}
                            <label
                              htmlFor={"sendImg"}
                              style={{ display: "flex" }}
                            >
                              <i
                                className="fas fa-upload"
                                style={{ marginRight: "5px" }}
                              ></i>{" "}
                              UpLoad
                            </label>
                            <input
                              style={{ display: "none" }}
                              className={"inputImg"}
                              type={"file"}
                              multiple
                              id={"sendImg"}
                              onChange={(e) => this.uploadImage(e)}
                            />
                          </div>
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
                          onClick={() => this.handleSubmit()}
                          className="btn btn-primary me-2 "
                          style={{ padding: "0 10px" }}
                        >
                          Thêm Sản Phẩm
                        </button>
                      </div>
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
