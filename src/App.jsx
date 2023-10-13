import './App.css'
import Navigation from './routes/Navigation'
import { CartProvider } from './context/CartContext';
// import Navbar from './components/Navbar/Navbar'
// import ItemListContainer from './components/ItemListContainer/ItemListContainer'

//Componente es una funcion q tambien su nombre debe iniciar con MAYUS
//solo podemos RETURN etiqueta HTML
//el nombre de la Function debe coincidir con el archivo .jsx


const App = () => {
  return (
    <div>
      <CartProvider>
        <Navigation />
      </CartProvider>
    </div>
      
  )
};


export default App
