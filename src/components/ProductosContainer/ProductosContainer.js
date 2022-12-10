import { useState, useEffect } from "react"
import ProductosList from "../ProductosList/ProductosList"
import { getProductos } from "../../asynMock"
import ItemCount from "./ItemCount/ItemCount"


const ProductosContainer = () => {
    const [productos, setProductos] = useState([])



    useEffect(() => {
        getProductos().then(response => {
            setProductos(response)
        }).catch(error => { console.log(error) })
    }, [])
    // const arrayTransformado = productos.map(productos => <h2>{productos.nombre}</h2>)
    const handleOnAdd = (quantity) => {
        console.log('se agrego al carrito' + quantity)
    }
    return (
        <div>
            <h1>Productos</h1>
            <ProductosList productos={productos}/>
            <div><h1>Contador</h1><ItemCount initial={0} stock={10} onAdd={handleOnAdd} /></div>
        </div>
    )
}
export default ProductosContainer