import { FaArrowLeft } from "react-icons/fa6";
import { ThemeContext } from "../functions/Context";
import { useContext, useState } from "react";
import { io } from "socket.io-client";
import { API_URL } from "../test";
// import { Link } from "react-router-dom";

const GasCheck = (props) => {
    const [datas2, setDatas2] = useState(0)
    const data = useContext(ThemeContext)

    let mydataname = data.filter((e) => e.id == props.id)
    let truedata = mydataname[0]

    const socket = io(API_URL);

    socket.on("new_gas_reading", (data) => {
        
        if(data){
            setDatas2(data.concentration)
        }
    
      });

    // const GetThatData = () => {
    //     axios.get(API_URL + 'gas-readings-latest/' + props.id)
    //         .then((response) => {
    //             setDatas2(response.data.Concentration)
    //         })
    //         .catch((err) => {
    //             clearInterval(thatinterval)
    //         })
    // }

    // let thatinterval = setInterval(() => {
    //     GetThatData()
    // }, 2000);

    return (
        <>
            <div className="d-flex justify-content-between pt-3" >
                <div  className="d-flex flex-column justify-content-center">
                    <a href='/'>
                        <FaArrowLeft size={20} />
                    </a>
                </div>

                <div className="shadow-sm p-3 rounded-4 d-flex" style={{gap:'10px', backgroundColor:'#ddd'}}>
                    <div>NAME:
                    {truedata
                    ?
                    <>
                    {` ${truedata.middlename} ${truedata.surname}`}
                    </>
                :
                <></>
                }
                </div>
                </div>
                <div className="shadow-sm p-3 rounded-4 d-flex" style={{gap:'10px', backgroundColor:'#ddd'}}>
                    <div>Gas Level {datas2} </div> |
                    <div  className="d-flex flex-column justify-content-center">
                        {datas2 > 250 ? <span className="bg-danger" style={{width:'20px', height:'20px', borderRadius:'50%'}}></span> : <span className="bg-success" style={{width:'20px', height:'20px', borderRadius:'50%'}}></span>}
                    </div>
                </div>
                {datas2 > 250 ?<div id="blinkAlert" className="d-flex flex-column justify-content-center">
                    <span className="bg-danger" style={{width:'20px', height:'20px', borderRadius:'50%'}}></span>
                </div>: <span>All clear</span>}
            </div>
        </>
    )
}

export default GasCheck