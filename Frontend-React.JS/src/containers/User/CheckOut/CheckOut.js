import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./CheckOut.scss"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Breadcrumb from "../breadcrumb";
class CheckOut extends Component {

    constructor(props){
        super(props);
        this.state = {
          selectedPaymentMethod: null,
          error: '',
          district:'',
          city:'',
          ward:'',
          addDetail:'',
          billingInfo: {
            fullName: '',
            email: '',
            address: '',
            phone_number: '',
            notes:'',
            pro_bill:0,
            fee_bill:0,
            billDetail:[],

          },
        }

    }

  handlePaymentMethodChange = (method) => {
    this.setState({ selectedPaymentMethod: method });
    this.setState({ error: '' });
  }
  handlePlaceOrder = () => {
    const { selectedPaymentMethod } = this.state;

    if (!selectedPaymentMethod) {
      this.setState({ error: 'Vui lòng chọn phương thức thanh toán.' });
      return;
    }

    // Xử lý việc đặt hàng
    // Ví dụ: Gửi thông tin đặt hàng đến server
  }



  componentDidMount() {
    }
    render() {
      const selectedItems = this.props.user.carts.filter(item => item.status === 1)
      const breadcrumbItems = [
        {title: "Trang chủ", link: "/", active: false},
        {title: "Thanh toán", link: "/checkout", active: true}
      ];
      const { selectedPaymentMethod, error} = this.state;
      console.log(error)
      return (<div>
          <Header pageActive={"Trang chủ"}/>
          <Breadcrumb items={breadcrumbItems}/>
            {/* Single Page Header End */}
            {/* Checkout Page Start */}
            <div className="container-fluid py-5">
              <div className="container py-5">
                <h1 className="mb-4">Chi tiết mua hàng</h1>
                <form action="#">
                  <div className="row g-5">
                    <div className="col-md-12 col-lg-6 col-xl-7">
                      <div className="row">
                        <div className="col-md-12 col-lg-6">
                          <div className="form-item">
                            <label className="form-label my-3">Họ tên<sup>*</sup></label>
                            <input type="text" className="form-control"  value={this.state.billingInfo.fullname}/>
                          </div>
                        </div>
                      </div>
                      <div className="form-item">
                        <label className="form-label my-3">Địa chỉ<sup>*</sup></label>
                        <input type="text" className="form-control" placeholder="Số nhà..." value={this.state.addDetails}/>
                      </div>
                      <div className="form-item">
                        <label className="form-label my-3">Phường/xã<sup>*</sup></label>
                        <select className="form-control form-select" value={this.state.ward}>
                          <option value="" disabled selected hidden>Chọn phường/xã</option>
                          <option value="2">Số nhà 2</option>
                          <option value="3">Số nhà 3</option>
                          {/* Thêm các lựa chọn khác tùy thuộc vào nhu cầu của bạn */}
                        </select>
                      </div>
                      <div className="form-item">
                        <label className="form-label my-3">Quận/huyện<sup>*</sup></label>
                        <select className="form-control form-select" value={this.state.district}>
                          <option value="" disabled selected hidden>Chọn quận/huyện</option>
                          <option value="1">Số nhà 1</option>
                          <option value="2">Số nhà 2</option>
                          <option value="3">Số nhà 3</option>
                          {/* Thêm các lựa chọn khác tùy thuộc vào nhu cầu của bạn */}
                        </select>
                      </div>
                      <div className="form-item">
                        <label className="form-label my-3">Tỉnh/thành phố<sup>*</sup></label>
                        <select className="form-control form-select" value={this.state.city}>
                          <option value="" disabled selected hidden>Chọn tỉnh/thành phố</option>
                          <option value="1">Số nhà 1</option>
                          <option value="2">Số nhà 2</option>
                          <option value="3">Số nhà 3</option>
                          {/* Thêm các lựa chọn khác tùy thuộc vào nhu cầu của bạn */}
                        </select>
                      </div>
                      <div className="form-item">
                        <label className="form-label my-3">Số điện thoại<sup>*</sup></label>
                        <input type="tel" value={this.state.billingInfo.phone_number} className="form-control" />
                      </div>
                      <div className="form-item">
                        <label className="form-label my-3">Email<sup>*</sup></label>
                        <input type="email" className="form-control" value={this.state.billingInfo.email} />
                      </div>
                      <hr />
                      <div className="form-item">
                        <textarea name="text" className="form-control" spellCheck="false" cols={30} rows={11} placeholder="Ghi chú cho đơn hàng..." defaultValue={""}  value={this.state.billingInfo.notes}/>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-5">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Tên</th>
                              <th scope="col">Giá</th>
                              <th scope="col">Số lượng</th>
                              <th scope="col">Tổng cộng</th>
                            </tr>
                          </thead>
                          <tbody>
                          {selectedItems.map((item, index) => (
                              <tr>
                                <th scope="row">
                                  <div className="d-flex align-items-center mt-2">
                                    <img src={item.ProductData.Images[0].img} className="img-fluid rounded-circle" style={{width: '90px', height: '70px', marginTop:'10px'}} alt="" />
                                  </div>
                                </th>
                                <td className="py-5">{item.ProductData.name}</td>
                                <td className="py-5">{item.ProductData.price}</td>
                                <td className="py-5">{item.quantity}</td>
                                <td className="py-5">{item.ProductData.price * item.quantity}</td>
                              </tr>
                              ))}



                          </tbody>
                        </table>
                      </div>

                      <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">

                        <div className="col-12">
                          <h4 className="text-primary-cake text-left">Phương thức thanh toán</h4>
                          <div className="form-check text-start my-3">
                            <label className="form-check-label"  id="Payments-1">
                              Thanh toán bằng thẻ nội địa
                              <input className="form-check-input bg-primary border-0" htmlFor="Payments-1"
                                     type="radio"
                                     name="paymentMethod"
                                     value="credit_card"
                                     checked={selectedPaymentMethod === 'credit_card'}
                                     onChange={() => this.handlePaymentMethodChange('credit_card')}/>
                            </label>

                          </div>
                          <div className="form-check text-start my-3">
                            <label className="form-check-label"  id="Payments-2">
                              Thanh toán khi nhận hàng
                              <input className="form-check-input bg-primary border-0" htmlFor="Payments-2"
                                     type="radio"
                                     name="paymentMethod"
                                     value="cash_on_delivery"
                                     checked={selectedPaymentMethod === 'cash'}
                                     onChange={() => this.handlePaymentMethodChange('cash')}/>
                            </label>

                          </div>
                        </div>
                        {error && <span className="error text-left" >*{error}*</span>}

                      </div>
                     <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                        <button type="button" onClick={this.handlePlaceOrder} className="btn bg-primary-cake border-secondary text-uppercase w-100 text-white">Đặt hàng</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Checkout Page End */}
            <Footer/>
          </div>
        )
    }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
    return {
      
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
