export default function Korisnik(props) {
  const inputChangeHandler = (event) => {
    const newName = event.target.value;
    props.promijeniIme(props.index, newName);
  };

  return (
    <div className="korisnik">
      <div>
        <input
          type="text"
          name=""
          id=""
          value={props.korisnik.ime}
          onInput={inputChangeHandler}
        />
      </div>
      <p>Ime: {props.korisnik.ime}</p>
      <p>Godine: {props.korisnik.godine}</p>
    </div>
  );
}
