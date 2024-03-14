import Fruit from "./Fruit";

export function Fruits() {
  const fruits = [
    { name: "Apple", emoji: "🍎", price: 20 },
    { name: "Banana", emoji: "🍌", price: 1.5 },
    { name: "Mango", emoji: "🥭", price: 25.5 },
    { name: "Pineapple", emoji: "🍍", price: 30.2 },
    { name: "Orange", emoji: "🍊", price: 5 },
  ];
  return (
    <div>
      <h1>Start FRUITS component which contains FRUIT component:</h1>
      <ul>
        {fruits.map(({ name, emoji, price }) => (
          <Fruit key={name} name={name} emoji={emoji} price={price} />
        ))}
      </ul>
    </div>
  );
}
