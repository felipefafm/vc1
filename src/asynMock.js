const productos = [{
    id: '1',
    nombre: 'Gorra ',
    descripcion: 'LEt cillum elit aliqua commodo tempor enim eiusmod.o',
    stock: '10',
    imagen: <img src={'./images/gorra1.jpg'} alt='cart-widget' />
},{
    id: '2',
    nombre: 'Gorra ',
    descripcion: 'LEt cillum elit aliqua commodo tempor enim eiusmod.o',
    stock: '10',
    imagen: <img src={'./images/gorra2.jpg'} alt='cart-widget' />
} ]
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 4000)
    })
}

// getProductos().then(response => {
//   console.log(response)
// })

export const getProductosById=()=>{}