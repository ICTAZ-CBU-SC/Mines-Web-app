import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

export const Charts = () => {
    const [critical, setCritical] = useState(false);
    const [data, setData] = useState([['Time', 'Carbon Monoxide'], [0,0]]);

        setInterval(() => {
            let randomGas = Math.random() * 50 + 20;
            setCritical(randomGas > 69);
            setData(prevData => {
                const newData = [...prevData];
                const time = new Date().toLocaleTimeString();
                newData.push([time, randomGas]);
                if (newData.length > 10) {
                    newData.shift(); // Remove the oldest data point
                }
                return newData;
            });
        }, 1000);



    const options = {
        title: 'Level of Carbon Monoxide Gas per second Graph',
        backgroundColor: '#f7f7f7f',
        hAxis: {
            title: 'Seconds',
        },
        vAxis: {
            title: 'Gas',
        },
    };


    console.log('Critical:', critical);
    console.log('Data:', data);
    console.log('Options:', options);
    return (
        <div>
            {critical && <div className="bg-danger" style={{ height: '10px', width: '10px', borderRadius: '50%' }}></div>}
            <Chart
                // loader={<span>Loading Chart</span>}
                // width={'1200px'}
                // height={'400px'}
                chartType="LineChart"
                data={ data }
                // options = {options}
            />
        </div>
    );
};

