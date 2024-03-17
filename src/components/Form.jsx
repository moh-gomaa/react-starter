import { useState } from "react";

export default function Form() {
  const [formObj, setName] = useState({ firstName: "", lastName: "" });

  function submitForm(e) {
    e.preventDefault();

    console.log(formObj);
    alert("Form submitted successfully");
  }

  return (
    <div>
      <h1>Start FORM component</h1>
      <form>
        <input
          type="text"
          placeholder="First name"
          onChange={(e) => setName({ ...formObj, firstName: e.target.value })}
          value={formObj.firstName}
        />

        <input
          type="text"
          placeholder="Last name"
          onChange={(e) => setName({ ...formObj, lastName: e.target.value })}
          value={formObj.lastName}
        />

        <button onClick={(e) => submitForm(e)}>Submit</button>
      </form>
    </div>
  );
}
