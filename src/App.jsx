import { Fruits } from "./components/Fruits";
import Hello from "./components/Hello";
import ConditionalComponent from "./components/conditional/ConditionalComponent";

function App() {
  const person = {
    name: "Mohamed Gomaa",
    msg: "Hello there",
    emoji: "👋",
    seatNumbers: [12, 5, 7, 6],
  };
  return (
    <div className="App">
      <Hello person={person} />
      <Fruits />
      <ConditionalComponent />
    </div>
  );
}

export default App;
