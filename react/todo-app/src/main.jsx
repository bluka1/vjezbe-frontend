import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { TodosContextProvider } from "./context";
import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </BrowserRouter>
  </StrictMode>
);
