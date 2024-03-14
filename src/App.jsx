import Hello from "./components/Hello";

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
    </div>
  );
}

export default App;
