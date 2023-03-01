import React from 'react'
import "./initialDiv.css"
import { useState, useContext } from 'react'
import { DataContext } from "../../context/dataContext";

export const InitialDiv = () => {

  const {selectedBook, setSelectedBook} = useContext(DataContext)

  // const [selectedBook, setSelectedBook] = useState("")

  // const handleSelectedBook = (e) => {
  //     e.preventDefault()
  //     setSelectedBook("hola")
  //     console.log(selectedBook)
  // }
  console.log(selectedBook)
  return (
    <div className='divInicial'>
        <form onSubmit={(e)=>{
          e.preventDefault()
          setSelectedBook( [...selectedBook, e.target.book.value])
        }}>
            <p>Select your product</p>
            <div className='imagesDiv'>
                <input type="radio" name='book' value='Sobre la Violencia' /><img src="https://www.abacus.coop/dw/image/v2/BDLM_PRD/on/demandware.static/-/Sites-AbacusMaster/default/dw650064d4/images/large/1232278.46.jpg?sw=740"></img>
                <input type="radio" name='book' value='El Adversario'/><img src='https://imagessl1.casadellibro.com/a/l/t7/51/9788433977151.jpg'></img>
                <input type="radio" name='book' value='Chavs'/><img src='https://imagessl0.casadellibro.com/a/l/t7/70/9788494027970.jpg'></img>
                <input type="radio" name='book' value='Ensayo sobre la lucidez'/><img src='https://pictures.abebooks.com/inventory/31426944258.jpg'></img>
            </div>
            {/* <p className='p'>Cuando quieres comprar tu libro?</p>
            <div className='buttonsDiv'>
              <input type="radio" name='btnWhen' value="navidad" /><p>Navidad</p>
              <input type="radio" name='btnWhen'value="jordi"/><p>Sant Jordi</p>
              <input type="radio" name='btnWhen' value="friday"/><p>Black Friday</p>
              <input type="radio" name='btnWhen' value="fecha"/><p>Otra fecha</p>
            </div> */}
            {/* <div className='divComents'>
              <input type="text" />
            </div> */}
            <div className='divSubmit'>
              <button>Reset</button>
              <button type='submit'>Guardar como deseo</button>
            </div>
        </form>
    </div>
  )
}
