import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Current count: {count}</p>
            <button className='p-3 bg-blue-400 rounded-lg cursor-pointer' onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Counter;