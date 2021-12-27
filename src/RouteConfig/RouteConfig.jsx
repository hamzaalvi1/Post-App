import React from 'react'
import {Switch,Route} from "react-router-dom"
import AddPost from '../AddPost/AddPost'
import Posts from '../Posts/Posts'



const RouteConfig = () => {
    return (
        <>
         <Switch>
             <Route path = "/"  exact component={Posts} />
             <Route path="/addPost" component={AddPost}/>
        </Switch>   
        </>
    )
}

export default RouteConfig
