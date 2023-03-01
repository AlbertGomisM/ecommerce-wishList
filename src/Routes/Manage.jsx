import React from 'react'
import { NavBar } from '../Components/NavBar/NavBar'
import { DataContext } from "./../context/dataContext";
import { useContext, useEffect, useState } from 'react';

export const Manage = () => {

  const {selectedBook} = useContext(DataContext)

  const [contentNavidad, setContentNavidad] = useState([]);

  // useEffect(() => {

  // }, [contentCrhistmas])
  

  return (
    <div>
      <NavBar />
      <h2>My wishes</h2>
      {selectedBook.map((x)=>{
        return(
          <div>
            <p>{x}</p>
            <button onClick={()=>{
              setContentNavidad([...contentNavidad, x])
            }}>Navidad</button>
          </div>
        )
      })}
      <div>
        <h2>Navidad</h2>
        {contentNavidad.map((x)=>{
        return(
          <p>{x}</p>
        )
      })}
      </div>
    </div>
  )
}
