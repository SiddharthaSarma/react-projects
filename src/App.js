import { Counter } from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Basic React Redux application</h1>
      <h2>Your total votes is: </h2>
      <Counter />
    </div>
  );
}
