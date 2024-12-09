import { useContext } from "react";
import { Routes, Route } from "react-router";

import { ActiveTodosPage, AllTodosPage, CompletedTodosPage } from "./pages";
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
        <Routes>
          <Route path="/" element={<AllTodosPage />} />
          <Route path="/active" element={<ActiveTodosPage />} />
          <Route path="/completed" element={<CompletedTodosPage />} />
        </Routes>
      </div>
      <button onClick={clearCompletedTodos} className="clear-completed-button">
        Clear completed
      </button>
    </div>
  );
}

export default App;
