import { useLocation, useParams } from "react-router-dom";
import GasCheck from "./components/GasCheck";
import MapComp from "./components/MapComp";
import Charts3 from "./components/Charts3";
import { useEffect, useState } from "react";
import axios from "axios";

const MainPage = () => {
    const [datas, setDatas] = useState(null)
    const location = useLocation();//get information from link via the useLocation method.
    let {id} = useParams()
    console.log(id+'ok')


useEffect(() => {
    axios.get('http://192.168.0.103:5000/gas-readings-latest/')
    .then((response) => {
        if(response){
            setDatas(response)
        }
    })
    .catch((err) => {
        console.log(err)
    })


}, [])
    return (
        <div className="ps-5 ms-3 p-4 d-flex flex-column" style={{minHeight:'100vh', gap:'20px'}}>
            <div>
                <GasCheck gass={datas} {...location.state}/>{/*parse data through location.state to the component*/}
            </div>
            <MapComp {...location.state}/>
            <Charts3 gass={datas} />
        </div>
    );
}


export default MainPage;