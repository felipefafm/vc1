// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
// import Navbar from './components/Navbar/Navbar';
import CollapsNav from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


const handleOnAdd = (quantity) => {
  console.log('se agrego al carrito' + quantity)
}

const productos = [{
  id: '1',
  nombre: 'producto1',
  descripcion: 'LEt cillum elit aliqua commodo tempor enim eiusmod.o',
  stock: '10',
  // imagen:  URL('https://www.cristobalcolon.com/fullaccess/item24232color45725.jpg')
   
}]
const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos)
    }, 3000)
  })
}

function App() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductos().then(response => {
      setProductos(response)
    }).catch(error => { console.log(error) })
  }, [])

  // const arrayTransformado = productos.map(productos => <h2>{productos.nombre}</h2>)
 
  getProductos().then(response => {
    console.log(response)
  })


  return (
    <div className="App">
      <CollapsNav />
      <ItemListContainer greeting='VC Welcome' />
      <div><h1>Contador</h1><ItemCount initial={0} stock={10} onAdd={handleOnAdd} /></div>
      
      <div>
        <h1>Productos</h1>
      {productos.map(productos => (
        <div key={productos.id}>
          <h2 >{productos.nombre}</h2>
          <p>{productos.descripcion}</p>
          <p>{productos.stock}</p>
          
        </div>
      ))}
      </div>
      
    </div>

  );
}

export default App;

