import axios from "axios";
import { createContext,  useEffect, useState } from "react"
import { API_URL } from "../test";

//creates context to be used throughout the project tree
export const ThemeContext = createContext({});


export const MyContext = ({children}) => {
    //this is a useState hook used to create the datas variable that will then be
    // used to store incoming data from the api
    const [datas, setDatas] = useState([])

    //this hook runs when the browser renders or is refreshed
    useEffect(() => {
        
        //this is the request function ...using axios to make a get request to our server
            axios.get(API_URL + 'get-users')
            //the  .then is used to perform assynchronouse programming
            .then((response) => {

                //the response recieved is then passed through to the data variable 
                //with using useState 
                setDatas(response.data)
            })
            //this block of code then catches any error that may come as a result of
            //an aoi issue or just throws all the errors in general
            .catch((error) => {
                if(error){
                    console.log(error) //logs the error
                }
            })
    }, [])

    return(
        <ThemeContext.Provider value={datas}>
            {children}
        </ThemeContext.Provider>
    )
}