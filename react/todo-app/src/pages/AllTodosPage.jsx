import { TodoItem } from "../components";

export const AllTodosPage = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <section>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          isDone={todo.isDone}
          text={todo.text}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </section>
  );
};

// export default AllTodosPage;
