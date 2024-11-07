import { useState } from "react";

const DodajKorisnikaForm = ({ handleSubmit }) => {
  const [ime, setIme] = useState();
  const [godine, setGodine] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    handleSubmit(ime, +godine); // + znak za konverziju podatka iz stringa u number
    setIme("");
    setGodine();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="ime">Ime:</label>
        <input
          type="text"
          name=""
          id="ime"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="godine">Godine:</label>
        <input
          type="number"
          name=""
          id="godine"
          value={godine}
          onChange={(e) => setGodine(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="DODAJ NOVOG KORISNIKA" />
      </div>
    </form>
  );
};

export default DodajKorisnikaForm;
