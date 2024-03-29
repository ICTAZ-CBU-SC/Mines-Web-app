import React, { useState } from "react";
import Chart from "react-apexcharts"
import ApexCharts from "apexcharts";
import { faker } from '@faker-js/faker';

const Charts3 = () => {

    const [xdata, setXdata] = useState([0]);
    const [timer, setTimer] = useState([0])

    setInterval(() => {
        Chaneg()
    }, 1000);

    const Chaneg = () => {
        xdata.push(faker.number.int({ max: 400 }))
        setXdata(xdata)

        let val2 = timer.length
        timer.push(val2)
        setTimer(timer)

        ApexCharts.exec('realtime', 'updateSeries', [{
            data: xdata
        }])

        //   ApexCharts.exec('realtime', 'updateOptions', [{
        //     xaxis: {
        //         categories: timer
        //     } 
        //   }])
    }

    const series = [{
        data: xdata.slice(),
        max: 100
    }]

    const options = {
        chart: {
            id: 'realtime',
            height: 350,
            type: 'line',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },

            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2

            }
        },
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        },


        colors: ['#77B6EA', '#545454'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Graph presentation of gas',
            align: 'left'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: timer,
            title: {
                text: 'Time'
            },
            type: 'datetime',
            labels: {
                format: 'MM yyyy'
            }
        },
        yaxis: {
            title: {
                text: 'pp'
            },
            min: 0,
            max: 400
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    }
    return (
        <div>
            <div id="chart">
                <Chart options={options} series={series} type="line" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    )
}


export default Charts3