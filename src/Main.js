import { Maps } from "./components/Chart";
import GasCheck from "./components/GasCheck";
import MapComp from "./components/MapComp";

const MainPage = () => {
   
    return (
        <>
            <div className="ps-5 ms-3 p-4 d-flex flex-column" style={{minHeight:'100vh', gap:'20px'}}>
                <div className="">
                    <GasCheck/>
                </div>
                <MapComp/>

                <Maps/>
            </div>
        </>
    )
}


export default MainPage;