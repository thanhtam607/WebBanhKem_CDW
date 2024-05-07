import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./ProductDetail.scss"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {getProductById} from "../../../services/productService";
import Breadcrumb from "../breadcrumb";
class ProductDetail extends Component {

    constructor(props) {
      super(props);

      this.state = {
        product: {}
      }

    }

  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      let response = await getProductById(id);

      if (response && response.errCode === 0) {
        if (response.product === null) {
          this.props.history.push('/error');
        }else
        this.setState({
          product: response.product
        });

      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

    render() {
      const p = this.state.product;

      const breadcrumbItems = [
        { title: "Trang chủ", link: "/", active: false },
        { title: "Sản phẩm", link: "/shop", active: false },
        { title: "Chi tiết sản phẩm", link: "/product-detail", active: true }
      ];
        return (
            <div>
              <Header pageActive={"Sản phẩm"}> </Header>
            {/* Single Page Header start */}
              <Breadcrumb items={breadcrumbItems}/>
            {/* Single Page Header End */}
            {/* Single Product Start */}
            <div className="container-fluid py-5 mt-5">
              <div className="container py-5">
                <div className="row g-4 mb-5">
                  <div className="col-lg-8 col-xl-9">
                    <div className="row g-4">
                      <div className="col-lg-6 col-md-6">
                        <div className="product__details__pic">
                          <div className="product__details__pic__item">
                            {p.Images && p.Images.length > 0 && // Kiểm tra nếu mảng tồn tại và không rỗng
                                <img className="product__details__pic__item--large"
                                     src={"../"+p.Images[0].img} alt=""/>
                            }
                          </div>
                          <div className="product__details__pic__slider owl-carousel">

                            {p.Images && p.Images.map((image, index) => (
                                <img
                                    key={index}
                                    data-imgbigurl={"../" + image.img}
                                    src={"../" + image.img}
                                    alt=""
                                />
                            ))}

                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <h4 className="fw-bold mb-3">{p.name}</h4>
                        {p.category && (
                          <p className="mb-3">Loại bánh: {p.category.name}</p>
                      )}

                        <h5 className="fw-bold mb-3">{p.price} VND</h5>
                        <div className="d-flex mb-4">
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star" />
                        </div>
                        <p className="mb-4">{p.introduction}</p>
                        {/*<p className="mb-4">Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>*/}
                        <div className="input-group quantity mb-5" style={{width: '100px'}}>
                          <div className="input-group-btn">
                            <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                              <i className="fa fa-minus" />
                            </button>
                          </div>
                          <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                          <div className="input-group-btn">
                            <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                        </div>
                        <a href="#" className="btn border-secondary border rounded-pill rounded-pill-atc  px-4 py-2 mb-4 text-primary-cake"><i className="fa fa-shopping-bag me-2 text-primary-cake" /> Thêm vào giỏ hàng</a>
                      </div>
                      <div className="col-lg-12">
                        <nav>
                          <div className="nav nav-tabs mb-3">
                            <button className="nav-link active border-white border-bottom-0" type="button" role="tab" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about" aria-controls="nav-about" aria-selected="true">Mô tả</button>
                            <button className="nav-link border-white border-bottom-0" type="button" role="tab" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" aria-controls="nav-mission" aria-selected="false">Đánh giá</button>
                          </div>
                        </nav>
                        <div className="tab-content mb-5">
                          <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                            <p>{p.description}</p>
                            <div className="px-2">
                              <div className="row g-4">
                                <div className="col-6">
                                  <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                    <div className="col-6">
                                      <p className="mb-0">Khối lượng</p>
                                    </div>
                                    <div className="col-6">
                                      <p className="mb-0">{p.weight}</p>
                                    </div>
                                  </div>
                                  <div className="row text-center align-items-center justify-content-center py-2">
                                    <div className="col-6">
                                      <p className="mb-0">Kích thước</p>
                                    </div>
                                    <div className="col-6">
                                      <p className="mb-0">{p.size}</p>
                                    </div>
                                  </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                            <div className="d-flex">
                              <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{width: '100px', height: '100px'}} alt="" />
                              <div className>
                                <p className="mb-2" style={{fontSize: '14px'}}>April 12, 2024</p>
                                <div className="d-flex justify-content-between">
                                  <h5>Jason Smith</h5>
                                  <div className="d-flex mb-3">
                                    <i className="fa fa-star text-secondary" />
                                    <i className="fa fa-star text-secondary" />
                                    <i className="fa fa-star text-secondary" />
                                    <i className="fa fa-star text-secondary" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
                                  words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                              </div>
                            </div>
                            <div className="d-flex">
                              <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{width: '100px', height: '100px'}} alt="" />
                              <div className>
                                <p className="mb-2" style={{fontSize: '14px'}}>April 12, 2024</p>
                                <div className="d-flex justify-content-between">
                                  <h5>Sam Peters</h5>
                                  <div className="d-flex mb-3">
                                    <i className="fa fa-star text-secondary" />
                                    <i className="fa fa-star text-secondary" />
                                    <i className="fa fa-star text-secondary" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="nav-vision" role="tabpanel">
                            <p className="text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                              amet diam et eos labore. 3</p>
                            <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                              Clita erat ipsum et lorem et sit</p>
                          </div>
                        </div>
                      </div>
                      <form action="#">
                        <h4 className="mb-5 fw-bold">Đánh giá của bạn</h4>
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <div className="border-bottom rounded">
                              <input type="text" className="form-control border-0 me-4" placeholder="Tên của bạn *" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="border-bottom rounded">
                              <input type="email" className="form-control border-0" placeholder="Email *" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="border-bottom rounded my-4">
                              <textarea name id className="form-control border-0" cols={30} rows={8} placeholder="Đánh giá của bạn *" spellCheck="false" defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="d-flex justify-content-between py-3 mb-5">
                              <div className="d-flex align-items-center">
                                <p className="mb-0 me-3">Đánh giá:</p>
                                <div className="d-flex align-items-center" style={{fontSize: '12px'}}>
                                  <i className="fa fa-star text-muted" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                </div>
                              </div>
                              <a href="#" className="btn border border-secondary text-primary rounded-pill px-4 "> Gửi đánh giá</a>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="row g-4 fruite">
                      <div className="col-lg-12">
                        <div className="input-group w-100 mx-auto d-flex mb-4">
                          <input type="search" className="form-control p-3" placeholder="Tìm kiếm" aria-describedby="search-icon-1" />
                          <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
                        </div>
                        <div className="mb-4">
                          <h4>Categories</h4>
                          <ul className="list-unstyled fruite-categorie">
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#"><i className="fas fa-apple-alt me-2" />Apples</a>
                                <span>(3)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#"><i className="fas fa-apple-alt me-2" />Oranges</a>
                                <span>(5)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#"><i className="fas fa-apple-alt me-2" />Strawbery</a>
                                <span>(2)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#"><i className="fas fa-apple-alt me-2" />Banana</a>
                                <span>(8)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#"><i className="fas fa-apple-alt me-2" />Pumpkin</a>
                                <span>(5)</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <h4 className="mb-4">Featured products</h4>
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="rounded" style={{width: '100px', height: '100px'}}>
                            <img src="img/featur-1.jpg" className="img-fluid rounded" alt="Image" />
                          </div>
                          <div>
                            <h6 className="mb-2">Big Banana</h6>
                            <div className="d-flex mb-2">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">2.99 $</h5>
                              <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="rounded" style={{width: '100px', height: '100px'}}>
                            <img src="img/featur-2.jpg" className="img-fluid rounded" alt="" />
                          </div>
                          <div>
                            <h6 className="mb-2">Big Banana</h6>
                            <div className="d-flex mb-2">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">2.99 $</h5>
                              <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="rounded" style={{width: '100px', height: '100px'}}>
                            <img src="img/featur-3.jpg" className="img-fluid rounded" alt="" />
                          </div>
                          <div>
                            <h6 className="mb-2">Big Banana</h6>
                            <div className="d-flex mb-2">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">2.99 $</h5>
                              <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="rounded me-4" style={{width: '100px', height: '100px'}}>
                            <img src="img/vegetable-item-4.jpg" className="img-fluid rounded" alt="" />
                          </div>
                          <div>
                            <h6 className="mb-2">Big Banana</h6>
                            <div className="d-flex mb-2">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">2.99 $</h5>
                              <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="rounded me-4" style={{width: '100px', height: '100px'}}>
                            <img src="img/vegetable-item-5.jpg" className="img-fluid rounded" alt="" />
                          </div>
                          <div>
                            <h6 className="mb-2">Big Banana</h6>
                            <div className="d-flex mb-2">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">2.99 $</h5>
                              <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="rounded me-4" style={{width: '100px', height: '100px'}}>
                            <img src="img/vegetable-item-6.jpg" className="img-fluid rounded" alt="" />
                          </div>
                          <div>
                            <h6 className="mb-2">Big Banana</h6>
                            <div className="d-flex mb-2">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">2.99 $</h5>
                              <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="col-lg-12">
                        <div className="position-relative">
                          <img src="img/banner-fruits.jpg" className="img-fluid w-100 rounded" alt="" />
                          <div className="position-absolute" style={{top: '50%', right: '10px', transform: 'translateY(-50%)'}}>
                            <h3 className="text-secondary fw-bold">Fresh <br /> Fruits <br /> Banner</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="fw-bold mb-0">Sản phẩm liên quan</h1>
                <div className="vesitable">
                  <div className="owl-carousel vegetable-carousel justify-content-center">
                    <div className="border border-primary rounded position-relative vesitable-item">
                      <div className="vesitable-img">
                        <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt="" />
                      </div>
                      <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Vegetable</div>
                      <div className="p-4 pb-0 rounded-bottom">
                        <h4>Parsely</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                          <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>
                          <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ hàng</a>
                        </div>
                      </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                      <div className="vesitable-img">
                        <img src="img/vegetable-item-1.jpg" className="img-fluid w-100 rounded-top" alt="" />
                      </div>
                      <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Vegetable</div>
                      <div className="p-4 pb-0 rounded-bottom">
                        <h4>Parsely</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                          <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>
                          <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ hàng</a>
                        </div>
                      </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                      <div className="vesitable-img">
                        <img src="img/vegetable-item-3.png" className="img-fluid w-100 rounded-top bg-light" alt="" />
                      </div>
                      <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Vegetable</div>
                      <div className="p-4 pb-0 rounded-bottom">
                        <h4>Banana</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                          <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                          <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ hàng</a>
                        </div>
                      </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                      <div className="vesitable-img">
                        <img src="img/vegetable-item-4.jpg" className="img-fluid w-100 rounded-top" alt="" />
                      </div>
                      <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Vegetable</div>
                      <div className="p-4 pb-0 rounded-bottom">
                        <h4>Bell Papper</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                          <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                          <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ hàng</a>
                        </div>
                      </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                      <div className="vesitable-img">
                        <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                      </div>
                      <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Vegetable</div>
                      <div className="p-4 pb-0 rounded-bottom">
                        <h4>Potatoes</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                          <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                          <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ hàng</a>
                        </div>
                      </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                      <div className="vesitable-img">
                        <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt="" />
                      </div>
                      <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Vegetable</div>
                      <div className="p-4 pb-0 rounded-bottom">
                        <h4>Parsely</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                          <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                          <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ hàng</a>
                        </div>
                      </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                      <div className="vesitable-img">
                        <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                      </div>
                      <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Vegetable</div>
                      <div className="p-4 pb-0 rounded-bottom">
                        <h4>Potatoes</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                          <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                          <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ hàng</a>
                        </div>
                      </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                      <div className="vesitable-img">
                        <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt="" />
                      </div>
                      <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Vegetable</div>
                      <div className="p-4 pb-0 rounded-bottom">
                        <h4>Parsely</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                          <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                          <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ hàng</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Product End */}
            <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
