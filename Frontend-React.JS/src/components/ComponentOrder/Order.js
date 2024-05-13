import React, { Component } from 'react';
import { connect } from 'react-redux';

class Order extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }
    render() {
        return (
            <>
                <div className="my-2 center overflow-hidden">
                    <div className="row">
                        <div className="col-6">
                            <small className="text-secondary d-inline-block pt-3 pl-3">Ngày đặt hàng: </small>
                            <small className="text-secondary d-inline-block pt-3 " style={{ padding: 0, margin: 0 }}
                            >5/4/2024</small>
                        </div>
                        <div className="col-6 text-right  my-2 pt-2 ">
                            <small className="d-inline text-secondary">Trạng thái |</small>
                            <div id="statusName<%=r.getId()%>" className="d-inline pr-3 text-uppercase"
                                 style={{ color: "#ee4d2d", fontSize: "14px" }}>
                                <span>đang giao hàng</span>
                            </div>
                        </div>
                    </div>
                    <div className="card border-left-0 border-right-0 border-bottom-0 mx-3">

                        <div className="row my-3 pb-3 mx-2" style={{ borderBottom: "1px solid #eee" }}>
                            <div className="col-2">
                                <div className="vertical-center">
                                    <img className="d-block mx-auto" src="img/product/B001/banh1.jpg" width="100" />
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="card-body my-0">
                                    <div className="card-text text-dark">
                                        <a href="#" className="text-decoration-none text-dark text-uppercase">
                                            Bánh cánh đồng hoa
                                        </a>
                                    </div>
                                    <div className="text-dark" style={{ fontSize: "14px" }}
                                    >x 3</div>
                                    <div className="text-dark" style={{ fontSize: "14px" }}>Lời chúc trên bánh: Sinh nhật vui vẻ</div>
                                </div>
                            </div>
                            <div className="col-3 mt-3">
                                <small className="text-dark">450000 VND</small>
                            </div>
                        </div>




                    </div>
                    <div className="row mb-2 flex-row-reverse" style={{ marginTop: "6px" }}>
                        <div className="col-12 my-2">
                            <div className="text-right pr-5">
                                <h6 className="d-inline text-dark">Tổng tiền hàng: </h6>
                                <span className="d-inline" style={{ fontWeight: 400 }}>1350000 VND</span>
                            </div>
                        </div>
                        <div className="col-12 my-2">
                            <div className="text-right pr-5">
                                <h6 className="d-inline text-dark">Phí vận chuyển: </h6>
                                <span className="d-inline" style={{ fontWeight: 400 }}>15000 VND</span>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-2 mt-2" style={{ marginTop: "0px" }}>
                        <div className="col-6 pt-2 pb-3">
                            <div id="<%=r.getId()%>" className="text-left mr-3">
                                <button  type="submit" className="btn text-dark btn-cancel-order">Hủy đơn hàng</button>
                            </div>
                        </div>
                        <div className="col-6 my-2">
                            <div className="text-right pr-5">
                                <h6 className="d-inline text-dark">Tổng thanh toán: </h6>
                                <h3 className="d-inline" style={{ color: "#ee4d2d" }}>1365000</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-2">
                        <div className="card-body my-0">
                            <div className="card-text text-dark border-bottom pb-2">
                                <span className=" text-dark">GHI CHÚ CHUNG: Giao liền</span>
                            </div>
                            <div className="card-text text-dark border-bottom pb-2">
                                <span className=" text-dark text-uppercase">Dự kiến giao: 12/4/2025</span>
                            </div>
                            <div className="card-text text-dark pt-2">
                                <span className=" text-dark text-uppercase">ĐỊA CHỈ GIAO HÀNG: vĩnh cửu-đồng nai</span>
                            </div>
                        </div>
                    </div>
                </div>


            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Order);
