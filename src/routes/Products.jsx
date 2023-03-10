import { NavBar, ProductsList, RecomBooks, Cart, Footer} from '../components';

import React from 'react'

export const Products = () => {

  const handleGoDiscounts = (e) =>{
    
  }

  return (
    <div>
        <NavBar />
        <div>
          <button onClick={handleGoDiscounts}></button>
        </div>
    </div>
  )
}
