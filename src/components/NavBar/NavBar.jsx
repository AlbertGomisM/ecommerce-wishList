import React from 'react';
import "./navBar.css";
import {Link} from "react-router-dom";

export const NavBar = () => {
  return (
    <div >
      <nav className='nav'>
        <Link to="/"><img className='logo' src='https://cdn.dribbble.com/users/2543315/screenshots/15627040/media/2427c2b075d6fef177523f3b1840a2bc.png'/></Link>
        <Link to="/products">Search Products</Link>
        <Link to="/shoppingCart">Shopping Cart</Link>
        <Link to="/login">Login</Link>

      </nav>
    </div>
  )
}
