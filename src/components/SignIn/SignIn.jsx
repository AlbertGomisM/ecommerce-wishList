import { useNavigate } from "react-router-dom";

import { NavBar } from "../NavBar/NavBar";

import React, { useState, useEffect } from 'react'

export const SignIn = () => {

  const [formName, setFormName] = useState("")
  const [formPass, setFormPass] = useState("")
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const [signIn, setSignIn] = useState(false)
  
  const handleSignin = (e) =>{
    e.preventDefault();
    setData({"name": formName, "password":formPass})
    console.log(JSON.stringify(data))
    setSignIn(true)}


useEffect(() => {
    if(formName && formPass){

        fetch("http://localhost:4000/users", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

}, [data])


  const handleName = (e) => {
    setFormName(e.target.value);
    console.log(formName)
  }
  
  const handlePass = (e) => {
    setFormPass(e.target.value);
    console.log(formPass)
  }
  
  const navigateLogIn = (e) => {
    navigate("/login")
  }



  return (
    <div>
        <div className='formDiv'>
          <p>Log in to find your books!</p>
          <form onSubmit={handleSignin} className='formLogin'>
            <input type="text" value={formName} onChange={handleName} placeholder="Enter your Nickname"/>
            <input type="password" value={formPass} onChange={handlePass} placeholder="Enter your Password"/>
            <div className='divBtn'>
              <button type='submit' className='btnLogin'>Sign in</button>
              <button onClick={navigateLogIn}>Log in</button>
            </div>
            {signIn ? <p>Now you have an account</p> : null}
          </form>
        </div>
    </div>
  )
}