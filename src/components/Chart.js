import Chart from 'chart.js/auto'
import { useEffect, useState } from 'react';
export const Charts = () => {

const datapoints = [1]

const addtoobject = () => {
    AddvaluesToObject()
    
        thatvalue.update()

}


const AddvaluesToObject = ( ) => {
    const mylength = datapoints.length
    datapoints.push(mylength)
}
    
    const DATA_COUNT = 10;
    const labels = [];
    for (let i = 0; i < DATA_COUNT; ++i) {
        labels.push(i.toString());
    }

    const data = {
        labels: labels,
        datasets: [{
            label: 'Gas levels',
            data: datapoints,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    

//this creates the chart
let thatvalue

 useEffect(() => {
   thatvalue = new Chart(
            document.getElementById('acquisitions'),
            {
                type: 'line',
                data: data
            }
        );
        
},[])


    return (
        <>  
        <div>
            <div style={{ width: '100%'}}>
                <canvas id="acquisitions"></canvas>
            </div>
            <button onClick={() => addtoobject()}>click</button>
        </div>
        </>
    )
}
