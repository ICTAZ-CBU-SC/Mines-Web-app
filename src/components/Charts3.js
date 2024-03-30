import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts"
import ApexCharts from "apexcharts";
import { faker } from '@faker-js/faker';
import axios from "axios";

const Charts3 = () => {

    //variables that can be changed and used in the map options and series opbjects
    const [xdata, setXdata] = useState([0]);
    const [timer, setTimer] = useState([0]);


    //this function updates the Xdata variable and pushes the values inside the object
    //everytime its run
    const Chaneg = () => {
        xdata.push(faker.number.int({ max: 1023 }))//pushes a rundom number
        setXdata(xdata)//the Xdata with its updated copy

        // let val2 = timer.length
        // timer.push(val2)
        // setTimer(timer)
        //commented the code above=============

        //this now updates the specific component in the graph
        ApexCharts.exec('realtime', 'updateSeries', [{
            data: xdata
        }])
    }

    //this function runs the function chaneg
    const setnewVal = () => {
        Chaneg()
    }

    let myinterval =  setInterval(() => {
       Demobtn()
    }, 1000);

    const Demobtn = () => {
       setnewVal()
        // if (xdata.length >= 10) {
        //     let n = faker.number.int({ max: 400 })

        //     let n2 = 0

        //     for (let i = xdata.length - 1; i >= 0; i--) {
        //         n2 = xdata[i]
        //         xdata[i] = n
        //         n = n2

        //         setXdata(xdata)
        //     }
        //     ApexCharts.exec('realtime', 'updateSeries', [{
        //         data: xdata
        //     }])
        // } else {
        //     setnewVal()
        // }
    }
  
    //charts options object for chart customizations
    const series = [{
        data: xdata,
        max: 100
    }]

    //charts options object for chart customizations
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
            range: 15,
            categories: timer,
            title: {
                text: 'Time'
            }
        },
        yaxis: {
            title: {
                text: 'pp'
            },
            min: 0,
            max: 1023
        },
        legend: {
            show: false
          },
    }

    useEffect(() => {
       
    }, [])


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