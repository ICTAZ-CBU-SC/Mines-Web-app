import { useContext} from "react";
import Profile from "./users";
import { ThemeContext } from "../../functions/Context";
import {motion} from 'framer-motion'

const UserPage = () => {
    //get data from context tree and uses it in this functional components
    const data = useContext(ThemeContext)


    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className='p-5'>
                    <div className="row">
                        {/* this shecks for the values in the data varibles and either renders it throuh a map method
                    or not */}
                        {data.length > 0 ? data.map((e) => {
                            return (
                                <a href={'/Users/' + e.id} className="col-12 col-md-6 col-lg-3 p-4" key={e.id}>
                                    <Profile mname={e.middlename} sname={e.surname} id={e.id} />
                                </a>
                            )
                        })
                            :
                            <> <h2>nothing here</h2></>
                        }
                    </div>
                </div>
            </motion.div>
        </>
    )
}


export default UserPage;