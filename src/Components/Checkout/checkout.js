import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext';
import { db } from '../../firebase/firebase'

const Checkout = () => {
    const [comprador, setComprador] = useState({})
    const [ordenId, setOrdenId] = useState('')
    const { products, calcularTotal, clear } = useCartContext()
    const navegar = useNavigate()

    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
            
        })

    }

    const finalizarCompra = (e) => {
        e.preventDefault()

        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, {
            comprador,
            items: products.map(prod => ({ nombre: prod.name, precio: prod.price, id: prod.id })),
            total: calcularTotal(),
            fecha: serverTimestamp(),
            
        })
            .then((res) => {
                setOrdenId(res.id)
                clear()
            })
            .catch((error) => console.log(error))
           
    }
    return (
        <div>
            {!ordenId
                ? <> <h2 className='h2Checkout'>Complete el formulario para terminar su compra</h2>
                    <form className="divCheckout" onSubmit={finalizarCompra}>
                        <input className='inputCheckout' type="text" placeholder="Nombre" name="nombre" onChange={datosComprador} required/>
                        <input className='inputCheckout' type="text" placeholder="Direccion" name='direccion' onChange={datosComprador} required/>
                        <input className='inputCheckout' type="text" placeholder="Telefono" name='telefono' onChange={datosComprador} required />
                        <input className='inputCheckout' type="email" placeholder="Email" name='email' onChange={datosComprador} required/>
                        <button type='submit' className="buttonCarrito" >Finalizar Compra </button>
                    </form>
                </>
 
                : <div className='divCheckout1'>
                    <h2>Muchas gracias por su compra</h2>
                    <p>Su orden es: {ordenId}</p>
                    <button className="buttonCarrito" onClick={() => navegar('/')}>Volver</button>
                </div>
            }
        </div>

    )
}

export default Checkout