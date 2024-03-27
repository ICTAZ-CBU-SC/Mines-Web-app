import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const GasCheck = () => {

    useEffect(() => {
        console.log('hello')
    }, 500)

    return (
        <>
            <div className="d-flex justify-content-between pt-3" >
                <div  className="d-flex flex-column justify-content-center">
                    <Link>
                        <FaArrowLeft size={20} />
                    </Link>
                </div>

                <div className="shadow-sm p-3 rounded-4 d-flex" style={{gap:'10px', backgroundColor:'#ddd'}}>
                    <div>Gas Level | 30% </div> |
                    <div  className="d-flex flex-column justify-content-center">
                        <span className="bg-success" style={{width:'20px', height:'20px', borderRadius:'50%'}}></span>
                    </div>
                </div>
                <div id="blinkAlert" className="d-flex flex-column justify-content-center">
                    <span className="bg-danger" style={{width:'20px', height:'20px', borderRadius:'50%'}}></span>
                </div>
            </div>
        </>
    )
}

export default GasCheck