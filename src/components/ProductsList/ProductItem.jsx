import "./productsList.css";
import React, { useState, useContext } from "react";
import { DataContext } from "../../context/dataContext";



export const ProductItem = ({item}) => {
  const {name, autor, url, price} = item
  const {contextData} = useContext(DataContext);
  // const [counter, setCounter] = useState(0)
  // const increment = ()=> {
  //   setCounter(counter + 1)
  // }

  // const decrement = ()=> {
  //   if(counter > 0){setCounter(counter - 1)}
  // }
  // const objStorage = {"contador": counter, "price":price}
  // useEffect(() => {
  //   localStorage.setItem(name, JSON.stringify(objStorage));
  //   window.dispatchEvent(new Event("storage"));
  // })
  const[buyBooks, setBuyBooks] = useState(
    {book:{
      "quantity":null,
      "price": null
    }}
  )

  return (
    <div className="productCard">
            <h2 className="itemName">{name}</h2>
            <img className="imageBook" src={url} alt="hola" />
            <p>{autor}</p>
            <p>{price} €</p>
            <div className="divCounter">
              {/* <button onClick={decrement}>-</button>
              <p>{counter}</p>
              <button onClick={increment}>+</button> */}
              <button>-</button>
              <p>{contextData}</p>
              <button>+</button>
            </div>
          </div>
  )
}
