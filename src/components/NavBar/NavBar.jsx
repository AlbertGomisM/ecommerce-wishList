import React from 'react';
import "./navBar.css";
import {Link} from "react-router-dom";
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';

export const NavBar = () => {
  
  const { loginState, setLoginState, userName, setUserName,error, setError } = useContext(UserContext)

  const handleLogOut = (e) => {
    setLoginState(false)
    setUserName("")
    setError(false)
  }



  return (
    <div >
      <nav className='nav'>
        <Link to="/"><img className='logo' src='https://cdn.dribbble.com/users/2543315/screenshots/15627040/media/2427c2b075d6fef177523f3b1840a2bc.png'/></Link>
        <Link to="/products">Search Products</Link>
        <Link to="/shoppingCart">Shopping Cart</Link>
        <div>
          <Link to="/login">Login</Link>
          {userName ? <button onClick={handleLogOut}>Log out</button>: null}
        </div>

      </nav>
    </div>
  )
}
