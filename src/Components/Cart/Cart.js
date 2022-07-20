import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import ItemCart from '../ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    console.log(cart);

    if (cart.length === 0) {
        return (
            <center>
                <p>No hay ningún elemento seleccionado.</p>
                <Link to="/">¡Volver a comprar!</Link>
            </center>
        );
    }
    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>
                Total: {totalPrice()};
            </p>
        
        </>
    ) 
};

export default Cart;