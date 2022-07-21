import React from "react";
import "./styles.css";
import shopping_cart from "../.././assets/shopping_cart.png";
import { useCartContext } from "../../Context/CartContext";

const CartWidget = () => {
    const { totalProducts } = useCartContext();
    return(
        <>
            <button className="cart-btn">
                <img src={shopping_cart} alt="shopping_cart" className="cart-widget" />
                <span>{totalProducts() || ''}</span>
            </button>
        </>
    );
};

export default CartWidget;