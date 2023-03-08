import "./productItem.css";
import {products} from "../../data/products";
import { ProductItem } from './ProductItem';
import "./productsList.css";
import React, { useState, useContext } from "react";
import { DataContext } from "../../context/dataContext";


export const ProductsList = () => {
  
  return (
    <div className="generalProductList">
      <h2>Books of the week!</h2>
      <div className="divItems">
          {products.map((x)=>{ 
        return(
            <ProductItem key={x.id} item={x}/>
          )
        })}
      </div>

    </div>
  )
}
