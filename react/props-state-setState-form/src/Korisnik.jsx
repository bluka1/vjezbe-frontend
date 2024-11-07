import { useState } from "react";

export default function Korisnik(props) {
  const [ime, setIme] = useState(props.korisnik.ime);

  const inputChangeHandler = (event) => {
    setIme(event.target.value);
  };

  const blurHandler = () => {
    props.promijeniIme(props.index, ime);
  };

  return (
    <div className="korisnik">
      <div>
        <input
          type="text"
          name=""
          id=""
          value={ime}
          onChange={inputChangeHandler}
          onBlur={blurHandler}
        />
      </div>
      <p>Ime: {props.korisnik.ime}</p>
      <p>Godine: {props.korisnik.godine}</p>
    </div>
  );
}
