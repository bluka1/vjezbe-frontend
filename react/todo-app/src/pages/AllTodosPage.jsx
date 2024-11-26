import { useContext } from "react";
import { TodoItem } from "../components";
import { TodosContext } from "../context";

export const AllTodosPage = () => {
  const { todos } = useContext(TodosContext);
  return (
    <section>
      {todos?.map((todo) => (
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

// export default AllTodosPage;
