import axios from 'axios';
import Chart from 'chart.js/auto'
import { useEffect, useState } from 'react';
export const Charts = () => {

const datapoints = []
const labels = [0];

const addtoobject = () => {
    AddvaluesToObject()
    
        thatvalue.update()

}


const AddvaluesToObject = ( ) => {
    const mylength = datapoints.length
    datapoints.push(mylength)

    const anoterlenght = labels.length
    labels.push(labels[anoterlenght-1] + 5)

    // delete labels[0]
    // delete datapoints[0]
    // console.log(labels[1])
    // if(datapoints.length > 5){
    // }
}
    
    

    const data = {
        labels: labels,
        datasets: [{
            label: 'Gas levels',
            data: datapoints,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.5
        }]
    };

    // setInterval(() => {
    //     addtoobject()
    // }, 2000)

//this creates the chart
let thatvalue

 useEffect(() => {
   thatvalue = new Chart(
            document.getElementById('acquisitions'),
            {
                type: 'line',
                data: data,
                options: {
                    layout: {
                        padding: 3
                    }
                }
            }
        );
        

        // axios.get('http://localhost:5038/api/gasreading/latest').then((e) => {
        //     console.log(e.data)
        // })
},[])


    return (
        <>  
        <div>
            <div style={{ width:'600px', overflow:'hidden'}}>
                <canvas id="acquisitions"></canvas>
            </div>
        </div>
        </>
    )
}
