import Counter from "./Counter";
import Form from "./components/Form";
import { Fruits } from "./components/Fruits";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Hello from "./components/Hello";
import InlineExternalStyling from "./components/InlineExternalStyling";
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
      <hr></hr>

      <Fruits />
      <hr></hr>

      <ConditionalComponent />
      <hr></hr>

      <Counter />
      <hr></hr>

      <Form />
      <hr></hr>

      <InlineExternalStyling />
      <hr></hr>

      <h1>Strat CSS-MODULES-STYLING here</h1>
      <Header1 />
      <Header2 />
    </div>
  );
}

export default App;
