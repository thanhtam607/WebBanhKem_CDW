import React, { Component } from 'react';
import ApexCharts from 'apexcharts';
import {getBillStatisticsForCurrentMonth, getTotalBillForCurrentMonth} from "../../../services/billService";

class OrderChart extends Component {
    async componentDidMount() {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const res = await getBillStatisticsForCurrentMonth();
        const resTotalOrders = await getTotalBillForCurrentMonth(currentMonth+1);
        const totalOrders = resTotalOrders.data
        var options = {
            chart: {
                type: 'line',
                toolbar: {
                    show: false, // Tắt thanh công cụ
                },
            },
            series: [
                {
                    name: 'Đơn hàng',
                    data: res.data
                }
            ],
            xaxis: {
                categories: Array.from({length: daysInMonth}, (_, i) => i + 1),
                title: {
                    text: 'Ngày',
                    style: {
                        fontSize: '14px',
                        fontFamily: 'Roboto, sans-serif', // Thay đổi font chữ tại đây
                        fontWeight: 'bold',
                        color: '#7c0707'
                    }
                },
            },
            yaxis: {
                title: {
                    text: 'Số lượng',
                    style: {
                        fontSize: '14px',
                        fontFamily: 'Roboto, sans-serif', // Thay đổi font chữ tại đây
                        fontWeight: 'bold',
                        color: '#0e2ca1'
                    }
                },
            },
            title: {
                text: `Số lượng đơn hàng trong tháng ${currentMonth+1 +"/"+ currentYear}`,
                floating: true,
                offsetY: 0,
                align: 'center',
                style: {
                    fontSize: '20px',
                    fontFamily: 'Roboto, sans-serif', // Thay đổi font chữ tại đây
                    fontWeight: 'bold',
                    color: '#3a3a3a'
                }
            },
            annotations: {
                position: 'back',
                texts: [{
                    x: '80%',
                    y: '16%',
                    text: `Tổng số lượng: ${totalOrders}`,
                    textAnchor: 'middle',
                    fontSize: '14px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    borderRadius: 3,
                }]
            }
        }

        var chart = new ApexCharts(document.querySelector('#incomeChart'), options)
        chart.render()
    }

    componentWillUnmount() {

    }

    render() {
        return <div id="incomeChart"></div>
    }
}

export default OrderChart;
