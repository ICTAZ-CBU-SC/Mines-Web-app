//show miner details

const Profile = (props) => { //recieve data from props.
    
    return (
            <div style={{}}> 
                <div style={{position:'relative', backgroundColor:"#bbb"}} className="rounded-4 p-4 hover:scale-110">
                    <div className="py-3">
                    </div>
                        <div className="d-flex" style={{position:'absolute', gap:'10px', top:'10px', right:'10px'}}>
                            <div className="bg-light rounded-2 px-3 d-flex justify-content-center flex-column">
                                Gas | {props.gas}
                            </div>
                            <div className="d-flex justify-content-center flex-column">
                                {props.gas < 50 ? <div className="bg-danger" style={{height:'10px', width:'10px', borderRadius:'50%'}}></div> : <div className="bg-success" style={{height:'10px', width:'10px', borderRadius:'50%'}}></div>}
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