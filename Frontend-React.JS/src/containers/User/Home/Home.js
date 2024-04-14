import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Home.scss"
import Header from '../Header/Header';
class HOME extends Component {

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
        <Header> </Header>

         {/* Hero Start */}
         <div className="container-fluid py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-12 col-lg-7">
                <h4 className="mb-3 text-secondary">Trao bánh - Trao yêu thương</h4>
                <h1 className="mb-5 display-3 text-primary">Nơi vị ngọt kết hợp với bình yên</h1>
                <div className="position-relative mx-auto">
                  <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="Nhập vào tên bánh..." />
                  <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{top: 0, right: '25%'}}>Tìm kiếm ngay</button>
                </div>
              </div>
              <div className="col-md-12 col-lg-5">
                <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active rounded">
                      <img src="img/hero-img-1.png" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />
                    </div>
                    <div className="carousel-item rounded">
                      <img src="img/hero-img-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/* Featurs Section Start */}
        <div className="container-fluid featurs py-5">
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center rounded bg-light p-4">
                  <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                    <i className="fas fa-car-side fa-3x text-white" />
                  </div>
                  <div className="featurs-content text-center">
                    <h5>Giao hàng miễn phí</h5>
                    <p className="mb-0">Miễn phí giao hàng tại TPHCM</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center rounded bg-light p-4">
                  <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                    <i className="fas fa-user-shield fa-3x text-white" />
                  </div>
                  <div className="featurs-content text-center">
                    <h5>Thanh toán bảo mật</h5>
                    <p className="mb-0">Đảm bảo thanh toán bảo mật</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center rounded bg-light p-4">
                  <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                    <i className="fas fa-exchange-alt fa-3x text-white" />
                  </div>
                  <div className="featurs-content text-center">
                    <h5>Đổi trả miễn phí</h5>
                    <p className="mb-0">Hỗ trợ đổi trả nếu sản phẩm không giống mẫu hoặc lỗi</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center rounded bg-light p-4">
                  <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                    <i className="fa fa-phone-alt fa-3x text-white" />
                  </div>
                  <div className="featurs-content text-center">
                    <h5>Hỗ trợ 24/7</h5>
                    <p className="mb-0">Nhân viên tư vấn sẵn sàng hỗ trợ khách hàng mọi lúc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Featurs Section End */}
        {/* Fruits Shop Start*/}
        <div className="container-fluid fruite py-5">
          <div className="container py-5">
            <div className="tab-class text-center">
              <div className="row g-4">
                <div className="col-lg-4 text-start">
                  <h1>Sản phẩm</h1>
                </div>
                <div className="col-lg-8 text-end">
                  <ul className="nav nav-pills d-inline-flex text-center mb-5">
                    <li className="nav-item">
                      <a className="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                        <span className="text-dark" style={{width: '130px'}}>Tất cả</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                        <span className="text-dark" style={{width: '130px'}}>Vegetables</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                        <span className="text-dark" style={{width: '130px'}}>Fruits</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                        <span className="text-dark" style={{width: '130px'}}>Bread</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                        <span className="text-dark" style={{width: '130px'}}>Meat</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Grapes</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Grapes</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Raspberries</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-4.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Apricots</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-3.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Banana</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-1.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Oranges</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Raspberries</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Grapes</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Grapes</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Raspberries</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-1.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Oranges</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-6.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Apple</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-4" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Grapes</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-4.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Apricots</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-5" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-3.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Banana</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Raspberries</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/fruite-item-1.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Oranges</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>      
          </div>
        </div>
        {/* Fruits Shop End*/}
        {/* Featurs Start */}
        <div className="container-fluid service py-5">
          <div className="container py-5">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-secondary rounded border border-secondary">
                    <img src="img/featur-1.jpg" className="img-fluid rounded-top w-100" alt="" />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-primary text-center p-4 rounded">
                        <h5 className="text-white">Fresh Apples</h5>
                        <h3 className="mb-0">20% OFF</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-dark rounded border border-dark">
                    <img src="img/featur-2.jpg" className="img-fluid rounded-top w-100" alt="" />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-light text-center p-4 rounded">
                        <h5 className="text-primary">Tasty Fruits</h5>
                        <h3 className="mb-0">Free delivery</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-primary rounded border border-primary">
                    <img src="img/featur-3.jpg" className="img-fluid rounded-top w-100" alt="" />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-secondary text-center p-4 rounded">
                        <h5 className="text-white">Thăng hoa trong vị ngọt</h5>
                        <h3 className="mb-0">Discount 30$</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Featurs End */}
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

export default connect(mapStateToProps, mapDispatchToProps)(HOME);
