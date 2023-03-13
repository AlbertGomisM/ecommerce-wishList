import { NavBar, ProductsList, RecomBooks, Cart, Footer} from '../components';


export const Shoppingcart = () => {
  return (
    <div>
        <NavBar />
        <div className='divShoppingCart'>
          <Cart className="cart"/>
        </div>
    </div>
  )
}
