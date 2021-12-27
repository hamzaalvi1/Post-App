import React,{useContext} from 'react'
import { GlobalContext } from '../GlobalState/GlobalState'
import "../App.css"
const Dummy = () => {
    const glblContext =  useContext(GlobalContext)
    console.log(glblContext)
    const {isClassAdd} = glblContext
    return (
        <div>
            <h2>Hello  Dummy World</h2>
            <button className={isClassAdd ? "bgClass" : null} style={{backgroundColor:"yellow",padding:"10px"}}>Some Dummy Text</button>
        </div>
    )
}

export default Dummy
