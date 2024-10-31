import { KlasnaKomponenta, FunkcionalnaKomponenta } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <p>App.jsx</p>
      <FunkcionalnaKomponenta></FunkcionalnaKomponenta>
      {/* <FunkcionalnaKomponenta noveKlase="big-text" /> */}

      <KlasnaKomponenta />
    </div>
  );
}

export default App;
