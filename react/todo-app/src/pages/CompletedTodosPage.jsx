import { useContext } from "react";
import { TodosContext } from "../context";
import { TodoItem } from "../components";

export const CompletedTodosPage = () => {
  const { todos } = useContext(TodosContext);
  const completedTodos = todos.filter((todo) => todo.isDone);

  return (
    <section>
      {completedTodos.map((todo) => (
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
