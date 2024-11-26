import { useContext, useState } from "react";
import xicon from "../../assets/x.svg";
import "./TodoItem.css";
import { TodosContext } from "../../context";

export const TodoItem = ({ id, text, isDone }) => {
  const { deleteTodo, toggleTodo } = useContext(TodosContext);
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
