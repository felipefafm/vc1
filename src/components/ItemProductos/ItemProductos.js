//diseño de la card margin
import './ItemProductos.css'
const ItemProductos = ({ productos }) => {
    return (
        <div >
            <h2 >{productos.nombre}</h2>
            <h3>Detalle</h3>
            <p>{productos.descripcion}</p>
            <h3>Stock</h3>
            <p>{productos.stock}</p>
            <p>{productos.imagen}</p>

        </div>
    )
}
export default ItemProductos