import React from 'react';
import { useState } from 'react';
import Countº from './Count';

const ItemCount = () => {
    
    const [count, setCount] = useState(0);
    const [finalCount, setFinalCount] = useState(0)

    const handleSumar = (e) => setCount(count + 1)
    const handleRestar = (e) => {
        if(count !== 0) {
            setCount(count - 1)
        }
    }

    const actualizarCount = (e) => {
        setFinalCount(finalCount + count)
    }

  return (
    <div>
        <button onClick={handleSumar}>+</button>
        <p>{count}</p>
        <button onClick={handleRestar}>-</button>
        <button onClick={actualizarCount}>Agregar</button>
    </div>
  )
}

export default ItemCount