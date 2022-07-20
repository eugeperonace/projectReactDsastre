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
//console.log(product)
    return(
        <div className="detail">
            <div className="card">
                <img src={img} alt={name} className="card-img-top" /> 
                <div className="card-body">
                    <p className="card-title">{name}</p>
                    <p className="card-price">{price}</p>
                    <div className="card-text"> Talle
                        <select>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                        </select>    
                        <p>{description}</p>
                    </div>
                    {
                        goToCart
                            ? <Link to="/cart" className="checkOut">Finalizar compra</Link>
                            : <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;