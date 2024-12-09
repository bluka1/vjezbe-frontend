import { useContext } from "react";
import { TodosContext } from "../context";
import { TodoItem } from "../components";

export const ActiveTodosPage = () => {
  const { todos } = useContext(TodosContext);
  const activeTodos = todos.filter((todo) => !todo.isDone);

  return (
    <section>
      {activeTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          isDone={todo.isDone}
          text={todo.text}
        />
      ))}
    </section>
  );
};
