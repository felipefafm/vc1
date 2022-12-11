import { useState } from "react"



const ItemCount = ({ initial,stock, onAdd }) => {


    const [count, setCount] = useState(initial)
   

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }


    }
    // restar
    const rest = () => {
        if (count > 0) {
            setCount(count - 1)
        }

    }
    const reset=()=>{
        setCount(0)
    }
    // const agregarCarrito=()=>{

    // }


    return (
        <div><h1>{count}</h1>
            <button onClick={() => increment()}>+</button><button onClick={() => rest()}>-</button><button onClick={()=>reset()}>Reset</button><button onClick={()=>onAdd(count)}>Agregar al Carrito</button></div>
    )
}

export default ItemCount
