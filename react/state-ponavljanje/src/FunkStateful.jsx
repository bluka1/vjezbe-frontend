import React from "react";

const FunkStateful = () => {
  const [ime, setIme] = React.useState("Luka");
  // const [ime, setIme] = state;

  const azurirajState = () => {
    if (ime === "Luka") {
      setIme("Mirko");
    } else {
      setIme("Luka");
    }
  };

  return (
    <div>
      <h1>FunkStateful</h1>
      <p>State: {ime}</p>
      <button onClick={azurirajState}>Promijeni Ime</button>
    </div>
  );
};

export default FunkStateful;
