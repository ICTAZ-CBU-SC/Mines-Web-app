import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { VscBellDot } from "react-icons/vsc";

const NavBar = () => {
    const [slider, setSlider] = useState(false)
     


    

    const ActivateSlider = () => {
        setSlider(!slider)
        
        if(slider){
            document.getElementById('slidenav').classList.remove('slidenav_2')
            document.getElementById('slidenav').classList.add('slidenav_1')
        } else {
            document.getElementById('slidenav').classList.remove('slidenav_1')
            document.getElementById('slidenav').classList.add('slidenav_2')
        }        
    }

    
    return (
        <>
            <div style={{}}>
                <div className="bg-secondary " style={{position:'relative', zIndex:3}}>
                    <div className="slidenav_1 shadow-sm" id="slidenav" style={{height:'100vh', paddingTop:'60px', overflow:'hidden',position:"fixed", top:0, bottom:0, left:0}}>
                        <div className="bg-white" style={{width:'100%', height:'100%'}}>
                            <Link to='/Users'>
                                <div style={{gap:'20px'}} className="d-flex p-2" >
                                    <div><FaUser size={20}/></div>
                                    <div className="d-flex flex-column justify-content-center fw-semibold">All users</div>
                                </div>
                            </Link>
                            <Link to=''>
                                <div style={{gap:'20px'}} className="d-flex p-2" >
                                    <div><VscBellDot size={20}/></div>
                                    <div className="d-flex flex-column justify-content-center fw-semibold">User Alerts</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div style={{position:'fixed', top:'10px', left:'10px'}}>
                        <HiMenuAlt2 style={{cursor:'pointer'}} onClick={() => ActivateSlider()} size={40}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;

// I was here