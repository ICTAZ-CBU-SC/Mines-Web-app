import { useLocation } from "react-router-dom";
import GasCheck from "./components/GasCheck";
import MapComp from "./components/MapComp";
import Charts3 from "./components/Charts3";
import ApexCharts from "apexcharts";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from 'framer-motion'
import { faker } from "@faker-js/faker";
import { API_URL } from "./test";
import React from "react";
import Chart from "react-apexcharts"

const MainPage = () => {
    const [datas, setDatas] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
     
    const location = useLocation();//get information from link via the useLocation method.
    // let { id } = useParams()


    const GetGassInfoFromApi = () => {
        // let anotherValue = faker.number.int({max:500})
        // datas.push(anotherValue)

        // setDatas(datas)

        // ApexCharts.exec('realtime', 'updateSeries', [{
        //     data: datas
        // }])

        axios.get(API_URL + 'gas-readings-latest/1')
            .then((response) => {
                if (response) {
                    datas.push(response.data.Concentration)
                    setDatas(datas)
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                ApexCharts.exec('realtime', 'updateSeries', [{
                    data: datas
                }])
            })
        // clearInterval(thatinterval)

    }

    let thatinterval = setInterval(() => {
        GetGassInfoFromApi()
    }, 2000);


    useEffect(() => {
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="ps-5 ms-3 p-4 d-flex flex-column" style={{ minHeight: '100vh', gap: '20px' }}>
                <div>
                    <GasCheck id={1} {...location.state} />
                </div>
                <MapComp {...location.state} />

                <Charts3 gas={datas} />
            </div>
        </motion.div>
    );
}


export default MainPage;