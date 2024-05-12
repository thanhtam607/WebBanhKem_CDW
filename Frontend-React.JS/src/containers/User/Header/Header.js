import React, { Component } from "react";
import { connect } from "react-redux";
import "./Header.scss";
import Navigation from "./navigation";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  render() {
    return (
      <div>
        {/* Navbar start */}
        <div className="container-fluid fixed-top">
          <div className="container topbar bg-primary-cake d-none d-lg-block">
            <div className="d-flex justify-content-between">
              <div className="top-info ps-2">
                <small className="me-3">
                  <i className="fas fa-map-marker-alt me-2 text-secondary-cake" />{" "}
                  <span className="text-white">
                    Thủ Đức, Thành phố Hồ Chí Minh
                  </span>
                </small>
                <small className="me-3">
                  <i className="fas fa-envelope me-2 text-secondary-cake" />
                  <span className="text-white">tiembanhbinhyen@gmail.com</span>
                </small>
              </div>
              <div className="top-link pe-2">
                <a href="#" className="text-white">
                  <small className="text-white mx-2">Privacy Policy</small>/
                </a>
                <a href="#" className="text-white">
                  <small className="text-white mx-2">Terms of Use</small>/
                </a>
                <a href="#" className="text-white">
                  <small className="text-white ms-2">Sales and Refunds</small>
                </a>
              </div>
            </div>
          </div>
          <div className="container px-0">
            <Navigation pageActive={this.props.pageActive} />
          </div>
        </div>
        {/* Navbar End */}
        {/* Modal Search Start */}
        <div
          className="modal fade"
          id="searchModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Tìm kiếm{" "}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body d-flex align-items-center">
                <div className="input-group w-75 mx-auto d-flex">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="Nhập vào từ khóa tìm kiếm..."
                    aria-describedby="search-icon-1"
                  />
                  <span id="search-icon-1" className="input-group-text p-3">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal ngay End */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
