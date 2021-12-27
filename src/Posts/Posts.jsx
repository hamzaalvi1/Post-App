import { Container, Stack,Flex,Text,Heading, Grid,Spinner } from '@chakra-ui/react'
import React,{useEffect,useState,useContext} from 'react'
import Dummy from '../AddPost/Dummy'
import api from "../Api/api"
import Dummy2 from '../AddPost/Dummy2/Dummy2'
import {GlobalContext} from "../GlobalState/GlobalState"


const Posts = () => {
const glblContext = useContext(GlobalContext) 
   

    const [postData,setpostData] = useState([])
   
  
    const fetchNewApi = async ()=>{
              try{
                 const response = await api.get("/posts")
                 const data = response.data
                 setpostData([...data])
                  
                  
              }
              catch(error){
                  console.log(error)
              }
    }  
  
   useEffect(()=>{ 
   fetchNewApi()
 

   },[])
 

const deletePost = async (postID)=>{
     const response = await api.delete(`/posts/${postID}`) 

       const newPostList = postData.filter((cData)=> {
         
           return cData.id !== postID
        } )
       setpostData(newPostList)
    
  console.log(response)
  
}

    return (
        <div className='post'>
            <Dummy2/>
            <Container maxW={"1250px"} mt="4">
                <Dummy />
                
                 {postData.map((pdata,index)=>{
                    return(
                        <Stack mb="4" key={pdata.id} p={4} boxShadow="md" borderRadius = "xl" border="1px solid #ccc">
                        <Flex justify="space-between">
                            <Text>Post Id: {pdata.id} </Text>
                             
                        </Flex>
                        {/* {pdata.photos ? <img src={pdata.photos} /> : null} */}
                        <Heading fontSize="2xl">{pdata.title}</Heading>
                             <Text>{pdata.body}</Text>

                             <button className = "delete" onClick={()=> deletePost(pdata.id)}>Delete</button>
                      </Stack>
                    )
                })}
                
            </Container>
        </div>
    )
}

export default Posts
