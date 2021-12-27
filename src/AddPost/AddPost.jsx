import React from 'react'
import { Container, Text,Stack } from '@chakra-ui/react'
import { Formik,Form } from "formik";
import { InputControl, TextareaControl,  SubmitButton, } from 'formik-chakra-ui';
import api  from '../Api/api';
// Get
// Post
// PUT
// delte
const AddPost = () => {
    return (
        <div>
            <Container maxW='container.lg'>
            <Text fontWeight={700} fontSize='40px' py={5}>Add Post</Text>
             <Formik initialValues={{title:"",body:"",}}
             onSubmit={async (values)=>{
               
                 const postData = await api.post("/posts",{ 
                     id: Math.ceil((Math.random() * 100000)),
                     ...values
                 })
                 console.log(postData)
             }}>
                  {(formProps)=>(
                      <Form>
                      <Stack my="5">
                       <InputControl name="title" label="Title" />
                        <TextareaControl name="body" label="Content" />
                        {/* <input type="file" name="photos" onChange = {(evt)=> {
                            let fileName  =evt.target.files[0]
                            formProps.setFieldValue("photos",fileName)
                            
                            }} /> */}
                        <SubmitButton>Add Post</SubmitButton>
                        </Stack>
                   </Form>
                  )}
             
                   
               
           
             </Formik>
             </Container>
        </div>
    )
}

export default AddPost
