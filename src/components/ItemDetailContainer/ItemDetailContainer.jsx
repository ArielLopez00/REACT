import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../db/db";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {

    const docRef = doc(db, 'productos', idProduct)
    getDoc(docRef).then((response )=>{
       if(response.exists()){
        const product = {id: response.id, ...response.data()}
        setProduct(product)
       } else {
        
       }
    })
  }, [idProduct])
  
  return (
      <ItemDetail product={product}/>
  );
};

export default ItemDetailContainer;