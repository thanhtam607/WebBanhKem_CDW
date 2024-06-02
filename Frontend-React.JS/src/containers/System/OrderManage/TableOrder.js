import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";

class TableOrder extends Component {
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
          className="d-flex justify-content-end align-items-center mb-3 "
          style={{ margin: "20px 10px" }}
        >
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
                {/* bill fullname, address, phone, email, price, status */}
                <th>Fullname</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              <tr>
                <td>1</td>
                {/* bill fullname, address, phone, price, status */}
                <td>Nguyen Van A</td>
                <td>123 Nguyen Luong Bang</td>
                <td>0123456789</td>
                <td>200.000vnđ</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableOrder);
