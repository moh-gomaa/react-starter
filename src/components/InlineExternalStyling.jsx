import "../css/style.css";

const inlineStyle = { color: "red", backgroundColor: "yellow" };

export default function InlineExternalStyling() {
  return (
    <div>
      <h1>Strat INLINE-EXTERNAL-STYLING component</h1>
      <h2 style={inlineStyle}>Inline styling applied here</h2>
      <h2 className="title">External spreadsheet styling applied here</h2>
    </div>
  );
}
