import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const display = true;
  let msg;

  if (display) {
    msg = <h2>Message 1 (True condition)</h2>;
  } else {
    msg = <h2>Message 2 (False condition)</h2>;
  }
  return (
    <div>
      <h1>Start CONDITIONAL component</h1>
      <h2>1-With regular if condition:</h2>
      {msg}
      <h2>1-Return component With ternary operator:</h2>
      {display ? <Welcome /> : <Code />}
    </div>
  );
}
