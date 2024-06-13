import React, { Component } from "react";
import { connect } from "react-redux";
import ApexCharts from "apexcharts";


class ProductStatistics extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    async componentDidMount() {

        var options = {
            series: [44, 55, 13, 43, 22],
            chart: {
                width: 260,
                type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 250
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };

        var chart = new ApexCharts(document.querySelector("#pchart"), options);
        chart.render();

    }
    render() {

            return (
                   <div id="pchart"></div>
            );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductStatistics);
