import ProductosContainer from './components/ProductosContainer/ProductosContainer';
import './App.css';
import CollapsNav from './components/Navbar/Navbar';
import ItemSaludoContainer from './components/ItemSaludoContainer/ItemSaludoContainer';
import{BrowserRouter,Routes,Route}from "react-router-dom";
import ItemProductos from './components/ItemProductos/ItemProductos';





function App() {

  return (
    <div className="App">
      <CollapsNav />
      <ItemSaludoContainer greeting='VC Welcome' />
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<ProductosContainer />} />
      <Route path='/category' />
      <Route path='/detail' element={<ItemProductos />} />
      </Routes>

      <ProductosContainer />
      </BrowserRouter>

    </div>

  );
}

export default App;

