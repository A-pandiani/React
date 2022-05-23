import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';
import CartContextProv from "./context/cartContext";
import './App.css';
import NavBar from './components/NavBar.jsx';
import './components/NavBar.css'
import './index.js';
import ItemListContainer from './components/ItemListContainer';
import './components/ItemCount.jsx';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from "./components/Cart";

function App() {
  return (
<CartContextProv>

    <BrowserRouter>
    <div className="App">
      
      <NavBar>
     
      </NavBar>
      
      
      
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       <Routes>
          <Route path="/" element={<ItemListContainer greeting="Hola, soy ItemListContainer!"/>} />
          <Route path="/category/:id" element={<ItemListContainer greeting="Hola, soy ItemListContainer!"/>} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/*" element={<Navigate to="/" replace/>} />
        </Routes>
    </div>
    </BrowserRouter>
    </CartContextProv>
  );
}

export default App;


