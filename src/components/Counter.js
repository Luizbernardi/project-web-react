import React, { useState, useRef } from 'react';

const CountComponent = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    const increment = () => {
        setCount(count + 1);
}
    const startIncrementing = () => {
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 50);

};

const stopIncrementing = () => {
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
    </div>
    );
}

export default CountComponent;