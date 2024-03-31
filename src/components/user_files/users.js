//show miner details

import { faker } from "@faker-js/faker";
import { useState } from "react";

const Profile = (props) => { //recieve data from props.
    //creates gas variable to store gas values though this is for 
    //presentation purposes
    const [gasData, setGetData] = useState()

    //changes the state of garData to a new rundom number value
    const setnewVal = () => {
        setGetData(faker.number.int({max:100})) //this creates a rundom value below or equal to 100
        clearInterval(myinterval) //this then clears the setinterval so that the code does go crazy
    }

    //stores and initializes setinterval
    //the function in inside runs every 2 second
    let myinterval = setInterval(() => {
        setnewVal()
    }, 2000)

    return (
            <div style={{}}> 
                <div style={{position:'relative', backgroundColor:"#bbb"}} className="rounded-4 p-4 hover:scale-110">
                    <div className="py-3">
                    </div>
                        <div className="d-flex" style={{position:'absolute', gap:'10px', top:'10px', right:'10px'}}>
                            <div className="bg-light rounded-2 px-3 d-flex justify-content-center flex-column">
                                Gas | {gasData}
                            </div>
                            <div className="d-flex justify-content-center flex-column">
                                {gasData > 50 ? <div className="bg-danger" style={{height:'10px', width:'10px', borderRadius:'50%'}}></div> : <div className="bg-success" style={{height:'10px', width:'10px', borderRadius:'50%'}}></div>}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="bg-light" style={{height:'50px', width:'50px', borderRadius:'50%'}}></div>
                            <div className="d-flex  ps-2 ">
                                <div className="fw-bold">
                                    <div>{props.name}</div>
                                    <div>{props.position}</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
    )
}

export default Profile;