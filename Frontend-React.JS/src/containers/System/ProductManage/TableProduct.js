import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { path } from "../../../utils";
import {deleteProduct, getListProducts} from "../../../services/productService";
import Swal from "sweetalert2";

class TableProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      searchKeyword: "",
      data: [],
    };
  }

  handlePageChange = ({ selected }) => {
    this.setState({
      currentPage: selected,
    });
  };

  handleSearchChange = (e) => {
    this.setState({
      searchKeyword: e.target.value, // Cập nhật từ khóa tìm kiếm khi người dùng nhập
      currentPage: 0, // Reset trang về 0 khi thực hiện tìm kiếm
    });
  };

  handleDeleteProduct = async (id) => {
    console.log("id", id);
    Swal.fire({
      title: "Xóa sản phẩm?",
      text: "Bạn có chắc muốn xóa sản phẩm này!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Tiếp tục xóa",
      cancelButtonText:"Thoát"
    }).then(async (result) => {
      if (result.isConfirmed) {
        let response = await deleteProduct(id);
        if (response.errCode === 0) {
          let data = this.state.data.filter((item) => item.id !== id);
          this.setState({
            data: data,
          });
          Swal.fire("Xóa sản phẩm thành công!", "Xóa sản phẩm thành công.", "success");
        } else {
          Swal.fire("Lỗi!", "Sản phẩm này đã bị xóa.", "error");
        }
      }
    });
  };

  async componentDidMount() {
    let response = await getListProducts();
    if (response.errCode === 0 && response.listProducts.length > 0) {

      this.setState({
        data: response.listProducts,
      });
    }
  }

  render() {
    const { itemsPerPage } = this.props;
    const { currentPage, searchKeyword, data } = this.state;

    // console.log("filteredData", filteredData);

    const offset = currentPage * itemsPerPage;

    const currentPageData = data
      .sort((a, b) => b.id - a.id)
      .slice(offset, offset + itemsPerPage);

    return (
      <div className="card">
        <div
          className="d-flex justify-content-between align-items-center mb-3 "
          style={{ margin: "20px 10px" }}
        >
          <Link
            to={path.ADMINCREATEPRODUCT}
            className="btn btn-danger"
            style={{ height: "35px", padding: "0 10px" }}
          >
           Thêm sản phẩm
          </Link>
          <div className="d-flex align-items-center">
            <label htmlFor="search" className="me-2">
              Search
            </label>
            <input
              style={{ width: "300px", height: "35px" }}
              type="text"
              id="search"
              value={searchKeyword}
              onChange={this.handleSearchChange}
              className="form-control"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Trạng thái</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {currentPageData.map((item, index) => {
                return (
                  <tr>
                    <td>{index}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                            src={ item.Images[0].img.includes('http') ?  item.Images[0].img : `../${item.Images[0].img}`}

                            
                          alt="product"
                          className="w-px-40 h-auto rounded"
                        />
                        <div className="ms-3">
                          <h6 className="mb-0">{item.name}</h6>
                          <span
                            className="text-muted "
                            style={{ marginRight: "10px" }}
                          >
                            Size: {item.size}
                          </span>
                          <span className="text-muted">
                            Weight: {item.weight}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-label-primary me-1">
                        {item.price}VNĐ
                      </span>
                    </td>
                    <td>
                      <span className="badge bg-label-primary me-1">
                        Active
                      </span>
                    </td>
                    <td>
                      <Link
                        to={path.ADMINEDITPRODUCT.replace(":id", item.id)}
                        className="btn btn-icon btn-icon-only btn-outline-primary"
                        title="Edit"
                      >
                        <i className="bx bx-edit" />
                      </Link>
                      <button
                        className="btn btn-icon btn-icon-only btn-outline-danger"
                        onClick={() => this.handleDeleteProduct(item.id)}
                        title="Delete"
                      >
                        <i className="bx bx-trash" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="col-12 ">
            <div className="pagination d-flex justify-content-end mt-5">
              <ReactPaginate
                nextLabel=">>"
                onPageChange={this.handlePageChange}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={Math.ceil(data.length / itemsPerPage)}
                previousLabel="<<"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableProduct);
