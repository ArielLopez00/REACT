import { createContext } from "react";
import { useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([])
    const agregarAlCarrito = (product, cantidad) => {
        const productAgregado = {...product, cantidad}
        
        const nuevoCarrito = [...carrito]
        const estaEnCarrito = nuevoCarrito.find((producto) => producto.id === productAgregado.id)
    
        if (estaEnCarrito) {
          estaEnCarrito.cantidad += cantidad
        } else {
          nuevoCarrito.push(productAgregado)
        }
        setCarrito(nuevoCarrito)
      }
      const cantidadEnCarrito = () => {
        return carrito.reduce ((acc, prod) => acc + prod.cantidad, 0)
      }
    
      const precioFinal = () =>{
        return carrito.reduce ((acc, prod) => acc + prod.precio * prod.cantidad, 0)
      }
    
      const vaciarCarrito = () => {
        setCarrito([])
      }
      return (
        <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito, precioFinal, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
      )
}

