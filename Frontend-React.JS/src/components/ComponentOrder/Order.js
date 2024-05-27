import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderDetail from "./OrderDetail";

class Order extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }
    formatDate = (isoString) => {
        const date = new Date(isoString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng tính từ 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };
    getStatus = (status)=>{
        if(status ==0){
            return "Đang chờ duyệt"
        }else if(status ==1){
            return "Đặt hàng thành công"
        }else{
            return "Đã hủy"
        }
    }

    componentDidMount() {
    }
    render() {
        const order = this.props.order;
        return (
            <>
                <div className="my-2 center overflow-hidden">
                    <div className="row">
                        <div className="col-6">
                            <small className="text-secondary d-inline-block pt-3 pl-3">Ngày đặt hàng: </small>
                            <small className="text-secondary d-inline-block pt-3 " style={{ padding: 0, margin: 0 }}
                            >{this.formatDate(order.createdAt)}</small>
                        </div>
                        <div className="col-6 text-right  my-2 pt-2 ">
                            <small className="d-inline text-secondary">Trạng thái |</small>
                            <div id="statusName<%=r.getId()%>" className="d-inline pr-3 text-uppercase"
                                 style={{ color: "#ee4d2d", fontSize: "14px" }}>
                                <span>{this.getStatus(order.status)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card border-left-0 border-right-0 border-bottom-0 mx-3">

                        {order.billDetailData.map((item)=>(
                            <OrderDetail  orderDetail={item}/>
                            ))}




                    </div>
                    <div className="row mb-2 flex-row-reverse" style={{ marginTop: "6px" }}>
                        <div className="col-12 my-2">
                            <div className="text-right pr-5">
                                <h6 className="d-inline text-dark">Tổng tiền hàng: </h6>
                                <span className="d-inline" style={{ fontWeight: 400 }}>{order.pro_bill} VND</span>
                            </div>
                        </div>
                        <div className="col-12 my-2">
                            <div className="text-right pr-5">
                                <h6 className="d-inline text-dark">Phí vận chuyển: </h6>
                                <span className="d-inline" style={{ fontWeight: 400 }}>{order.fee_bill} VND</span>
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
                                <h3 className="d-inline" style={{ color: "#ee4d2d" }}>{order.pro_bill}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-2">
                        <div className="card-body my-0">
                            <div className="card-text text-dark border-bottom pb-2">
                                <span className=" text-dark">GHI CHÚ CHUNG: {order.notes}</span>
                            </div>
                            <div className="card-text text-dark pt-2">
                                <span className=" text-dark text-uppercase">ĐỊA CHỈ GIAO HÀNG: {order.address}</span>
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
