import React from "react"
import ItemCount from "../ItemCount/itemCount";
import "./styles.css";
import {Link} from 'react-router-dom';

const ItemDetail = ({product}) =>{
    
   const {img, name, price, description}= product;
    
    const onAdd = (quantity) =>{
        console.log(`¡Compraste ${quantity} unidades!`);
    }
console.log(product)
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
                    <button>
                        <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                    </button>
                    <Link to="/cart">
                        <button>Finalizar compra</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;