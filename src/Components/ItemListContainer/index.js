import React from "react";
import "./styles.css";
import ItemCount from "../ItemCount/itemCount";

const ItemListContainer = ({greeting}) => {

    const onAdd = (quantity) =>{
        console.log(`¡Compraste ${quantity} unidades!`);
    }

    return(
        <>
        <div className="landing">
            <span>{greeting}</span>
        </div>
            <ItemCount initial={1} stock={12} onAdd={onAdd}/>
        </>    
    );
        
};

export default ItemListContainer;