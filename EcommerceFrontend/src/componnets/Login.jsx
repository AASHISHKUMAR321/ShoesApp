import React from 'react'
import FullWidthTextField from './Input'
import styled from 'styled-components'
import { Button } from './Button'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const LoginDiv = styled.div`
    width: 100%;
  
    margin: auto;
   margin-top: 50px;
   a{
       text-decoration: none;
   }


   
`


export const Login = () => {

    const [user,setUser] = useState({});


const handle= (e)=>{
        
        setUser({...user,[e.target.name]:e.target.value})
}

const HandleClick = ()=>{
        console.log(user)
}


  return (
    <LoginDiv>

         
            <FullWidthTextField  text={"Email"} name={'email'} handle={handle} />
            <FullWidthTextField  text={"Password"} name={'password'} handle={handle} />
            <Button name={"Login"} handle={HandleClick} />
            <br />
            <h6>Don't Have Account ? <Link to={'/signup'}>Sign</Link> </h6>
     
       
    </LoginDiv>
  )
}
