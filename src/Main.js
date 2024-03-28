<<<<<<< HEAD
import { Maps } from "./components/Chart";
import GasCheck from "./components/GasCheck";
import MapComp from "./components/MapComp";
=======

import GasCheck from './components/GasCheck';
import MapComp from './components/VideoFeed';
import { useLocation } from "react-router-dom";
>>>>>>> 6d1ba5bf66b27a7673b185120fba634e083b0f43

const MainPage = () => {
    const location = useLocation();//get information from link via the useLocation method.

    return (
<<<<<<< HEAD
        <>
            <div className="ps-5 ms-3 p-4 d-flex flex-column" style={{minHeight:'100vh', gap:'20px'}}>
                <div className="">
                    <GasCheck/>
                </div>
                <MapComp/>

                <Maps/>
=======
        <div className="ps-5 ms-3 p-4 d-flex flex-column" style={{minHeight:'100vh', gap:'20px'}}>
            <div>
                <GasCheck {...location.state}/>{/*parse data through location.state to the component*/}
>>>>>>> 6d1ba5bf66b27a7673b185120fba634e083b0f43
            </div>
            <MapComp {...location.state}/>
        </div>
    );
}
export default MainPage;
