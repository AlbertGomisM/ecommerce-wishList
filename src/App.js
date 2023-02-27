import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./routes/Home"
import { Shoppingcart } from './routes/Shoppingcart';
import { Products } from './routes/Products';
import { Contact } from './routes/Contact';
import { DataContextProvider } from './context/dataContext';


function App () {
  return (
    <div className="App">
      <DataContextProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/*" element={<div>404-Not Found</div>}>Error</Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/shoppingCart' element={<Shoppingcart/>}></Route>

        </Routes>
    </BrowserRouter>
    </DataContextProvider>

    </div>
  );
}


export default App;
