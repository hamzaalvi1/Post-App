import { createContext,useState } from "react";
// import {ApiHook} from "../ApiHook/ApiHook"

export const GlobalContext = createContext()
export const GlobalProvider = (props)=>{
 const [isClassAdd,setClassAdd]= useState(false)
    return(
        <GlobalContext.Provider value={{isClassAdd,setClassAdd}}>
          {props.children}
        </GlobalContext.Provider>
    )
}