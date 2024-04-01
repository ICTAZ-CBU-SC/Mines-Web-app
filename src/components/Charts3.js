import React from "react";
import Chart from "react-apexcharts"
import subimg from './images/7906228_3805152.svg'

const Charts3 = (props) => {

        //variables that can be changed and used in the map options and series opbjects
        //sdsd

        //this function updates the Xdata variable and pushes the values inside the object
        //everytime its run
        
        // const Chaneg = () => {
        //     xdata.push(faker.number.int({ max: 1023 }))//pushes a rundom number
        //     setXdata(xdata)//the Xdata with its updated copy

        //     // let val2 = timer.length
        //     // timer.push(val2)
        //     // setTimer(timer)
        //     //commented the code above=============

        //     //this now updates the specific component in the graph
        //     ApexCharts.exec('realtime', 'updateSeries', [{
        //         data: xdata
        //     }])
        // }

        // //this function runs the function chaneg
        // const setnewVal = () => {
        //     Chaneg()
        // }
        // setInterval(() => {
        // Demobtn()
        // }, 1000);

        // const Demobtn = () => {
        // setnewVal()
        //     // if (xdata.length >= 10) {
        //     //     let n = faker.number.int({ max: 400 })

        //     //     let n2 = 0

        //     //     for (let i = xdata.length - 1; i >= 0; i--) {
        //     //         n2 = xdata[i]
        //     //         xdata[i] = n
        //     //         n = n2

        //     //         setXdata(xdata)
        //     //     }
        //     //     ApexCharts.exec('realtime', 'updateSeries', [{
        //     //         data: xdata
        //     //     }])
        //     // } else {
        //     //     setnewVal()
        //     // }
        // }
    
        //charts options object for chart customizations
        const series = [{
            label:'helo',
            name:'datas',
            data: props.gass,
            max: 100
        }]

        //charts options object for chart customizations
        const options = {
            chart: {
                id: 'realtime',
                height: 350,
                type: 'line',
                toolbar: {
                    show: false
                  },
                  zoom: {
                    enabled: false
                  },
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                      speed: 2000
                    }
                  },
            },
            colors: ['#77B6EA', '#545454'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'straight'
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
                range: 10,
                categories: [''],
                title: {
                    text: 'Time'
                }
            },
            yaxis: {
                title: {
                    text: 'ppm'
                },
                min: 0,
                max: 500
            },
            legend: {
                show: false
            }
        }


    //chacks for the props for gass and its values to check if there is anything in it
    if(!props.gass){
        return (
            <div>
                <div id="chart">
                    <Chart options={options} series={series} type="line" height={350} />
                </div>
                <div id="html-dist"></div>
            </div>
        )
    }
     else {
        return (
            <>
                <div className="bg-light shadow-sm text-center  pt-4" style={{minHeight:'350px', overflow:'hidden'}}>
                    <div className="d-flex justify-content-center">
                        <img src={subimg} alt="nodataimg" className="" width='250px' />
                    </div>
                    <h4>No Connection...</h4>
                </div>
            </>
        )
     }
}


export default Charts3