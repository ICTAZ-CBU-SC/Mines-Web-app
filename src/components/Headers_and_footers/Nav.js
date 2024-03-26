import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";

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
                    <div className="" id="slidenav" style={{height:'100vh', paddingTop:'60px'}}>
                        <div className="bg-white" style={{width:'100%', height:'100%'}}>
                            <div></div>
                        </div>
                    </div>
                    <div style={{position:'fixed', top:'10px', left:'10px'}}>
                        <HiMenuAlt2  style={{cursor:'pointer'}} onClick={() => ActivateSlider()} size={40}>menu</HiMenuAlt2 >
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;