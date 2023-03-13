import { NavBar, ProductsList, RecomBooks, Cart, Footer} from '../components';

import React from 'react'
import { Search } from '../components/Search/Search';

export const Products = () => {

  const handleGoDiscounts = (e) =>{
    
  }

  return (
    <div>
        <NavBar />
        <Search />
        {/* <div>
          <button onClick={handleGoDiscounts}></button>
        </div> */}
    </div>
  )
}
