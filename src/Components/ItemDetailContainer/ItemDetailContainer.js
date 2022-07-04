import React, { useState, useEffect } from "react";
import { getItem } from "../../mocks/fakeApi";
import ItemDetail from "../ItemDetail/ItemDetail.js"

const ItemDetailContainer = ()=> {
    
    const [product, setProduct] = useState({})

    useEffect(()=>{
        getItem
        .then((res)=> setProduct(res))
        .catch((error)=> console.log(error))
    },[])

    return(
        <ItemDetail product={product}/>
    );
};

export default ItemDetailContainer;