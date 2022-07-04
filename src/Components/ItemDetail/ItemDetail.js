import React from "react"
import ItemCount from "../ItemCount/itemCount";
import "./styles.css";

const ItemDetail = ({product}) =>{
    
    const {img, name, price, description}= product;
    
    const onAdd = (quantity) =>{
        console.log(`¡Compraste ${quantity} unidades!`);
    }

    return(
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
                    <ItemCount initial={1} stock={14} onAdd={onAdd}/>
                </button>
            </div>
        </div>
    );
};

export default ItemDetail;