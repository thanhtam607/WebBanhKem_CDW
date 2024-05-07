import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Home.scss"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductList from "../../../components/ComponentsHome/ProductList/productsList";
import Featurs from '../../../components/ComponentsHome/Featurs/Featurs';
import HorizontalProduct from '../../../components/ComponentsHome/HorizontalProduct/HorizontalProduct';
import {getListProducts, getProductsByCategory} from "../../../services/productService";
import Banner1 from "../../../components/ComponentsHome/Banner/banner1";
import Banner2 from "../../../components/ComponentsHome/Banner/banner2";
class HOME extends Component {
    constructor(props){
        super(props);
        this.state = {
          getShuffledProducts:[],
          getProducts1:[],
          getProducts2:[],
          getProducts3:[],
        
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
    const [response1, response2, response3, response4] = await Promise.all([
      getListProducts(),
      getProductsByCategory("Bánh hoa"),
      getProductsByCategory("Bánh trái cây"),
      getProductsByCategory("Bánh maccaron và socola")
    ]);

    const allProducts = response1.listProducts;
    const firstEightProducts = this.getFirstEightProducts([this.shuffleArray(allProducts),response2.products, response3.products, response4.products]);

    this.setState({
      getShuffledProducts: firstEightProducts[0],
      getProducts1: firstEightProducts[1],
      getProducts2: firstEightProducts[2],
      getProducts3: firstEightProducts[3],
    });
  }

  getFirstEightProducts(productLists) {
    return productLists.map(products => products.slice(0, 8));
  }

  render() {
        return (
            <div>
        <Header pageActive={"Trang chủ"}> </Header>

         {/* Hero Start */}
        <Banner1/>
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
                      <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="/shop">
                        <span className="text-dark" style={{width: '130px'}}>Tất cả</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <ProductList products={this.state.getShuffledProducts}/>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <ProductList products={this.state.getProducts1}/>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                  <ProductList products={this.state.getProducts2}/>
                </div>
                <div id="tab-4" className="tab-pane fade show p-0">
                  <ProductList products={this.state.getProducts3}/>
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
        <Banner2/>
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
