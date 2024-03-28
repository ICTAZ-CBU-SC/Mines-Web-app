import { useContext } from "react";
import Profile from "./users";
import { ThemeContext } from "../../functions/Context";
import { Link } from "react-router-dom";

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
                                    <Link to={{pathname: '/Users/'+ e.id, state: {name: e.name, id: e.id, position: e.position, gas: e.gas}, search: ''+e.id }} className="col-3 p-4" key={e.id}>
                                        <Profile name={e.name} id={e.id} position={e.position} gas={e.gas} />
                                    </Link>
                                )
                            })}
                </div>
            </div>
        </>
    )
}


export default UserPage;