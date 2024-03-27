import GasCheck from "./components/GasCheck";
import MapComp from "./components/MapComp";

const MainPage = () => {
   
    return (
        <>
            <div className="bg-light p-4 d-flex flex-column" style={{minHeight:'100vh', gap:'20px'}}>
                <GasCheck/>
                <MapComp/>
            </div>
        </>
    )
}


export default MainPage;