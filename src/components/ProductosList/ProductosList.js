//listado 
import ItemProductos from "../ItemProductos/ItemProductos"
const ProductosList = ({ productos }) => {
    return (
        <div>
            {productos.map(productos => (
                <ItemProductos key={productos.id} productos={productos} />
            ))}
        </div>
    )

}

export default ProductosList