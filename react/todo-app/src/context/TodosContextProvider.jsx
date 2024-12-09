import { createContext, useState } from "react";

export const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevState) => {
      const newArr = [...prevState];
      newArr.push(todo);
      return newArr;
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevState) => {
      const newState = [...prevState];
      return newState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  const clearCompletedTodos = () => {
    const newTodos = todos.filter((todo) => !todo.isDone);
    setTodos(newTodos);
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        handleAddTodo,
        toggleTodo,
        deleteTodo,
        clearCompletedTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
