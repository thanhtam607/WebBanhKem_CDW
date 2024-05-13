import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Card.scss"
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Breadcrumb from "../breadcrumb";
class Card extends Component {

    constructor(props){
        super(props);
        this.state = {
        
        }

    }

    componentDidMount() {
    }
    render() {
      const breadcrumbItems = [
        { title: "Trang chủ", link: "/", active: false },
        { title: "Giỏ hàng", link: "/card", active: true }
      ];
        return (
            <div>
            <Header/>
            <Breadcrumb items={breadcrumbItems}/>
        {/* Cart Page Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Tổng cộng</th>
                    <th scope="col">#</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                    <input type="checkbox" />
                    </th>
                    <td>
                     <div className="d-flex align-items-center">
                        <img src="img/vegetable-item-3.png" className="img-fluid me-5 rounded-circle" style={{width: '80px', height: '80px'}} alt="" />
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 mt-4 col-name">Big Banana</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <div className="input-group quantity mt-4" style={{width: '100px'}}>
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <button className="btn btn-md bg-light border mt-4 handle_delete" >
                      <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                    <input type="checkbox" />
                    </th>
                    <td>
                     <div className="d-flex align-items-center">
                        <img src="img/vegetable-item-3.png" className="img-fluid me-5 rounded-circle" style={{width: '80px', height: '80px'}} alt="" />
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 mt-4 col-name">Big Banana Big Banana Big Banana Big Banana Big Banana</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <div className="input-group quantity mt-4" style={{width: '100px'}}>
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <button className="btn btn-md bg-light border mt-4 handle_delete" >
                      <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row g-4 justify-content-end">
              <div className="col-8" />
              <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                <div className="bg-light rounded">
                  <div className="p-4">
                    <h1 className="display-6 mb-4"><span className="fw-normal">Tổng cộng</span></h1>
                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="mb-0 me-4">Thành tiền:</h5>
                      <p className="mb-0">$96.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-0 me-4">Phí giao hàng</h5>
                      <div className>
                        <p className="mb-0">Flat rate: $3.00</p>
                      </div>
                    </div>
                    <p className="mb-0 text-end">Shipping to Ukraine.</p>
                  </div>
                  <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                    <h5 className="mb-0 ps-4 me-4">Tổng thanh toán</h5>
                    <p className="mb-0 pe-4">$99.00</p>
                  </div>
                  <button className="btn border-secondary btn_checkout" type="button">Đặt hàng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cart Page End */}
        <Footer/>
      </div>
        )
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
      
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
