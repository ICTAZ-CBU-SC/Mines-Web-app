import { useLocation, useParams } from "react-router-dom";
import GasCheck from "./components/GasCheck";
import MapComp from "./components/MapComp";
import Charts3 from "./components/Charts3";
import ApexCharts from "apexcharts";
import { useEffect, useState } from "react";
import axios from "axios";
import {motion} from 'framer-motion'
import { faker } from "@faker-js/faker";

const MainPage = () => {
    let initialVal = faker.number.int({max:1023})
    const [datas, setDatas] = useState([initialVal])
    const [datas2, setDatas2] = useState(initialVal)
    const location = useLocation();//get information from link via the useLocation method.
    let {id} = useParams()


    const GetGassInfoFromApi = () => {
        // let anotherValue = faker.number.int({max:1023})
        // datas.push(anotherValue)
        // setDatas(datas)
        // setDatas2(faker.number.int({max:1023}))

        // ApexCharts.exec('realtime', 'updateSeries', [{
        //     data: datas
        // }])

        // clearInterval(thatinterval)

        axios.get('http://192.168.0.103:5000/gas-readings-latest/' + id)
            .then((response) => {
                if (response) {
                    datas.push(response.data.Concentration)
                    setDatas(datas)
                    setDatas2(response.data.Concentration)

                    ApexCharts.exec('realtime', 'updateSeries', [{
                        data: datas
                    }])

                    // clearInterval(thatinterval)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    let thatinterval = setInterval(() => {
        GetGassInfoFromApi() 
    }, 2000);


    return (
        <motion.div
            initial ={{opacity:0}}
            animate = {{opacity:1}}
            transition={{duration:0.5}}
        >
            <div className="ps-5 ms-3 p-4 d-flex flex-column" style={{minHeight:'100vh', gap:'20px'}}>
                <div>
                    <GasCheck gas={datas2} {...location.state}/>{/*parse data through location.state to the component*/}
                </div>
                <MapComp {...location.state}/>
                <Charts3 gass={datas} />
            </div>
        </motion.div>
    );
}


export default MainPage;