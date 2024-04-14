import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Card.scss"
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
class Card extends Component {

    constructor(props){
        super(props);
        this.state = {
        
        }

    }

    componentDidMount() {
    }
    render() {
        return (
            <div>
            <Header/>
        {/* Single Page Header start */}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Giỏ hàng</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
            <span>/</span>
            <li className="breadcrumb-item active text-white">Giỏ hàng</li>
          </ol>
        </div>
        {/* Single Page Header End */}
        {/* Cart Page Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Tổng cộng</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img src="img/vegetable-item-3.png" className="img-fluid me-5 rounded-circle" style={{width: '80px', height: '80px'}} alt="" />
                      </div>
                    </th>
                    <td>
                      <p className="mb-0 mt-4">Big Banana</p>
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
                      <button className="btn btn-md rounded-circle bg-light border mt-4">
                        <i className="fa fa-times text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img src="img/vegetable-item-5.jpg" className="img-fluid me-5 rounded-circle" style={{width: '80px', height: '80px'}} alt="" />
                      </div>
                    </th>
                    <td>
                      <p className="mb-0 mt-4">Potatoes</p>
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
                      <button className="btn btn-md rounded-circle bg-light border mt-4">
                        <i className="fa fa-times text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img src="img/vegetable-item-2.jpg" className="img-fluid me-5 rounded-circle" style={{width: '80px', height: '80px'}} alt="" />
                      </div>
                    </th>
                    <td>
                      <p className="mb-0 mt-4">Awesome Brocoli</p>
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
                      <button className="btn btn-md rounded-circle bg-light border mt-4">
                        <i className="fa fa-times text-danger" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-5">
              <input type="text" className="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Coupon Code" />
              <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">Apply Coupon</button>
            </div>
            <div className="row g-4 justify-content-end">
              <div className="col-8" />
              <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                <div className="bg-light rounded">
                  <div className="p-4">
                    <h1 className="display-6 mb-4">Cart<span className="fw-normal">Tổng cộng</span></h1>
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
                  <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Đặt hàng</button>
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
