import React, { useState, useEffect } from "react";
import { CartItem } from "./CartItem.jsx";
import {products} from "../../data/products";
import { TotalCart } from "./totalCart.jsx";
import "./Cart.css"

export const Cart = ({counter}) => {

  return (
    <div className="cardCart">
        <p className="yourCart">Your Cart:</p>
        <hr></hr>
        {
          products.map((book)=>{
            return(
              <CartItem book={book}/>
              )
            })
          }    
        <hr></hr>  
        <p className="totalCart">Total: <TotalCart /></p>
        <hr></hr>
        <button className="buttonBuy">Buy!</button>
    </div>
  )
}
