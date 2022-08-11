import React, {useState} from 'react'
import { db } from '../../firebase/firebase'
import { collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { useCartContext } from '../../Context/CartContext';
import "./styles.css";

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [ordenId, setOrdenId] = useState('')
    const { cart, totalPrice, ClearCart } = useCartContext()

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, {
            buyer,
            items: cart.map(prod => ({ nombre: prod.name, precio: prod.price, id: prod.id})),
            total: totalPrice(),
            fecha: serverTimestamp(),
            
        })
            .then((res) => {
                setOrdenId(res.id)
                ClearCart()
            })
            .catch((error) => console.log(error))
           
    }

    return (
        <center>
            <h2 className='title'>Complete el siguiente formulario para finalizar su compra:</h2>
                <form>
                  <div>
                    <label className="titleForm" >Nombre</label>
                    <input type="text" placeholder="Nombre" name="nombre" onChange={buyerData} required/>
                  </div>
                  <div >
                    <label className="titleForm" >Email</label>
                    <input type="email" placeholder="Dirección" name="email" onChange={buyerData} required/>
                  </div>
                  <div >
                    <label className="titleForm">Teléfono</label>
                    <input type="text" placeholder="Teléfono" name="telefono" onChange={buyerData} required/>
                  </div>
                </form>
                
                <button onClick={finalizarCompra}>Finalizar Compra</button>
            
                  <div>
                    <h2>¡Su compra ha sido efectuada con éxito!</h2>
                    <p>Número de orden: {ordenId}</p>
                </div> 
        </center>
    )
}

export default Checkout