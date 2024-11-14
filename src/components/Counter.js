import React, { useState } from 'react';

const CountComponent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
}

return  (
    <div>
        <h2>Contador: {count}</h2>
        <button onClick={increment}>Incrementar</button>
    </div>
    );
}

export default CountComponent;