import React from "react";
import "./App.css";
import NavBar from "./Components/NavBAr/index.js";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a DSASTRE"/>
    </>
  );
}

export default App;
