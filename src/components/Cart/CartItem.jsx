import React, { useState, useEffect } from "react";
import {products} from "../../data/products";
import { useContext } from 'react';
import { DataContext } from "../../context/dataContext";

export const CartItem = ({book}) => {
    const contextData = useContext(DataContext)

    const {name, price} = book
    const [selectedBook, setSelected] = useState(0)
    // let numero;
    // useEffect(() => {
    //     function freshLocalStorage(){
    //         numero = (localStorage.getItem(name));
    //         // JSON.parse(numero).counter
    //         console.log(JSON.parse(numero).contador)
    //         setSelected(JSON.parse(numero).contador)
    //   }
    //   window.addEventListener("storage", freshLocalStorage, false)
  
    //   return () => {
    //     window.removeEventListener('storage', freshLocalStorage)
    //   }
    // })
    if(selectedBook >0){
        return (
          <div className="cardItems">
              <p>{name} x {selectedBook} x {price}</p>
          </div>
        )
    }
  }
