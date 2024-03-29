import './App.css';
import { Chart } from 'react-google-charts';

function App() {
    const gasData = [
        ['Time', 'Carbon Monoxide'],
        [0, 0],
    ];

    const options = {
      title: "Carbon Monoxide Graph",
      hAxis: {
        title: "Seconds",
      },
      vAxis: {
        title: "Gas"
      }
    }

    //Maximum amount of gasData rows to be displayed
    let maxDatas = 10;

    //Interval for adding new data every second
    let index = 0;
    setInterval(function(){

      //Dummy Data
      let randomGas = Math.random() * 50 + 20;

      if( randomGas > 69){
        let count = 0
        count++
        console.log(count)
      }


      useEffect(() => {
        // Update chartData whenever new data arrives
        setChartData(gasData.slice(-50)); // Keep the most recent 50 entries
      }, [gasData]);


      if(gasData.getNumberOfRows() > maxDatas){
       gasData.removeRows(0, gasData.getNumberOfROws() - maxDatas);
      }

      gasData.addRow([index, randomGas]);
      Chart.draw(gasData, options);

      index++
    }, 1000)

    return (
        <div className='py-10'>
            <Chart
                chartType="LineChart"
                data = { gasData }
            />
        </div>
    )
}

export default App;