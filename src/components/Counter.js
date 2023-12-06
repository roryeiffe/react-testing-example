import { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);   
    }

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button id = 'increment' onClick={increment}>Increment</button>
            <button id = 'decrement' onClick={decrement}>Decrement</button>
            
        </div>

        
    );
}