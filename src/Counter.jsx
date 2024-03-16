import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [counterRate, setCounterRate] = useState(1);

  function incrementCounterRate() {
    setCounterRate(counterRate + 1);
  }

  function decrementCounterRate() {
    setCounterRate(counterRate - 1);
  }

  function incrementCounter() {
    setCount(count + counterRate);
  }

  function decrementCounter() {
    setCount(count - counterRate);
  }

  return (
    <div>
      <h1>Start COUNTER component</h1>
      <h2>The counter change rate is: {counterRate}</h2>
      <button onClick={incrementCounterRate}>Increment rate</button>
      <button onClick={decrementCounterRate}>Decrement rate</button>

      <h2>The counter value is: {count}</h2>
      <button onClick={incrementCounter}>Increment counter</button>
      <button onClick={decrementCounter}>Decrement counter</button>
    </div>
  );
}
