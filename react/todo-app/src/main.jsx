import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "./index.css";
import { TodosContextProvider } from "./context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </StrictMode>
);
