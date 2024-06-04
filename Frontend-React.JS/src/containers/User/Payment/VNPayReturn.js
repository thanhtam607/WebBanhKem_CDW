import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {updateStatusBill} from "../../../services/billService";

class VNPayReturn extends Component {
    constructor(props){
        super(props);

        this.state = {
            mess:''
        }
    }
    extractOrderNumber = (message)=> {
        const regex = /don hang ma (\d+)/;
        const match = message.match(regex);
        return match ? match[1] : null;
    }
    async componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const responseCode = params.get('vnp_ResponseCode');
        if (responseCode) {
            if (responseCode == '00') {
                this.setState({
                    mess: "Thanh toán đơn hàng thành công"
                });
                var orderInfor = params.get('vnp_OrderInfo')
                await updateStatusBill(this.extractOrderNumber(orderInfor), 4)
            } else {
                this.setState({
                    mess: "Thanh toán đơn hàng không thành công"
                });
            }
        }
    }

    render() {
        return (<>
        {/*    <Header pageActive={"Thông báo"}x*/}
        <div className="container-fluid py-5">
            <div className="container py-5 text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="display-1">Thông báo</h1>
                        <h1 className="mb-4">Thanh toán đơn hàng thành công</h1>
                        <Link className="btn btn-primary-cake text-white rounded-pill py-3 px-5" to="/orders">Xem danh sách đơn hàng</Link>
                    </div>
                </div>
            </div>
        </div></>
        );
    }
}

export default withRouter(VNPayReturn);
