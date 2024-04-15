import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Header.scss"
class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
        
        }

    }

    render() {
        return (
            <div>
        {/* Navbar start */}
        <div className="container-fluid fixed-top">
          <div className="container topbar bg-primary d-none d-lg-block">
            <div className="d-flex justify-content-between">
              <div className="top-info ps-2">
                <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary" /> <span  className="text-white">Thủ Đức, Thành phố Hồ Chí Minh</span></small>
                <small className="me-3"><i className="fas fa-envelope me-2 text-secondary" /><span className="text-white">tiembanhbinhyen@gmail.com</span></small>
              </div>
              <div className="top-link pe-2">
                <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
                <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
                <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
              </div>
            </div>
          </div>
          <div className="container px-0">
            <nav className="navbar navbar-light bg-white navbar-expand-xl">
              <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6">Peace Bakery</h1></a>
              <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars text-primary" />
              </button>
              <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                  <a href="index.html" className="nav-item nav-link active">Trang chủ</a>
                  <a href="shop.html" className="nav-item nav-link">Giới thiệu</a>
                  <a href="shop.html" className="nav-item nav-link">Sản phẩm</a>
                  {/*                            <a href="shop-detail.html" class="nav-item nav-link">Shop Detail</a>*/}
                  {/*                            <div class="nav-item dropdown">*/}
                  {/*                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>*/}
                  {/*                                <div class="dropdown-menu m-0 bg-secondary rounded-0">*/}
                  {/*                                    <a href="cart.html" class="dropdown-item">Cart</a>*/}
                  {/*                                    <a href="chackout.html" class="dropdown-item">Chackout</a>*/}
                  {/*                                    <a href="testimonial.html" class="dropdown-item">Testimonial</a>*/}
                  {/*                                    <a href="404.html" class="dropdown-item">404 Page</a>*/}
                  {/*                                </div>*/}
                  {/*                            </div>*/}
                  <a href="contact.html" className="nav-item nav-link">Liên hệ</a>
                </div>
                <div className="d-flex m-3 me-0">
                  <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary" /></button>
                  <a href="#" className="position-relative me-4 my-auto">
                    <i className="fa fa-shopping-bag fa-2x" />
                    <span className="position-absolute bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center px-1" style={{top: '-5px', left: '15px', height: '20px', minWidth: '20px'}}>3</span>
                  </a>
                  <a href="#" className="my-auto">
                    <i className="fas fa-user fa-2x" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}
        {/* Modal Search Start */}
        <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Tìm kiếm </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body d-flex align-items-center">
                <div className="input-group w-75 mx-auto d-flex">
                  <input type="search" className="form-control p-3" placeholder="Nhập vào từ khóa tìm kiếm..." aria-describedby="search-icon-1" />
                  <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal ngay End */}

        
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
