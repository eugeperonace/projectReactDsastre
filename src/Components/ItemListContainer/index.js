import React, { useEffect, useState } from 'react'
import "./styles.css";
import ItemList from '../ItemList/ItemList'
import { getData } from '../../mocks/fakeApi'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

    const [productList, setProductList]=useState([])
    const [loading, setLoading]=useState(true)

    const {categoryId} = useParams();
    useEffect(()=>{
        getData(categoryId)
            .then((res) => {
                setProductList(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            }); 
        }, [categoryId]);

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