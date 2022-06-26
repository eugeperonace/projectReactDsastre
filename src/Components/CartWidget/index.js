import React from "react";
import "./styles.css";
import shopping_cart from "../.././assets/shopping_cart.png";

const CartWidget = () =>{
    return(
        <div>
            <button className="cart-btn">
                <img src={shopping_cart} alt="shopping_cart" className="cart-widget" />
            </button>
        </div>
    );
};

export default CartWidget;