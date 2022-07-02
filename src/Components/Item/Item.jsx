import React from 'react';
import "./styles.css";

const Item = ({product}) => {
  console.log(product)
  const {img, name, description}= product

  return (
    <div className="card">
      <img src={img}className="card-img-top" alt={name}/>
      <div className="card-body">
          <p className="card-title">{name}</p>
          <p className="card-text">{description}</p>
      </div>
      <button className='btn-card'>Ver más</button>
    </div>
  )
}

export default Item