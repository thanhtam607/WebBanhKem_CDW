import React, { Component } from "react";
import { connect } from "react-redux";
import "./Product.scss";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    const product = this.props.product;
    return (
      <div className="rounded position-relative fruite-item">
        <div className="fruite-img">
          <img
            src={product.Images[0].img}
            style={{ height: "270px" }}
            className="img-fluid w-100 rounded-top"
            alt=""
          />
        </div>
        <div
          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
          style={{ top: "10px", left: "10px" }}
        >
          {product.category.name}
        </div>
        <div className="p-4 border border-secondary border-top-0 rounded-bottom product-name">
          <a className="text-center " href={`/product-detail/${product.id}`}>
            <h4>{product.name}</h4>
          </a>

          <div className="d-flex justify-content-between flex-lg-wrap">
            <p className="text-dark fs-5 fw-bold mb-0">
              {product.price} <span>vnđ</span>
            </p>
            <a
              href="#"
              className="btn border border-secondary rounded-pill px-3 text-primary"
            >
              <i className="fa fa-shopping-bag me-2 text-primary-cake"></i>{" "}
            </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
