import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer } from "react-toastify";

import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from "../hoc/authentication";
import CustomScrollbars from "../components/CustomScrollbars.js";
import Login from "./User/Login/Login";
import Register from "./User/Register/Register";
import Home from "./User/Home/Home";
import { path } from "../utils";

import { CustomToastCloseButton } from "../components/CustomToast";
import ConfirmModal from "../components/ConfirmModal";
import Cart from "./User/Cart/Cart";
import ProductDetail from "./User/ProductDetail/ProductDetail";
import CheckOut from "./User/CheckOut/CheckOut";
import SHOP from "./User/Shop/Shop";
import Contact from "./User/Contact/Contact";
import About from "./User/About/About";
import Error from "./404er";
import Orders from "./User/Order/Orders";
import Profile from "./User/Profile/Profile";
import AdminLogin from "./System/AdminLogin";
import ProductManage from "./System/ProductManage/ProductManage";
import UserManage from "./System/UserManage/UserManage";
import OrderManage from "./System/OrderManage/OrderManage";
import CreateProduct from "./System/ProductManage/CreateProduct";
import UpdateProduct from "./System/ProductManage/UpdateProduct";
import OrderDetail from "./System/OrderManage/OrderDetail";
import VNPayReturn from "./User/Payment/VNPayReturn";
import Dashboard from "./System/Dashboard/Dashboard";
class App extends Component {
  handlePersistorState = () => {
    const { persistor } = this.props;
    let { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      if (this.props.onBeforeLift) {
        Promise.resolve(this.props.onBeforeLift())
          .then(() => this.setState({ bootstrapped: true }))
          .catch(() => this.setState({ bootstrapped: true }));
      } else {
        this.setState({ bootstrapped: true });
      }
    }
  };

  componentDidMount() {
    this.handlePersistorState();
  }

  render() {
    return (
      <Fragment>
        <Router history={history}>
          <div className="main-container">
            <ConfirmModal />
            {/* {this.props.isLoggedIn && <Header />} */}

            <div className="content-container">
              <CustomScrollbars style={{ height: "100vh", width: "100%" }}>
                <Switch>
                  <Route path={path.ERROR} component={Error} />
                  <Route path={path.DASHBOARD} component={Dashboard} />
                  <Route path={path.VNPAYRETURN} component={VNPayReturn} />
                  <Route path={path.ORDER} component={Orders} />
                  <Route path={path.ABOUT} component={About} />
                  <Route path={path.LOGIN} component={Login} />
                  <Route path={path.REGISTER} component={Register} />
                  <Route path={path.PROFILE} component={Profile} />
                  <Route path={path.CART} component={Cart} />
                  <Route path={path.PRODUCTDETAIL} component={ProductDetail} />
                  <Route path={path.SHOP} component={SHOP} />
                  <Route path={path.CHECKOUT} component={CheckOut} />
                  <Route path={path.CONTACT} component={Contact} />

                  <Route path={path.ADMINLOGIN} component={AdminLogin} />
                  <Route
                    path={path.ADMINPRODUCTMANAGE}
                    component={ProductManage}
                  />
                  <Route
                    path={path.ADMINCREATEPRODUCT}
                    component={CreateProduct}
                  />
                  <Route
                    path={path.ADMINEDITPRODUCT}
                    component={UpdateProduct}
                  />
                  <Route path={path.ADMINUSERMANAGE} component={UserManage} />
                  <Route path={path.ADMINORDERMANAGE} component={OrderManage} />
                  <Route path={path.ADMINORDERDETAIL} component={OrderDetail} />
                  <Route path={path.HOME} component={Home} />
                </Switch>
              </CustomScrollbars>
            </div>

            <ToastContainer
              className="toast-container"
              toastClassName="toast-item"
              bodyClassName="toast-item-body"
              autoClose={false}
              hideProgressBar={true}
              pauseOnHover={false}
              pauseOnFocusLoss={true}
              closeOnClick={false}
              draggable={false}
              closeButton={<CustomToastCloseButton />}
            />
          </div>
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    isLoggedIn: state.admin.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
