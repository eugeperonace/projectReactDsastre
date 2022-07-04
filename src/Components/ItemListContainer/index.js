import React, { useEffect, useState } from 'react'
import "./styles.css";
import ItemList from '../ItemList/ItemList'
import { getData } from '../../mocks/fakeApi'

const ItemListContainer = ({greeting}) => {

    const [productList, setProductList]=useState([])
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        getData
        .then((result)=> setProductList(result))
        .catch((error)=> console.log(error))
        .finally(()=>setLoading(false) )
        },[])

    return(
        <>
        <div className="landing">
            <span>{greeting}</span>
        </div>
        <div>
            {loading ? <p>Cargando productos...</p> : <ItemList productList={productList}/> }
        </div>
        </>    
    );
        
};

export default ItemListContainer;