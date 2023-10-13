import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import Layout from '../Layout/Layout'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../db/db'


const Carrito = () => {

    const { carrito, precioFinal, vaciarCarrito } = useContext(CartContext)
    
    const [pedidoId, setPedidoId] = useState("");

    const comprar = () => {
        const pedido = {
            cliente: {nombre: 'Ariel', telefono:'1155220400', email: 'ari@gmail.com'},
            productos: carrito,
            total: precioFinal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <Layout>
                <div style={{textAlign:'center', margin:'300px'}}>
                    <h1>Muchas gracias por su compra!</h1>
                    <h3 style={{padding:'50px'}}>Tu número de pedido es: {pedidoId}</h3>
                </div>
            </Layout>
        )
    }
    return (
        <div>
            <Layout>
                {
                carrito.map((prod) => (
                    <div className='tarjetaProductos' style={{margin:'auto', marginTop:'50px'}} key={prod.id}>
                        <h2 className='nameProduct'>{prod.nombre}</h2>
                        <img className="itemImg" src={prod.img} alt={prod.nombre} />
                        <h3 className='priceProduct'>Precio: ${prod.precio}</h3>
                        <h4 className='stockProduct'>Cantidad: {prod.cantidad}</h4>
                        <h4 className='stockProduct'>Precio total: ${prod.precio * prod.cantidad}</h4>
                    </div>
                ))
            }
            {   
            carrito.length > 0 ?
            <div style={{marginTop:'20px', display:"flex", alignItems:'center', justifyContent:'center'}}>
                <h2>Precio Final: {precioFinal()}</h2>     
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                <button onClick={comprar}>Finalizar Compra</button>
            </div> :
            <h2 style={{textAlign:"center", margin:'300px'}}>No hay productos en el Carrito</h2>
            }
            </Layout>
        </div>

    )
}

export default Carrito