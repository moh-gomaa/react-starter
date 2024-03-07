function Hello({ msg, emoji, name }) {
  return (
    <div>
      <h1>Hello From Component</h1>
      <h1>
        {msg} {emoji} {name}
      </h1>
    </div>
  );
}

export default Hello;
