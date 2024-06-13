import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import {getAllBill} from "../../../services/billService";
import OrderChart from "./OrderChart";
import Revenue from "./Revenue";
import ProductStatistics from "./ProductStatistics";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
        };
    }


    async componentDidMount() {
        const orders = await getAllBill(); // Hàm lấy dữ liệu đơn hàng từ API hoặc cơ sở dữ liệu
        if (orders && orders.length > 0) {
            this.setState({ orders });
        }
    }

    render() {
        const { orders } = this.state;

        // Tính toán dữ liệu cho biểu đồ
        const orderLabels = orders.map((order, index) => `Order ${index + 1}`);
        const orderTotalAmounts = orders.map((order) => order.totalAmount);

        // Dữ liệu cho biểu đồ cột
        const data = {
            labels: orderLabels,
            datasets: [
                {
                    label: "Total Amount",
                    backgroundColor: "rgba(75,192,192,1)",
                    borderColor: "rgba(0,0,0,1)",
                    borderWidth: 1,
                    data: orderTotalAmounts,
                },
            ],
        };

        return (
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Menu page={"Dashboard"} />
                    <div className="layout-page">
                        <NavBar />
                        <div className="content-wrapper">

                            <div className="container-xxl flex-grow-1 container-p-y">
                                <h4 className="text-primary-cake fw-bold">Thống kê</h4>
                                <div className="row">
                                    <div className="col-8">
                                    {/*<div className="col-12 col-lg-8 order-md-3 order-lg-2 mb-4">*/}
                                        <div className="card">
                                            <div className="card-body">
                                                <OrderChart/>
                                            </div>
                                        </div>
                                    {/*</div>*/}
                                    </div>
                                    <div className="col-4 col-md-8 col-lg-4 order-md-2">
                                    {/*<div className="col-12 ">*/}
                                        <div className="card  col-lg-9">
                                            <div className="card-body">
                                                <Revenue/>
                                            </div>
                                        </div>
                                    {/*</div>*/}
                                    {/*<div className="col-md-6 col-lg-4 mb-4">*/}
                                        <div className="card mgtop">
                                            <div className="card-body">
                                                 <ProductStatistics/>
                                            </div>
                                        </div>
                                    {/*</div>*/}
                                    </div>
                                </div>
                            </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
