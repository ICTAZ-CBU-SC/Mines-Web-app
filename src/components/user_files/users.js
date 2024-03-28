import { Link } from "react-router-dom";

const Profile = (props) => {
    return (
        <>
            <div style={{}}> 
            <Link to={'/Users/'+ props.id}>
                <div style={{position:'relative'}} className="bg-secondary rounded-4 p-4">
                    <div className="py-3">

                    </div>
                        <div className="d-flex" style={{position:'absolute', gap:'10px', top:'10px', right:'10px'}}>
                            <div className="bg-light rounded-2 px-3 d-flex justify-content-center flex-column">
                                Gas | 30
                            </div>
                            <div className="d-flex justify-content-center flex-column">
                                <div className="bg-danger" style={{height:'10px', width:'10px', borderRadius:'50%'}}></div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="bg-light" style={{height:'50px', width:'50px', borderRadius:'50%'}}></div>
                            <div className="d-flex  ps-2 ">
                                <div className="text-white">
                                    <div>{props.name}</div>
                                    <div>{props.position}</div>
                                </div>
                            </div>
                        </div>
                </div>
            </Link>
            </div>
            
        </>
    )
}

export default Profile;