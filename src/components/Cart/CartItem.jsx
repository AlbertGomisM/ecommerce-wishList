import React, { useState, useEffect } from "react";
import {products} from "../../data/products";
import { useContext } from 'react';
import { DataContext } from "../../context/dataContext";

export const CartItem = ({book}) => {
  const {selectedBook, setSelectedBook} = useContext(DataContext);
  const {total, setTotal} = useContext(DataContext)

  const handleDelete = ()=>{
    const filtered = selectedBook.filter(element => element.id !== book.id)
    setSelectedBook(filtered)
    setTotal(total-book.price)
  }

  // setTotal(total+book.price)

    return (
      <div className="cardItems">
            {
              <p>{book.name} - {book.price} €</p>
            }
            <button onClick={handleDelete}>Delete</button>
      </div>
        )
    // }
  }
