import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './store/actions';

export const Counter = () => {
  const [counter, updateCounter] = useState(0);
  const dispatch = useDispatch();
  const handleDecrement = () => {
    updateCounter(counter - 1);
    dispatch(decrement());
  };
  const handleIncrement = () => {
    updateCounter(counter + 1);
    dispatch(increment());
  };
  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};
