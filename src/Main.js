
import { Charts } from './components/Chart';
import GasCheck from './components/GasCheck';
import MapComp from './components/VideoFeed';
import { useLocation } from "react-router-dom";

const MainPage = () => {
    const location = useLocation();//get information from link via the useLocation method.
    console.log(location);

    return (
        <div className="ps-5 ms-3 p-4 d-flex flex-column" style={{minHeight:'100vh', gap:'20px'}}>
            <div>
                <GasCheck {...location.state}/>{/*parse data through location.state to the component*/}
            </div>
            <MapComp {...location.state}/>
             <Charts/>
        </div>
    );
}
export default MainPage;
