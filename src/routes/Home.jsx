import './App2.css';
import { NavBar, ProductsList, RecomBooks, Cart, Footer} from '../components';
import { ImgPrincipal } from '../components/ImgPrincipal/ImgPrincipal';
import { DataContextProvider } from '../context/dataContext';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

function Home() {

  const {loginState, setLoginState, userName, setUserName} = useContext(UserContext)

  return (
    <>
      <NavBar />
      {userName ? <p>Welcome {userName}</p>: null}
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