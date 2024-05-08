import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BK_URL } from "../constants/constants";

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null)
    useEffect(()=>{getUser()},[])
    const getUser = async() => {
        try {
            const res = await axios.get(BK_URL+"/api/auth/refetch",{withCredentials:true})
            setUser(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}