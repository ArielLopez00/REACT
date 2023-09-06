import './cartWidget.css'
import carrito from '../../assets/shopcart2.svg'


const CartWidget = () => {
    const itemCount = 0;
    return (
        <div>
            <button>
                <img src={carrito} alt="carrito" className='carrito'/>
            </button>
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartWidget