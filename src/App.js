// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar/Navbar';
import CollapsNav from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
function App() {
  return (
    <div className="App">
      <CollapsNav />
      <ItemListContainer greeting='VC Welcome' />
      <div><h1>Contador</h1><ItemCount initial={0} /></div>
    </div>
  );
}

export default App;

