import { useContext, useState } from "react";
import Layout from "../../components/Layout/Layout";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ( {product} ) => {

  const {carrito, agregarAlCarrito} = useContext(CartContext)
  console.log(carrito)

  const [cantidad, setCantidad] = useState(1);

  const handleResta = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSuma = () => {
      cantidad < product.stock && setCantidad(cantidad + 1)
  }

  return (
    <Layout>
        <div className='tarjetaProductos' style={{margin:'auto', marginTop:'50px'}} >
            <h2 className='nameProduct'>{product.nombre}</h2>
            <img src={product.img} alt={product.nombre} className="itemImg" />
            <h3 className='priceProduct'>${product.precio}</h3>
            <p className='stockProduct'>Stock: {product.stock}</p>
            <p>{product.description}</p>
            <ItemCount 
            cantidad={cantidad}
            handleResta={handleResta}
            handleSuma={handleSuma}
            handleAgregar={() => {agregarAlCarrito(product, cantidad)}}/>
        </div>
    </Layout>
  );
};

export default ItemDetail;