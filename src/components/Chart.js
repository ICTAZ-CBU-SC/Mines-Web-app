import { useState } from "react";

export const Charts = () => {
    const [critical, setCritical] = useState(false);
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
            backgroundColor: '#f7f7f7f',
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
    let maxDatas = 10;
    
    //interval for adding new data every 250ms
    let index = 0;
    setInterval(function(){
        //Dummy data
        let randomGas = Math.random() * 50 + 20;
    
        randomGas > 69 ? setCritical(true): setCritical(false);
        
        if(data.getNumberOfRows() > maxDatas){
            data.removeRows(0, data.getNumberOfRows() - maxDatas);
        }
    
        data.addRow([index, randomGas]);
        chart.draw(data, options);
    
        index++;
    }, 2000);
    }

    return (
        <>  
        <div>
            {critical && <div className="bg-danger" style={{height:'10px', width:'10px', borderRadius:'50%'}}></div>}
            <div id="chart" className="w-[1200px] h-[400px]"></div>
        </div>
        </>
    )
}
