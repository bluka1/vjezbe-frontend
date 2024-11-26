import { useState } from "react";

import { Todo } from "../../models";
import "./AddTodoForm.css";

export const AddTodoForm = ({ handleSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTodo = new Todo(text);
    handleSubmit(newTodo);
    setText("");
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmitForm}>
      <input
        type="text"
        placeholder="Add todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
