import { AllTodosPage } from "./pages";
import { AddTodoForm, NavBar } from "./components";

import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos);

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
    <div className="app">
      <h1>My tasks</h1>
      <NavBar />
      <div className="main-part">
        <AddTodoForm handleSubmit={handleAddTodo} />
        <AllTodosPage
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
      <button onClick={clearCompletedTodos} className="clear-completed-button">
        Clear completed
      </button>
    </div>
  );
}

export default App;
