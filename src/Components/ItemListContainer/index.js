import React from "react";
import "./styles.css";

const ItemListContainer = ({greeting}) => {
    return(
        <div className="landing">
            <span>{greeting}</span>
        </div>
    );
};

export default ItemListContainer;