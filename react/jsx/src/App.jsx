import "./App.css";

function App() {
  const name = "Ivo";
  const surname = "Ivic";

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam
        impedit sapiente ratione magnam praesentium provident repudiandae
        ducimus necessitatibus eveniet.
      </p>
      <p>Korisnikovo ime je: {name}</p>
      <p>
        {name} {surname}
      </p>
    </>
  );
}

export default App;
