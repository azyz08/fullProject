import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CheckboxProvider } from "./components/checkbox";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CheckboxProvider>
        <App />
      </CheckboxProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
