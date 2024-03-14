export default function Fruit({ name, emoji, price }) {
  return (
    <li>
      <strong>
        {emoji} {name} - ${price}
      </strong>
    </li>
  );
}
