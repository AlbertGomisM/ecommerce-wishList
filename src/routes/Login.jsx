import { NavBar, ProductsList, RecomBooks, Cart, Footer } from '../components';

import { UserContext } from '../context/userContext';

import { useNavigate } from "react-router-dom";

import React, { useState, useContext } from 'react'

export const Login = () => {

  const [formName, setFormName] = useState("")
  const [formPass, setFormPass] = useState("")
  const { loginState, setLoginState, userName, setUserName,error, setError } = useContext(UserContext)
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/users")
      .then((response) => (response.json()))
      .then((data) => {
        data.map((user) => {
          if (user.name === formName && user.password === formPass) {
            setError(false)
            setLoginState(true);
            setUserName(formName)
            navigate("/")
          } else{
            setError(true)
          }
        })
      });
  }

  const handleName = (e) => {
    setFormName(e.target.value);
  }

  const handlePass = (e) => {
    setFormPass(e.target.value);
  }

  const navigateSignIn = (e) => {
    navigate("/signIn")
  }



  return (
    <div>
      <NavBar />
      <div className='formDiv'>
        <p>Log in to find your books!</p>
        <form onSubmit={handleLogin} className='formLogin'>
          <input type="text" value={formName} onChange={handleName} placeholder="Your Nickname"/>
          <input type="password" value={formPass} onChange={handlePass} placeholder="Your Password"/>
          <div className='divBtn'>
            <button type='submit' className='btnLogin'>Log in</button>
            <button onClick={navigateSignIn}>Sign in</button>
          </div>
          {error ? <p>Your email and/or password are wrong</p>:null}
          {loginState ? <p>You are a GOOD READER!</p> : <p>You are not logged in</p>}
        </form>
      </div>
      
    </div>
  )
}
