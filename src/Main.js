import { useLocation } from "react-router-dom";
import GasCheck from "./components/GasCheck";
import MapComp from "./components/MapComp";
import Charts3 from "./components/Charts3";

const MainPage = () => {
    const location = useLocation();//get information from link via the useLocation method.

    return (
        <div className="ps-5 ms-3 p-4 d-flex flex-column" style={{minHeight:'100vh', gap:'20px'}}>
            <div>
                <GasCheck {...location.state}/>{/*parse data through location.state to the component*/}
            </div>
            <MapComp {...location.state}/>
            <Charts3/>
        </div>
    );
}


export default MainPage;