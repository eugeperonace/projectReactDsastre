import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar/Navbar.js";
import ItemListContainer from "./Components/ItemListContainer";
import logoDsastre from "./assets/logoDsastre.jpg";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from './Components/Cart/Cart.js';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <center>
          <img src={logoDsastre} alt="" className="imgLogo" /> 
        </center> 
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
