import React, { useState, useEffect, useContext } from "react";
import { CartItem } from "./CartItem.jsx";
import {products} from "../../data/products";
import { TotalCart } from "./totalCart.jsx";
import "./Cart.css"
import { DataContext } from "../../context/dataContext";


export const Cart = ({counter}) => {

  const {selectedBook} = useContext(DataContext);

  return (
    <div className="cardCart">
        <p className="yourCart">Your Cart:</p>
        <hr></hr>
        {
          selectedBook.map((book)=>{
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
