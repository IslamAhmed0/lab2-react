import {useContext, useEffect, useReducer} from "react";
import {Global} from '../Context/Global';

import {useHistory} from 'react-router'

const Login=()=>{
    const reducer =(prev,next)=>({
        ...prev,
        ...next
    })

    const [user,setUser] = useContext(Global);
    useEffect(()=>{
        console.log(user)
    },[user])

    const history =useHistory();

    const [{username,password},setState,error]=useReducer(reducer,{
        username:'',
        password:'',
    });


    const onInputChange=(e)=>{
        const  inputname=e.target.name;
        const  inputvalue=e.target.value;


        // if(inputvalue==='username'){
        //     setState({username:inputvalue})
        // }
        // if(inputvalue==='password'){
        //     setState({password:inputvalue})
        // }
        //OR
        setState({[inputname]:inputvalue});


    }
    const onSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password});


        setState({username:'', password:''});
        if(username==='islam' && password===12345){
            history.push('/home')

        }
        else{
            setState({error:"error"})
        }


    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>username</label>
                <input name="username" type='text' onChange={onInputChange} value={username}/>
                <label>password</label>

                <input name="password" type="number" onChange={onInputChange} value={password}/>


                <input type="submit" value="send"/>
                <span>{error}</span>
            </form>
        </div>
    )
}


export default Login;