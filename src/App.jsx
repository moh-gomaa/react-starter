import Counter from "./Counter";

function App() {
  const person = {
    name: "Mohamed Gomaa",
    msg: "Hello there",
    emoji: "👋",
    seatNumbers: [12, 5, 7, 6],
  };
  return (
    <div className="App">
      {/* <Hello person={person} />
      <Fruits />
      <ConditionalComponent /> */}
      <Counter />
    </div>
  );
}

export default App;
