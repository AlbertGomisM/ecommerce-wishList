import "./productsList.css";
import React, { useState, useContext } from "react";
import { DataContext } from "../../context/dataContext.jsx";



export const ProductItem = ({item}) => {
  const {name, autor, url, price} = item
  const {selectedBook, setSelectedBook} = useContext(DataContext);
  const {total, setTotal} = useContext(DataContext)

  const handleAdd = ()=>{
    setSelectedBook([...selectedBook, item])
    setTotal(total+item.price)
  }

  return (
    <div className="productCard">
            <h2 className="itemName">{name}</h2>
            <img className="imageBook" src={url} alt="hola" />
            <p>{autor}</p>
            <p>{price} €</p>
            <button onClick={()=>handleAdd()}>Add Product</button>
    </div>
  )
}
