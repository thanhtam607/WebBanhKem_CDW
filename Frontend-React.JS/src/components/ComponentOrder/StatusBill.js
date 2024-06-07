import React, { Component } from 'react';
import { connect } from 'react-redux';


class StatusBill extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    getStatus = (status)=>{
        if(status ==1){
            return "Đang chờ duyệt"
        }else if(status ==3){
            return "Đặt hàng thành công"
        }else if(status ==2){
            return "Đã hủy"
        }else if(status ==4){
            return "Đã thanh toán"
        }else if(status ==5){
            return "Đang giao hàng"
        }else if(status ==6){
            return "Giao hàng thành công"
        }
    }
    render() {
        const status = this.props.status;
        return (
                <span>{this.getStatus(status)}</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(StatusBill);