import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import TableUser from "./TableUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProducts: [],
    };
  }

  async componentDidMount() {}

  render() {
    const data = [
      { id: 1, column1: "Data 1", column2: "Data A" },
      { id: 2, column1: "Data 2", column2: "Data B" },
    ];
    return (
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* Menu */}
          <Menu page={"User Management"} />
          {/* / Menu */}
          {/* Layout container */}
          <div className="layout-page">
            <NavBar />
            {/* Content wrapper */}
            <div className="content-wrapper">
              {/* Content */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                  <span className="text-muted fw-light">Table User</span>
                </h4>
                {/* Basic Bootstrap Table */}
                <TableUser data={data} itemsPerPage={1} />
              </div>

              {/* / Content */}
              <div className="content-backdrop fade" />
            </div>
            {/* Content wrapper */}
          </div>
          {/* / Layout page */}
        </div>
        <div className="layout-overlay layout-menu-toggle" />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
