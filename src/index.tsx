import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";
import "../src/main.css";
import "../src/game.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
