import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"; // Make sure this matches the file in the src folder

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);