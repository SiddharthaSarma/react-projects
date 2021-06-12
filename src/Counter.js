import { useState } from 'react';

export const Counter = () => {
  const [counter, updateCounter] = useState(0);
  const handleDecrement = () => {
    updateCounter(counter - 1);
  };
  const handleIncrement = () => {
    updateCounter(counter + 1);
  };
  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};
