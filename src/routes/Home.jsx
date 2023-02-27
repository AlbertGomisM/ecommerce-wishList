import './App2.css';
import { NavBar, ProductsList, RecomBooks, Cart, Footer} from '../components';
import { ImgPrincipal } from '../components/ImgPrincipal/ImgPrincipal';
import { DataContextProvider } from '../context/dataContext';
import { useContext } from 'react';

function Home() {
  return (
    <>
      <NavBar />
      <ImgPrincipal />
      <div className='divIntermedio'>
        <RecomBooks />
        <Cart />
      </div>
      <ProductsList className="productList"/>
      <Footer />

    </>
  );
}

export default Home;