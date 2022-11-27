import { useState } from "react"



const ItemCount = ({ initial }) => {


    const [count, setCount] = useState(initial)
    let stock = 10

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


    return (
        <div><h1>{count}</h1>
            <button onClick={() => increment()}>sumar</button><button onClick={() => rest()}>restar</button><button onClick={()=>reset()}>reset</button></div>
    )
}

export default ItemCount
