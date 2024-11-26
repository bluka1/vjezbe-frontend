import { useState } from "react";
import xicon from "../../assets/x.svg";
import "./TodoItem.css";

export const TodoItem = ({ id, text, isDone, toggleTodo, deleteTodo }) => {
  // const [isDone, setIsDone] = useState(isDone);
  const classes = isDone ? "done" : null;

  return (
    <div className={`todo-item ${classes}`}>
      <input
        type="checkbox"
        name=""
        id=""
        checked={isDone}
        onChange={() => toggleTodo(id)}
      />
      <p>{text}</p>
      <button onClick={() => deleteTodo(id)}>
        <img src={xicon} alt="delete icon" />
      </button>
    </div>
  );
};
