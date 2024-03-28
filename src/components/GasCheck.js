import { useContext, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ThemeContext } from "../functions/Context";

const GasCheck = () => {
const [Alert, setAlert] = useState(true)
const name = useContext(ThemeContext)


    const ChangeAlertColor = () => {
        if(Alert){
            document.getElementById('blinkAlert').classList.remove('opacity-0')
            document.getElementById('blinkAlert').classList.add('opacity-1')
        } 
        
        if(!Alert)
        {
            document.getElementById('blinkAlert').classList.remove('opacity-1')
            document.getElementById('blinkAlert').classList.add('opacity-0')
        } 
        setAlert(!Alert)   
    }
    setInterval(() => ChangeAlertColor(), 2000);

    return (
        <>
            <div className="d-flex justify-content-between pt-3" >
                <div  className="d-flex flex-column justify-content-center">
                    <Link>
                        <FaArrowLeft size={20} />
                    </Link>
                </div>

                <div className="shadow-sm p-3 rounded-4 d-flex" style={{gap:'10px', backgroundColor:'#ddd'}}>
                    <div>Gas Level | 30% </div> | {name}
                    <div  className="d-flex flex-column justify-content-center">
                        <span className="bg-success" style={{width:'20px', height:'20px', borderRadius:'50%'}}></span>
                    </div>
                </div>
                <div id="blinkAlert" className="d-flex blinkstyle flex-column justify-content-center">
                    <span className="bg-danger" style={{width:'20px', height:'20px', borderRadius:'50%'}}></span>
                </div>
            </div>
        </>
    )
}

export default GasCheck