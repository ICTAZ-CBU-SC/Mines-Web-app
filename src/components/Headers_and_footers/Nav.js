import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { GrMapLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
//import { HiMenuAlt2 } from "react-icons/hi";

const NavBar = () => {
    const [slider, setSlider] = useState(false)
     


    

    const ActivateSlider = () => {
        if(slider){
            document.getElementById('slidenav').classList.remove('slidenav_2')
            document.getElementById('slidenav').classList.add('slidenav_1')
        } else {
            document.getElementById('slidenav').classList.remove('slidenav_1')
            document.getElementById('slidenav').classList.add('slidenav_2')
        }

        setSlider(!slider)
    }

    
    return (
        <>
            <div>
                <div className="bg-light" style={{position:'relative'}}>
                    <div className="" id="slidenav" style={{height:'100vh', paddingTop:'60px', overflow:'hidden'}}>
                        <div className="bg-white" style={{width:'100%', height:'100%'}}>
                            <Link to=''>
                                <div style={{gap:'20px'}} className="d-flex p-4" >
                                    <div><GrMapLocation size={30}/></div>
                                    <div className="d-flex flex-column justify-content-center fs-5 fw-semibold">Map</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div style={{position:'fixed', top:'10px', left:'10px'}}>
                        <button style={{cursor:'pointer'}} onClick={() => ActivateSlider()} size={40}>menu</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;