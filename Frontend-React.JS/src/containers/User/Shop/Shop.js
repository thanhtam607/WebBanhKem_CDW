import React, { Component } from "react";
import { connect } from "react-redux";
import "./Shop.scss";
import Breadcrumb from "../breadcrumb";
import Header from "../Header/Header";
import ListProduct from "./listProducts";
import Footer from "../Footer/Footer";
import { FormattedMessage } from "react-intl";
import {getAllCat, getAllProductsByIdCategory, getListProducts} from "../../../services/productService";
class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
    categories:[],
      listProducts: [],
    };
  }

  async componentDidMount() {
    let responsed = await getAllCat();
    if(responsed.errCode ==0){
      this.setState({
        categories: responsed.data
      })
    }

    let responsePro = await getListProducts();
    if (responsePro && responsePro.errCode === 0) {
      this.setState({
        listProducts: responsePro.listProducts,
      });
    }
  }
  fillterByCat=async (cat) => {
    if (cat!=0){
      let res = await getAllProductsByIdCategory(cat)
      this.setState({
        listProducts: res.data
      })
    }else{
      let responsePro = await getListProducts();
      if (responsePro && responsePro.errCode === 0) {
        this.setState({
          listProducts: responsePro.listProducts,
        });
      }
    }

  }
  render() {
    const breadcrumbItems = [
      { title: <FormattedMessage id="page.home" />, link: "/", active: false },
      {
        title: <FormattedMessage id="page.product" />,
        link: "/shop",
        active: true,
      },
    ];

    return (
      <div>
        <Header pageActive={"Sản phẩm"}> </Header>
        {/* Single Page Header start */}
        <Breadcrumb items={breadcrumbItems} />
        {/* Single Page Header End */}
        {/* Fruits Shop Start*/}
        <div className="container-fluid fruite py-5">
          <div className="container py-5">
            <h1 className="mb-4">Peace Bakery</h1>
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-xl-3">
                    <div className="input-group w-100 mx-auto d-flex">
                      <input
                        type="search"
                        className="form-control p-3"
                        placeholder="Tìm kiếm"
                        aria-describedby="search-icon-1"
                      />
                      <span id="search-icon-1" className="input-group-text p-3">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>
                  <div className="col-6" />
                  <div className="col-xl-3">
                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                      <label htmlFor="fruits">Sắp xếp:</label>
                      <select
                        id="fruits"
                        name="fruitlist"
                        className="border-0 form-select-sm bg-light me-3"
                        form="fruitform"
                      >
                        <option value="volvo">Mặc định</option>
                        <option value="saab">Popularity</option>
                        <option value="opel">Organic</option>
                        <option value="audi">Fantastic</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row g-4">
                  <div className="col-lg-3">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <h4>Danh mục loại bánh</h4>
                          <ul className="list-unstyled fruite-categorie">
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a onClick={() => this.fillterByCat(0)}>
                                  <i className="fas fa-apple-alt me-2" />
                                  Tất cả
                                </a>

                              </div>
                            </li>
                            {this.state.categories &&
                                this.state.categories.map((item) => (
                                    <li key={item.id}>
                                      <div className="d-flex justify-content-between fruite-name">
                                        <a onClick={() => this.fillterByCat(item.id)}>
                                          <i className="fas fa-apple-alt me-2" />
                                          {item.name}
                                        </a>
                                      </div>
                                    </li>
                                ))
                            }



                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <h4 className="mb-2">Giá</h4>
                          <input
                            type="range"
                            className="form-range w-100"
                            id="rangeInput"
                            name="rangeInput"
                            min={0}
                            max={500}
                            defaultValue={0}
                            oninput="amount.value=rangeInput.value"
                          />
                          <output
                            id="amount"
                            name="amount"
                            min-velue={0}
                            max-value={500}
                            htmlFor="rangeInput"
                          >
                            0
                          </output>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <h4>Khác</h4>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-1"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-1"> Organic</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-2"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-2"> Fresh</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-3"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-3"> Sales</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-4"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-4"> Discount</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-5"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-5"> Expired</label>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="position-relative">
                          <img
                            src="img/banner-fruits.jpg"
                            className="img-fluid w-100 rounded"
                            alt=""
                          />
                          <div
                            className="position-absolute"
                            style={{
                              top: "50%",
                              right: "10px",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <h3 className="text-yellow text-center fw-bold">
                              Tạo nên
                              <br />
                              sự ngọt ngào
                              <br /> cho mỗi dịp đặc biệt
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ListProduct listProducts={this.state.listProducts}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {/* Fruits Shop End*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
