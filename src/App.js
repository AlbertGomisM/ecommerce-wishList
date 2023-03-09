import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./routes/Home"
import { Shoppingcart } from './routes/Shoppingcart';
import { Products } from './routes/Products';
import { Login } from './routes/Login';
import { DataContextProvider } from './context/dataContext';
import { UserContext } from './context/userContext';
import {UserContextProvider} from "./context/userContext"
import {SignInRoute} from "./routes/SignInRoute"


function App () {
  return (
    <div className="App">
      <UserContextProvider>
      <DataContextProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/*" element={<div>404-Not Found</div>}>Error</Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/shoppingCart' element={<Shoppingcart/>}></Route>
            <Route path='/signIn' element={<SignInRoute/>}></Route>

        </Routes>
    </BrowserRouter>
    </DataContextProvider>

      </UserContextProvider>

    </div>
  );
}


export default App;
