import React, { useState, useEffect } from "react";
import { getItem } from "../../mocks/fakeApi";
import ItemDetail from "../ItemDetail/ItemDetail.js"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ()=> {
    
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);

    const {id} = useParams();
    console.log(id);

    useEffect(()=>{
        setLoading(true);
        getItem(id)
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            }); 
    }, [id]);

    //console.log(product);

    return(
        <div>
            {loading ? (<h2>Cargando...</h2>) : (< ItemDetail product={product} />)}
        </div>
    );
};

export default ItemDetailContainer;