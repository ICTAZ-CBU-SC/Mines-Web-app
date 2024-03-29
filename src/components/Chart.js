import { useEffect, useState } from 'react';
export const Charts = () => {

    //load current chart package
    google.charts.load('current', {
        packages: ["corechart", "line"]
    });
    
    //set callback function when api loaded
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart(){
        //create data object with default value
        let data = google.visualization.arrayToDataTable([
            ['Time', 'Carbon Monoxide'],
            [0,0],
        ]);
    
        //create options object with titles, colors, etc.
        let options = {
            title: "Level of Carbon Monoxide Gas per second Graph",
            hAxis:{
                title: 'Seconds',
                
            },
            vAxis:{
                title: "Gas",
                
            }
        };
    
        //dra chart on load
        let chart = new google.visualization.LineChart(
            document.getElementById("chart")
        );
        chart.draw(data, options);
    
    
    //max amount of data rows that should be displayed
    let maxDatas = 50;
    
    //interval for adding new data every 250ms
    let index = 0;
    setInterval(function(){
        //Dummy data
        let randomGas = Math.random() * 50 + 20;
    
        if( randomGas > 69){
            let count = 0;
            count = count++;
            console.log(count)
        }
    
        if(data.getNumberOfRows() > maxDatas){
            data.removeRows(0, data.getNumberOfRows() - maxDatas);
        }
    
        data.addRow([index, randomGas]);
        chart.draw(data, options);
    
        index++;
    }, 1000);
    }

    return (
        <>  
        <div>
            <div id="chart" class="w-[1200px] h-[400px]"></div>
        </div>
        </>
    )
}
