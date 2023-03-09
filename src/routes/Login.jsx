import { NavBar, ProductsList, RecomBooks, Cart, Footer} from '../components';

import { UserContext } from '../context/userContext';

import { useNavigate } from "react-router-dom";

import React, { useState, useContext } from 'react'

export const Login = () => {

  const [formName, setFormName] = useState("")
  const [formPass, setFormPass] = useState("")
  const {loginState, setLoginState} = useContext(UserContext)
  const [data, setData] = useState([])
  const navigate = useNavigate()
  
  const handleLogin = (e) =>{
    e.preventDefault();
    fetch("http://localhost:4000/users")
      .then((response) => (response.json()))
      .then((data) => setData(data));
    console.log(data)
    data.map((user)=>{
      if (user.name === formName && user.password === formPass) {
        setLoginState(true);
        console.log(loginState);
      } else{
        setLoginState(false);
      }
    })
  }

  const handleName = (e) => {
    setFormName(e.target.value);
    console.log(formName)
  }
  
  const handlePass = (e) => {
    setFormPass(e.target.value);
    console.log(formPass)
  }
  
  const navigateSignIn = (e) => {
    navigate("/signIn")
    console.log(formPass)
  }



  return (
    <div>
        <NavBar />
        <div className='formDiv'>
          <p>Log in to find your books!</p>
          <form onSubmit={handleLogin} className='formLogin'>
            <input type="text" value={formName} onChange={handleName}/>
            <input type="password" value={formPass} onChange={handlePass}/>
            <div className='divBtn'>
              <button type='submit' className='btnLogin'>Log in</button>
              <button onClick={navigateSignIn}>Sign in</button>
            </div>
            {loginState ? <p>You are a GOOD READER!</p> : <p>You are not logged in</p>}
          </form>
        </div>
    </div>
  )
}
