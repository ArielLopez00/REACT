import './itemCount.css'

const ItemCount = ( {handleResta, handleSuma, handleAgregar, cantidad} ) => {

return (
    <div>
        <div className='itemCount'>
            <button onClick={handleResta} className='botonCount'>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSuma} className='botonCount'>+</button>
        </div>
        <button className='botonAgregar' onClick={handleAgregar}>Agregar al carrito</button>
    </div>
)
}

export default ItemCount