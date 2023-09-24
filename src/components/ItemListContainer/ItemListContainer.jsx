import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { productos } from "../../components/asyncMock";
import ItemList from "../ItemList/ItemList";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams()
    const getItems = async () => {
        return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
};
    useEffect(() => {
        getItems()
            .then((res) => {
                if(idCategory){
                    setProducts(res.filter((prod) => prod.category === idCategory))
                } else {
                    setProducts(res)
                }
            })    
    }, [idCategory]);

    return (
    <Layout>
        <h1 style={{textAlign:'center'}}>Bienvenidos a NBA STORE!</h1>
        <ItemList products={products}/>
    </Layout>
);
}

export default ItemListContainer;
