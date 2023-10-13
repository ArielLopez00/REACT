import './cartWidget.css'
import carrito from '../../assets/shopcart2.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext)
    return (
        <div>
            <Link to={'/Carrito'}>
                <button className='buttonCart'>
                    <img src={carrito} alt="carrito" className='carrito'/>
                </button>
            </Link>
            <span className="item-count">{cantidadEnCarrito()}</span>
        </div>
    );
};

export default CartWidget