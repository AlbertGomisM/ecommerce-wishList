import "./productItem.css";

import {products} from "../../data/products";

import { ProductItem } from './ProductItem';
import "./productsList.css";
import React, { useState, useContext } from "react";
import { DataContext } from "../../context/dataContext";


export const ProductsList = ({counter, setCounter}) => {
  const {contextData, setContextData} = useContext(DataContext);
  products.map((x)=>{
    console.log(contextData[x].price)
  })
  return (
    <div className="generalProductList">
      <h2>Books of the week!</h2>
      <p>{contextData.name} div</p>
      <button onClick={()=>setContextData(contextData + 1)}>+1</button>
      <div className="divItems">
          {products.map((x)=>{ 
        return(
            <ProductItem item={x}/>
          )
        })}
      </div>

    </div>
  )
}
