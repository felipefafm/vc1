import { useState, useEffect } from "react"
import ProductosList from "../ProductosList/ProductosList"
import { getProductos } from "../../asynMock"


const ProductosContainer = () => {
    const [productos, setProductos] = useState([])



    useEffect(() => {
        getProductos().then(response => {
            setProductos(response)
        }).catch(error => { console.log(error) })
    }, [])
    // const arrayTransformado = productos.map(productos => <h2>{productos.nombre}</h2>)

    return (
        <div>
            <h1>Productos</h1>
            <ProductosList productos={productos}/>
        </div>
    )
}
export default ProductosContainer