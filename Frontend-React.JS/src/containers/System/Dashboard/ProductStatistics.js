import React, { Component } from "react";
import { connect } from "react-redux";
import ApexCharts from "apexcharts";
import {getSalesPercentageForCat} from "../../../services/billService";
import {getCategoriName, getCategoryName} from "../../../services/categoryService";


class ProductStatistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type:[],
            data:[]
        };
    }


    async componentDidMount() {
        const res = await getSalesPercentageForCat();
        let types = [];
        let percentages = [];
        if(res.errCode == 0){

            for (const item of res.data) {
                var response =  await getCategoryName(item.id_type)
                types.push(response.data);
                console.log(item.percentage_sold)
                percentages.push(parseFloat(item.percentage_sold)); // Chuyển đổi percentage_sold sang số thực (float)
            }

        }

        var options = {
            series:percentages,
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: types,
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
            }],
            title: {
                text: `Tỉ lệ loại bánh đã bán`,
                floating: true,
                offsetY: -14,
                align: 'left',
                style: {
                    fontSize: '17px',
                    fontFamily: 'Roboto, sans-serif', // Thay đổi font chữ tại đây
                    fontWeight: 'bold',
                    color: '#3a3a3a'
                },
                margin: 20 // Thêm khoảng cách bằng giá trị (px) tại đây
            },

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
