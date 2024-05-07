import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Home.scss"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Product from '../../../components/Product/Product';
import Featurs from '../../../components/ComponentsHome/Featurs/Featurs';
import HorizontalProduct from '../../../components/ComponentsHome/HorizontalProduct/HorizontalProduct';
import {getListProducts} from "../../../services/productService";
class HOME extends Component {

    constructor(props){
        super(props);
        this.state = {
          getAllProducts:[]
        
        }

    }
    shuffleArray(array) {
    // Xáo trộn mảng sử dụng thuật toán Fisher-Yates
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

    async componentDidMount() {
      let response = await getListProducts();
      const allProducts = response.listProducts;
      const shuffledProducts = this.shuffleArray(allProducts);
      const firstFourProducts = shuffledProducts.slice(0, 8); // Chỉ lấy 4 sản phẩm đầu tiên
      this.setState({
        getAllProducts: firstFourProducts
      });
      console.log(firstFourProducts);

    }

    render() {
        return (
            <div>
        <Header pageActive={"Trang chủ"}> </Header>

         {/* Hero Start */}
         <div className="container-fluid py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-12 col-lg-7">
                <h4 className="mb-3 text-secondary">Trao bánh - Trao yêu thương</h4>
                <h1 className="mb-5 display-3 text-primary-cake">Nơi vị ngọt kết hợp với bình yên</h1>
                <div className="position-relative mx-auto">
                  <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="Nhập vào tên bánh..." />
                  <button type="submit" className="btn  btn-cake border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{top: 0, right: '25%'}}>Tìm kiếm ngay</button>
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
                 <Featurs></Featurs>
              </div>
              <div className="col-md-6 col-lg-3">
               <Featurs></Featurs>
              </div>
              <div className="col-md-6 col-lg-3">
              <Featurs></Featurs>
              </div>
              <div className="col-md-6 col-lg-3">
               <Featurs></Featurs>
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
                        <span className="text-dark" style={{width: '130px'}}>Ngẫu nhiên</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                        <span className="text-dark" style={{width: '130px'}}>Bánh hoa</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                        <span className="text-dark" style={{width: '130px'}}>Bánh trái cây</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                        <span className="text-dark" style={{width: '130px'}}>Bánh socola</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                        <span className="text-dark" style={{width: '130px'}}>Tất cả</span>
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

                        {this.state.getAllProducts && this.state.getAllProducts.map((item) => (
                            <div className="col-md-6 col-lg-4 col-xl-3">
                            <Product key={item.id} product={item} />
                            </div>
                        ))}
                        {/**/}
                        {/*   /!*<Product></Product>*!/*/}


                        {/*<div className="col-md-6 col-lg-4 col-xl-3">*/}
                        {/*   /!*<Product></Product>*!/*/}
                        {/*</div>*/}

                        {/*<div className="col-md-6 col-lg-4 col-xl-3">*/}
                        {/*   /!*<Product></Product>*!/*/}
                        {/*</div>*/}
                           
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
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
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
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
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
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
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
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
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
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
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
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
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
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
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
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
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
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
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
                      <div className="service-content bg-primary-cake text-center p-4 rounded">
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
                        <h5 className="text-primary-cake">Tasty Fruits</h5>
                        <h3 className="mb-0">Free delivery</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-primary-cake rounded border border-primary">
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


             {/* Banner Section  */}
        <div className="container-fluid banner bg-secondary my-5">
          <div className="container py-5">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="py-4">
                  <h1 className="display-3 text-white">Thăng hoa trong vị ngọt</h1>
                  <p className="fw-normal display-3 text-dark mb-4">cùng chúng tôi</p>
                  <p className="mb-4 text-dark">Khám phá bộ sưu tập bánh kem đa dạng và phong phú của chúng tôi để làm cho mọi dịp đặc biệt hơn.</p>
                  <a href="#" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">Mua ngay</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <img src="img/baner-1.png" className="img-fluid w-100 rounded" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Section End */}

         {/* Bestsaler Product Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{maxWidth: '700px'}}>
            <h1 className="display-4">Sản phẩm bán chạy</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 col-xl-4">
               <HorizontalProduct></HorizontalProduct>
            </div>
            <div className="col-lg-6 col-xl-4">
            <HorizontalProduct></HorizontalProduct>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src="img/best-product-3.jpg" className="img-fluid rounded-circle w-100" alt="" />
                  </div>
                  <div className="col-6">
                    <a href="#" className="h5">Organic Tomato</a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star" />
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src="img/best-product-4.jpg" className="img-fluid rounded-circle w-100" alt="" />
                  </div>
                  <div className="col-6">
                    <a href="#" className="h5">Organic Tomato</a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star" />
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src="img/best-product-5.jpg" className="img-fluid rounded-circle w-100" alt="" />
                  </div>
                  <div className="col-6">
                    <a href="#" className="h5">Organic Tomato</a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star" />
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src="img/best-product-6.jpg" className="img-fluid rounded-circle w-100" alt="" />
                  </div>
                  <div className="col-6">
                    <a href="#" className="h5">Organic Tomato</a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star text-primary-cake" />
                      <i className="fas fa-star" />
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img src="img/fruite-item-1.jpg" className="img-fluid rounded" alt="" />
                <div className="py-4">
                  <a href="#" className="h5">Organic Tomato</a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star" />
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img src="img/fruite-item-2.jpg" className="img-fluid rounded" alt="" />
                <div className="py-4">
                  <a href="#" className="h5">Organic Tomato</a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star" />
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img src="img/fruite-item-3.jpg" className="img-fluid rounded" alt="" />
                <div className="py-4">
                  <a href="#" className="h5">Organic Tomato</a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star" />
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img src="img/fruite-item-4.jpg" className="img-fluid rounded" alt="" />
                <div className="py-2">
                  <a href="#" className="h5">Organic Tomato</a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star text-primary-cake" />
                    <i className="fas fa-star" />
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bestsaler Product End */}
        <Footer/>
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
