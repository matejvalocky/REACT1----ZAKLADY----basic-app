import React, { useState } from 'react';
import "./Counter.css"

const Counter = () => {

    // dekladovanie počiatočného stavu s hodnotou 0
    const [count, setCount] = useState(0);



    // funkcia na zvýšenie počtu o 1
    const zvysenie = () => {
        setCount(count + 1)
    }

    // funkcia na zníženie počtu o 1
    const znizenie = () => {
        setCount(count - 1)
    }

    // funkcia na vynásobenie výsledku číslom 3
    const naTretiu = () => {
        setCount(count ** 3)
    }

        // funkcia na vynásobenie výsledku číslom 2
        const naDruhu = () => {
            setCount(count ** 2)
        }

    // funkcia vynulovania
    const vynuluj = () => {
        setCount(0)
    }

    // ošetrenie záporných hodnôt
    if(count<0){
        setCount(0)
    }






    return (
        <div className='counter'>
            <p>Objednaj: {count} kusov</p>
            <button onClick={zvysenie}>Zvýš o 1</button>
            <button onClick={znizenie}>Zníž o 1</button>
            {/* <button onClick={naTretiu}>Na tretiu</button>
            <button onClick={naDruhu}>Na druhu</button>
            <button onClick={vynuluj}>vynuluj</button> */}
        </div>
    )
}

export default Counter