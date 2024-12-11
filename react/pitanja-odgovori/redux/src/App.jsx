import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>COUNTER:</p>
      <p>{count}</p>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </div>
  );
}

export default App;
