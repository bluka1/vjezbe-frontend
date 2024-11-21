import { observer } from "mobx-react";
import todoStore from "./store";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <h1>MOBX</h1>

      <div>
        <label htmlFor="text">Todo Text: </label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <button onClick={() => todoStore.addTodo(text)}>Add todo</button>
      </div>

      <div>
        {todoStore.todos.length > 0 &&
          todoStore.todos.map((todo) => (
            <div key={todo.id}>
              <p>{todo.text}</p>
              <button onClick={() => todoStore.removeTodo(todo.id)}>X</button>
            </div>
          ))}
      </div>
    </>
  );
}

export default observer(App);
