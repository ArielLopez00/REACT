import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


//Componente es una funcion q tambien su nombre debe iniciar con MAYUS
//solo podemos RETURN etiqueta HTML
//el nombre de la Function debe coincidir con el archivo .jsx


const App = () => (
  <body>
    <header>
      <Navbar />
    </header>
    <main>
      <ItemListContainer greeting="Bienvenidos a NBA Store!!" />
    </main>
  </body>
);


export default App
