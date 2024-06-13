import React, { Component } from "react";
import { connect } from "react-redux";
import {sumProBillTotal} from "../../../services/billService";
import {mapToAutowhateverTheme} from "react-autosuggest/dist/theme";


class Revenue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            revenue:0,
            change:0,
            status:""
        };
    }


    async componentDidMount() {
        try {
            const currentMonth = new Date().getMonth() + 1; // JavaScript months are 0-11
            const previousMonth = new Date().getMonth();

            const [res, resOld] = await Promise.all([
                sumProBillTotal(currentMonth),
                sumProBillTotal(previousMonth)
            ]);

            if (res.errCode === 0) {
                this.setState({ revenue: res.data });

                if (resOld.errCode === 0) {
                    const rem = res.data - resOld.data;
                    const status = rem < 0 ? "de" : "in";
                    const change = Math.abs((rem / resOld.data) * 100).toFixed(3);
                    console.log(resOld.data)
                    this.setState({ status, change });
                }
            }
        } catch (error) {
            console.error('Error calculating revenue:', error);
        }
    }

    render() {

        return (
           <>
                        <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                                <img
                                    src="../img/icons/unicons/wallet-info.png"
                                    alt="Credit Card"
                                    className="rounded"
                                />
                            </div><span>Doanh thu tháng :</span>
                        </div>

                        <h3 className="card-title text-nowrap mb-1 text-right">{this.state.revenue} vnd
                     </h3>
               {this.state.status === 'in' ? (
                   <small className="text-success fw-semibold">
                       <i className="bx bx-up-arrow-alt"></i> +{this.state.change}%
                   </small>
               ) : (
                   <small className="text-danger fw-semibold">
                       <i className="bx bx-down-arrow-alt"></i> -{this.state.change}%
                   </small>
               )}
                   </>

        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Revenue);
