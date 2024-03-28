import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
const signalR = require('@microsoft/signalr')




export const ThemeContext = createContext({});


export const MyContext = ({children}) => {
    const [datas, setDatas] = useState([])


   
 
    useEffect(() => {
        axios.get('http://localhost:3001/names').then((response) => {
            setDatas(response.data)
        })


        let connection
        
    }, [])


    return(
        <ThemeContext.Provider value={datas}>
            {children}
        </ThemeContext.Provider>
    )
}