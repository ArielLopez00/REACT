import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { NewtonsCradle } from "@uiball/loaders";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../db/db";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { idCategory } = useParams()

    useEffect(() => {

        const productsRef = collection(db, 'productos');
        const q = idCategory ? query(productsRef, where("category", "==", idCategory)) : productsRef;

        getDocs(q)
        .then((resp) => {
            setTimeout(() =>{

                setProducts(
                    resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                    })
                )
                setIsLoading(false)
                }, 2000)
            })
    }, [idCategory]);

    return (
    <Layout>
        <h1 style={{textAlign:'center', marginTop:'30px'}}>Bienvenidos a NBA STORE!</h1>
        {isLoading &&<div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'250px'}}>
                <NewtonsCradle
                size={80}
                speed={1.7}/>
            </div>}
        {!isLoading && <ItemList products={products}/>}
    </Layout>
);
}

export default ItemListContainer;
