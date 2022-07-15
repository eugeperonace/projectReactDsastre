import React from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  console.log(product)
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