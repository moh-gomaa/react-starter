function Hello({ person }) {
  return (
    <div>
      <h1>Start HELLO component:</h1>
      <h2>Hello From Component</h2>
      <h2>
        {person.name} - {person.msg}
        {person.emoji}
      </h2>
      <h2>Here is your seat numbers:</h2>
      <h3>{person.seatNumbers}</h3>
    </div>
  );
}

export default Hello;
