import React,{useContext} from "react";
import {Redirect, Route} from "react-router";
import {Global} from '../Context/Global'


const PrivetRoute=({path,component})=>{
    const {user}=useContext(Global);
    if (user){
        <Route path={path} component={component}/>
    }

        return <Redirect to='/login'/>
}


export default PrivetRoute
