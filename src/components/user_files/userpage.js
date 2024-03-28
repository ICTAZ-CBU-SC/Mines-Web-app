import { useContext } from "react";
import Profile from "./users";
import { ThemeContext } from "../../functions/Context";

const UserPage = () => {
    const data = useContext(ThemeContext)
    if(data != '') {

    }
    return (
        <>
            <div className='p-5'>
                <div className="row">
                    
                            {data.map((e) => {
                                return(
                                    <>
                                    <div className="col-3 p-4">
                                        <Profile name={e.name} id={e.id} position={e.position} />
                                    </div>
                                    </>
                                )
                            })}
                </div>
            </div>
        </>
    )
}


export default UserPage;