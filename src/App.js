import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import {First, Manage} from "./Routes"
import { DataContextProvider } from './context/dataContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/*" element={<div>404-Not Found</div>}>Error</Route>
            <Route path='/' element={<First />}></Route>
            <Route path='/manage' element={<Manage/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
