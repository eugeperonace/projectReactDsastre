import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/index.js";
import ItemListContainer from "./Components/ItemListContainer";
import logoDsastre from "./assets/logoDsastre.jpg";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="BIENVENIDOS"/>
      <center>
       <img src={logoDsastre} alt="" className="imgLogo" /> 
      </center>
    </>
  );
}

export default App;
