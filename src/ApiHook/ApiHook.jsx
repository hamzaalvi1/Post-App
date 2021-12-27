import {useState,useEffect,useCallback} from "react"
import api from "../Api/api"

export const ApiHook = ()=>{

    const [postData,setPostData] = useState([])
   
    const fetchNewApi = async ()=>{
        try{
           const response = await api.get("/posts")
           const data = response.data
           setPostData([...data])
            
            
        }
        catch(error){
            console.log(error)
        }
} 
const MemoizedApi = useCallback(()=>{
    fetchNewApi()
},[postData])
   
    useEffect(()=>{
    //    const getData = fetchNewApi()
    //    getData.then((res,rej)=>{
    //     if(res.length !== 0){
    //         setPostData(res)
    //     }


    //    })
    MemoizedApi()
        // setPostData(getData)
    },[])
     
  return {postData}
}