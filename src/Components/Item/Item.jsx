import React, {useContext} from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const Item = ({product}) => {
  const carrito = useContext(CartContext);
  console.log("carritooooooooo",carrito);

  const {img, name, price}= product

  return (
    <>
      <div className="card">
        <img src={img} className="card-img-top" alt={name}/>
        <div className="card-body">
            <p className="card-title">{name}</p>
            <p className="card-title">{price}</p>
        </div>
        <button >
        <Link to={`/detail/${product.id}`} className='btn-card'>
          Ver más
        </Link>  
        </button>
      </div>
    </>
  )
}

export default Item