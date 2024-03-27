import { createContext, useContext, useState } from "react"

export const ThemeContext = createContext({});




export const MyContext = ({children}) => {
    const [data, setData] = useState()


    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}