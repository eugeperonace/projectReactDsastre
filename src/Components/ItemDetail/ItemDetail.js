import React, {useState} from "react"
import ItemCount from "../ItemCount/itemCount";
import "./styles.css";
import {Link} from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext";

const ItemDetail = ({product}) =>{
    const [goToCart, setGoToCart] = useState(false);
    
    const {img, name, price, description}= product;

    const {addProduct} = useCartContext();
    
    const onAdd = (quantity) =>{
        setGoToCart(true);
        addProduct(product, quantity);
    }

    return(
        <center>
            <div className="detail">
                <div className="card">
                    <img src={img} alt={name} className="card-img-top" /> 
                    <div className="card-body">
                        <p className="card-title">{name}</p>
                        <p className="card-price">$ {price}</p>
                        <p>{description}</p>
                        <div className="display">
                        {
                            goToCart
                                ? <Link to="/" className="checkOut">Seguir Comprando</Link>
                                : <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                        }   
                        </div>
                        <center className="goToCart">
                            <Link to='/cart' className="checkOut">Ir al carrito</Link>
                        </center>
                            
                        
                        
                    </div>
                </div>
            </div>
        </center>
    );
};

export default ItemDetail;