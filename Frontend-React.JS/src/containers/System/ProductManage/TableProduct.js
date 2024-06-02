import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";

class TableProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      searchKeyword: "", // Thêm trường lưu trữ từ khóa tìm kiếm
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

  // handle create
  handleCreate = () => {};
  handleEdit = () => {};
  handleDelete = () => {};

  render() {
    const { data, itemsPerPage } = this.props;
    const { currentPage, searchKeyword } = this.state;

    const filteredData = data.filter((item) =>
      item.column1.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const offset = currentPage * itemsPerPage;
    const currentPageData = filteredData.slice(offset, offset + itemsPerPage);

    return (
      <div className="card">
        <div
          className="d-flex justify-content-between align-items-center mb-3 "
          style={{ margin: "20px 10px" }}
        >
          <button
            type="button"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#addProduct"
            style={{ height: "35px", padding: "0 10px" }}
          >
            <i className="bx bx-plus" />
            Add Product
          </button>
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
                <th>Price</th>
                <th>Trạng Thí</th>
                <th>Actions</th>
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
                      <span className="text-muted">Weight: 1.5kg</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge bg-label-primary me-1">$25</span>
                </td>
                <td>
                  <span className="badge bg-label-primary me-1">Active</span>
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

          <div className="col-12 ">
            <div className="pagination d-flex justify-content-end mt-5">
              <ReactPaginate
                nextLabel=">>"
                onPageChange={this.handlePageChange}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={Math.ceil(filteredData.length / itemsPerPage)}
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
