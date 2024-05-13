import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from "../../../components/ComponentOrder/Order";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumb from "../breadcrumb";


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

                        {/*<div class="cartEmpty" name="cartEmpty">*/}
                        {/*<img src="./img/null.png" alt="Giỏ hàng của bạn đang trống" class="d-block m-auto" width="250" />*/}
                        {/*<p class="text-center font-weight-bold" style="opacity: .6;">Không có đơn hàng nào</p>*/}
                        {/*</div>*/}
                        {/*<div class="col-lg-12">*/}
                        {/*<div class="shoping__cart__btns" style="text-align: center">*/}
                        {/*<a href="./ListProduct" class="primary-btn cart-btn" >Xem thêm sản phẩm </a>*/}
                        {/*</div>*/}
                        {/*</div>*/}


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
