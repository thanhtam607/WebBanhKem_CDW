import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { getListProducts } from "../../../services/productService";
import { getAllBill } from "../../../services/billService";
import StatusBill from "../../../components/ComponentOrder/StatusBill";
import {Link} from "react-router-dom";

class TableOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOrders: [],
      currentPage: 0,
      itemsPerPage: 10
    };
  }

  handlePageChange = ({ selected }) => {
    this.setState({
      currentPage: selected,
    });
  };

  // handle create
  handleCreate = () => {};
  handleEdit = () => {};
  handleDelete = () => {};

  async componentDidMount() {
    let response = await getAllBill();
    if (response && response.errCode === 0) {
      this.setState({
        listOrders: response.data,
      });
    }
  }

  getPayment = (payment) => {
    return payment === 0 ? "Tiền mặt" : "Chuyển khoản";
  };
  formatDateTime(dateString) {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "UTC",
    };

    return new Date(dateString)
        .toLocaleDateString("vi-VN", options)
        .replace(",", "");
  }
  render() {
    const { listOrders, currentPage, itemsPerPage } = this.state;

    // Tính toán các đơn hàng sẽ hiển thị trên trang hiện tại
    const offset = currentPage * itemsPerPage;
    const currentPageItems = listOrders.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(listOrders.length / itemsPerPage);

    return (
        <div className="card">
          <div
              className="d-flex justify-content-end align-items-center mb-3"
              style={{ margin: "20px 10px" }}
          >

            {/* Bạn có thể thêm các nút hoặc các phần tử khác tại đây */}
          </div>
          <div className="table-responsive text-nowrap" >
            <table className="table" >
              <thead>
              <tr>
                <th>#</th>
                <th>Tên KH</th>
                <th>Địa chỉ</th>
                <th>SDT</th>
                <th>Thành tiền</th>
                <th>Ghi chú</th>
                <th>Thanh toán</th>
                <th>Ngày tạo</th>
                <th>Trạng thái</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody className="table-border-bottom-0">
              {currentPageItems.map((order, index) => (
                  <tr key={index + offset}>
                    <td>{index + 1 + offset}</td>
                    <td className="column">{order.fullname}</td>
                    <td className="column">{order.address}</td>
                    <td>{order.phone_number}</td>
                    <td>{order.pro_bill}</td>
                    <td>{order.notes}</td>
                    <td>{this.getPayment(order.payment)}</td>
                    <td>{this.formatDateTime(order.createdAt)}</td>
                    <td>
                      <StatusBill status={order.status}></StatusBill>
                    </td>
                    <td>
                      <a
                          type="button"
                          className="btn btn-icon btn-icon-only btn-outline-primary"
                          data-bs-toggle="tooltip"
                          title="Edit"
                          href={`/admin/order-detail/${order.id}`}
                      >
                        <i className="bx bx-edit" />
                      </a>
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
              ))}
              </tbody>
            </table>

            <div className="col-12">
              <div className="pagination d-flex justify-content-end mt-5">
                <ReactPaginate
                    nextLabel=">>"
                    onPageChange={this.handlePageChange}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
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
