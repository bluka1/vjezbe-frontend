import React from "react";

export default function Stateful() {
  let count = 0;

  const [broj, setBroj] = React.useState(0);
  // const [slika, setSlika] = React.useState("./assets/react.svg");

  return (
    <div>
      <button
        onClick={() => {
          console.log("clicked");
          setBroj(broj + 1);
          count = count + 1;
        }}
      >
        INCREASE
      </button>
      <p>Broj:{broj}</p>
      <p>Count: {count}</p>
    </div>
  );
}
