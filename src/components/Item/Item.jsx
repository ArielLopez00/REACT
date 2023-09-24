import './item.css'
import { Link } from "react-router-dom";

const Item = ({id, nombre, img, precio, stock}) =>{
    return(
        <div className="cardItem">
            <div className='tarjetaProductos'>
                <h2 className='nameProduct'>{nombre}</h2>
                <img src={img} alt={nombre} className="itemImg"/>
                <h3 className='priceProduct'>Precio: ${precio}</h3>
                <p className='stockProduct'>Stock: {stock}</p>
                <Link to={`/item/${id}`}><button>Ver detalle</button></Link>
            </div>
        </div>
    )
}

export default Item