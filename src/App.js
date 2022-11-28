// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar/Navbar';
import CollapsNav from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


const handleOnAdd = (quantity)=>{
  console.log('se agrego al carrito'+quantity)
}

function App() {
  return (
    <div className="App">
      <CollapsNav />
      <ItemListContainer greeting='VC Welcome' />
      <div><h1>Contador</h1><ItemCount initial={0} stock={10} onAdd={handleOnAdd}/></div>
    </div>
  );
}

export default App;

