import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js"
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore"

const ItemDetailContainer = ()=> {
    
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(()=>{
        const productsCollection = collection(db, 'products');
        const refDoc = doc(productsCollection,id)
        getDoc(refDoc)
        .then(result => {
            setProduct({
                id: result.id,
                ...result.data(),
            })
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        }); 
    }, [id]);


    return(
        <div>
            {loading ? (<h2>Cargando...</h2>) : (< ItemDetail product={product} />)}
        </div>
    );
};

export default ItemDetailContainer;