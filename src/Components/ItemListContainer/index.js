import React, { useEffect, useState } from 'react'
import "./styles.css";
import ItemList from '../ItemList/ItemList'
//import { getData } from '../../mocks/fakeApi'
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {

    const [productList, setProductList]=useState([])
    const [loading, setLoading]=useState(true)

    const {categoryId} = useParams();

    useEffect(()=>{
        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where('category', '==', "sacos")); 
        getDocs(q)
        .then(result => {
            const lista = result.docs.map(product => {
                return {
                    id: product.id,
                    ...product.data(),
                }
            })
            setProductList(lista);
            console.log(lista);
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