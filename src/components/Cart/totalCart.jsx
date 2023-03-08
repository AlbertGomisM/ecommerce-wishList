import {products} from "../../data/products";
import { DataContext } from "../../context/dataContext";
import React, { useState, useEffect, useContext } from "react";

export const TotalCart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const {selectedBook} = useContext(DataContext);
  const {total, setTotal} = useContext(DataContext)
 
return (
  <div>
    <p>{total.toFixed(2)} €</p>
  </div>)
}
