import React, { useState, useRef } from 'react';

const CountComponent = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    const increment = () => {
        setCount(count + 1);
        const decrement = () => {
            setCount(count - 1);
        };
}
    const startIncrementing = () => {
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 5);

};

const stopIncrementing = () => {
    if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    }
};

const startDecremating = () => {
    intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
    }, 5);
};

const stopDecremating = () => {
    if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    }

};

return  (
    <div>
        <h2>Contador: {count}</h2>
        <button onClick={increment}>Incrementar</button>
        <button onMouseDown={startIncrementing} 
                onMouseUp={stopIncrementing}>Segure para incrementar</button>
        <button onMouseDown={startDecremating} 
                onMouseUp={stopDecremating}>Segure para Reduzir</button>
    </div>
    );
}

export default CountComponent;