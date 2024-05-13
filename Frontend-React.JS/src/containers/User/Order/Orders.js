import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from "../../../components/ComponentOrder/Order";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumb from "../breadcrumb";
import Empty from "../../../components/Empty";


class Orders extends Component {

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
            { title: "Đơn hàng của tôi", link: "/odders", active: true }
        ];

        return (
            <>
            <Header/>
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container-91 mx-auto">
                <div className="row">
                    <div className="tab-content flex-sm-row mt-2">

                        {/*<Empty message={"Không có đơn hàng nào"}/>*/}

                        <Order/>
                        <Order/>
                        <Order/>


                    </div>
                </div>
            </div>
                <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
