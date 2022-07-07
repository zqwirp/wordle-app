import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { WordleProvider } from "./contexts/WordleContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WordleProvider>
      <App />
    </WordleProvider>
  </React.StrictMode>
);
