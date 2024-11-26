import { useContext } from "react";

import { AllTodosPage } from "./pages";
import { AddTodoForm, NavBar } from "./components";
import { TodosContext } from "./context";

import "./App.css";

function App() {
  const { clearCompletedTodos } = useContext(TodosContext);

  return (
    <div className="app">
      <h1>My tasks</h1>
      <NavBar />
      <div className="main-part">
        <AddTodoForm />
        <AllTodosPage />
      </div>
      <button onClick={clearCompletedTodos} className="clear-completed-button">
        Clear completed
      </button>
    </div>
  );
}

export default App;
