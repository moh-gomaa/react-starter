import Fruit from "./Fruit";

export function Fruits() {
  const fruits = [
    { name: "Apple", emoji: "🍎", price: 20, soldout: true },
    { name: "Banana", emoji: "🍌", price: 1.5, soldout: false },
    { name: "Mango", emoji: "🥭", price: 25.5, soldout: false },
    { name: "Pineapple", emoji: "🍍", price: 30.2, soldout: false },
    { name: "Orange", emoji: "🍊", price: 5, soldout: true },
  ];
  return (
    <div>
      <h1>Start FRUITS component which contains FRUIT component:</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            emoji={fruit.emoji}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
