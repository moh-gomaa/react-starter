export default function Fruit({ name, emoji, price, soldout }) {
  return (
    <li>
      <strong>
        {emoji} {name} - ${price} {soldout ? "- Soldout" : ""}
      </strong>
    </li>
  );
}
