function Hello({ person }) {
  return (
    <div>
      <h1>Hello From Component</h1>
      <h1>
        {person.name} - {person.msg}
        {person.emoji}
      </h1>
      <h1>Here is your seat numbers:</h1>
      <h2>{person.seatNumbers}</h2>
    </div>
  );
}

export default Hello;
