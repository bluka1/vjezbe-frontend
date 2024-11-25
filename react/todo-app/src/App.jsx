import { AllTodosPage } from "./pages";
import { AddTodoForm, NavBar } from "./components";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>My tasks</h1>
      <NavBar />
      <AddTodoForm />
      <AllTodosPage />
      <button onClick={() => {}} className="clear-completed-button">
        Clear completed
      </button>
    </div>
  );
}

export default App;
