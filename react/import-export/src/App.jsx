import Learn from "./Learn";
import * as bundle from "./utils";

function App() {
  return (
    <div>
      <h1>import / export</h1>
      <Learn />
      <h3>{bundle.name}</h3>

      <p>Sum: {bundle.sum(7, 8)}</p>
      <p>Subtract: {bundle.subtract(10, 7)}</p>
    </div>
  );
}

export default App;
