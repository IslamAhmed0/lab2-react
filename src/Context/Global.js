import {createContext, useState} from 'react'

export const Global = createContext();

export const GlobalProvider= (children)=>{


    const [user,setuser]=useState();

    // const handler=() =>{
    //     console.log("logout");
    // }


    return (


        <Global.Provider value={{user,setuser}}>

            {children}
        </Global.Provider>

    )
}