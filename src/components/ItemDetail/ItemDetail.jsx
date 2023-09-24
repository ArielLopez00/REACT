import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productos } from "../asyncMock";
import Layout from "../../components/Layout/Layout";

const ItemDetail = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const searchProduct = productos.find(
    (prod) => prod.id === parseInt(idProduct)
  );

  useEffect(() => {
    setTimeout(() => {
      console.log(searchProduct);
      setProduct(searchProduct);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <p style={{textAlign:'center'}}>Cargando...</p>
      ) : (
        <div className='tarjetaProductos' style={{margin:'auto', marginTop:'50px'}} >
            <h2 className='nameProduct'>{product.nombre}</h2>
            <img src={product.img} alt={product.nombre} className="itemImg" />
            <h3 className='priceProduct'>${product.precio}</h3>
            <p className='stockProduct'>Stock: {product.stock}</p>
            <p>{product.description}</p>
        </div>
      )}
    </Layout>
  );
};

export default ItemDetail;