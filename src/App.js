import { useSelector } from 'react-redux';
import { Counter } from './Counter';
import './styles.css';

export default function App() {
  const counter = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <h1>Basic React Redux application</h1>
      <h2>Your total votes is: {counter}</h2>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
