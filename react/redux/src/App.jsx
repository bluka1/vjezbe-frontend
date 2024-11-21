import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>REDUX</h1>

      <div>
        <p>COUNT: {count}</p>
      </div>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>

      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <div>
        <button onClick={() => dispatch(reset())}>RESET</button>
      </div>
    </div>
  );
}

export default App;
