import { Container, Stack,Flex,Text,Heading, Grid,Spinner } from '@chakra-ui/react'
import React,{useEffect,useState} from 'react'
import api from "../Api/api"

const Posts = () => {
    

    const [postData,setpostData] = useState([])
    // const fetchPost = async ()=>{
    //     try{
    //         const {data} = await axios.get("https://gorest.co.in/public/v1/posts")
       
    //         return data;
    //     }
    //     catch(error){
    //       throw Error("Unable to Fetched Posts") 
    //     }
    // }
    // const {data,isLoading,error} = useQuery('posts',fetchPost)
  
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
  
//    useEffect(()=>{ 
//    fetchNewApi()
 

//    },[])
   useEffect(()=>{
    fetchNewApi()  
   },[])
//    delete post

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
            <Container maxW={"1250px"} mt="4">
                
                 {postData.map((pdata,index)=>{
                    return(
                        <Stack mb="4" key={pdata.id} p={4} boxShadow="md" borderRadius = "xl" border="1px solid #ccc">
                        <Flex justify="space-between">
                            <Text>Post Id: {pdata.id} </Text>
                             
                        </Flex>
                        {/* {pdata.photos ? <img src={pdata.photos} /> : null} */}
                        <Heading fontSize="2xl">{pdata.title}</Heading>
                             <Text>{pdata.body}</Text>

                             <button className = "delete" onClick = {()=>deletePost(pdata.id)}>Delete</button>
                      </Stack>
                    )
                })}
                
            </Container>
        </div>
    )
}

export default Posts
