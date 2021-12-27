import React,{useContext} from 'react'
import { GlobalContext } from "../../GlobalState/GlobalState"
const Dummy2 = () => {
    const glblContext =  useContext(GlobalContext)
    console.log(glblContext)
    const {isClassAdd,setClassAdd} = glblContext
    return (
        <div>
           <a href="#" onClick={()=>setClassAdd(!isClassAdd) } >Click to Change Button Color</a>  
        </div>
    )
}

export default Dummy2
