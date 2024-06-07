import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { path } from "../../../utils";
import Swal from "sweetalert2";
import {
  getProductById,
  updateProduct,
} from "../../../services/productService";
import { getAllCategories } from "../../../services/categorySerive";
import { updateImage, deleteImage } from "../../../services/imageService";

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
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
    };
  }

  handleUpdateImage = async (e, index) => {
    await this.uploadToImbb(e, async (listLink) => {
      await updateImage(this.state.images[index].id, listLink[0]);
      let images = this.state.images;
      images[index].img = listLink[0];
      this.setState({
        images: images,
      });
    });
  };

  handleDeleteImage = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let response = await deleteImage(id);
        console.log("====> ", response);
        if (response.errCode === 0) {
          let images = this.state.images.filter((item) => item.id !== id);
          this.setState({
            images: images,
          });
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } else {
          Swal.fire("Error!", "Your file has not been deleted.", "error");
        }
      }
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
    let response = await getProductById(this.props.match.params.id);
    let responseCategories = await getAllCategories();
    if (response.errCode === 0) {
      this.setState({
        product: response.product,
        images: response.product.Images,
        categories: responseCategories.data,
        name: response.product.name,
        category: response.product.categoryId,
        size: response.product.size,
        weight: response.product.weight,
        price: response.product.price,
        status: response.product.status,
        description: response.product.description,
        introduction: response.product.introduction,
      });
    }
  }

  handleUploadProduct = async () => {
    let response = await updateProduct(
      this.props.match.params.id,
      this.state.category,
      this.state.name,
      this.state.size,
      this.state.weight,
      this.state.description,
      this.state.introduction,
      this.state.price,
      this.state.status
    );
    if (response.errCode === 0) {
      Swal.fire({
        icon: "success",
        title: "Update Product Success",
        showCancelButton: true,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          this.props.history.push(path.ADMINPRODUCTMANAGE);
        }
      });
    }
  };

  handleChangeInput = (value, type) => {
    this.setState({
      [type]: value,
    });
  };

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
                      <div className="row">
                        <div className="mb-3 col-md-6">
                          <label htmlFor="firstName" className="form-label">
                            Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={this.state.name}
                            autoFocus
                            onChange={(e) =>
                              this.handleChangeInput(e.target.value, "name")
                            }
                          />
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
                            {this.state.categories &&
                              this.state.categories.map((item, index) => {
                                return (
                                  <option value={item.id}>{item.name}</option>
                                );
                              })}
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label" htmlFor="size">
                            Size
                          </label>
                          <select
                            id="size"
                            className="select2 form-select"
                            value={this.state.size}
                            onChange={(e) =>
                              this.handleChangeInput(e.target.value, "size")
                            }
                          >
                            <option value="Nhỏ">Nhỏ</option>
                            <option value="Vừa">Vừa</option>
                            <option value="Lớn">Lớn</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="weight" className="form-label">
                            Weight
                          </label>
                          <select
                            id="weight"
                            className="select2 form-select"
                            value={this.state.weight}
                            onChange={(e) =>
                              this.handleChangeInput(e.target.value, "weight")
                            }
                          >
                            <option value="200">200</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                          </select>
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
                              {this.state.images && this.state.images.length > 0
                                ? this.state.images.map((item, index) => {
                                    return (
                                      <tr>
                                        <td>{index}</td>
                                        <td>
                                          <div className="d-flex align-items-center">
                                            <img
                                              src={item.img}
                                              alt="product"
                                              className="w-px-100 h-px-100 rounded margin-left-10"
                                              style={{ marginLeft: "10px" }}
                                            />
                                          </div>
                                        </td>
                                        <td style={{ width: "200px" }}>
                                          {item.img}
                                        </td>

                                        <td>
                                          <button
                                            type="button"
                                            className="btn btn-icon btn-icon-only btn-outline-primary"
                                            data-bs-toggle="tooltip"
                                            title="Edit"
                                          >
                                            <label
                                              htmlFor={"sendImg"}
                                              style={{
                                                display: "flex",
                                                justifyContent: "center",
                                              }}
                                            >
                                              <i className="bx bx-edit" />
                                              <input
                                                style={{ display: "none" }}
                                                className={"inputImg"}
                                                type={"file"}
                                                multiple
                                                id={"sendImg"}
                                                onChange={(e) =>
                                                  this.handleUpdateImage(
                                                    e,
                                                    index
                                                  )
                                                }
                                              />
                                            </label>
                                          </button>
                                          <button
                                            type="button"
                                            className="btn btn-icon btn-icon-only btn-outline-danger"
                                            title="Delete"
                                            onClick={() =>
                                              this.handleDeleteImage(item.id)
                                            }
                                          >
                                            <i className="bx bx-trash" />
                                          </button>
                                        </td>
                                      </tr>
                                    );
                                  })
                                : ""}
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
                          onClick={() => this.handleUploadProduct()}
                          className="btn btn-primary me-2 "
                          style={{ padding: "0 10px" }}
                        >
                          Sửa sản phẩm
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct);
