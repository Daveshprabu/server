import React, { useState } from 'react';
import "./css/Cont.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p className='cou'>Count: {count}</p>
      <button className='cli' onClick={increment}>Increment</button>
      <button className='cli' onClick={decrement}>Decrement</button>
      <button className='cli'  onClick={reset}>Reset</button>
    </div>
  );
}
