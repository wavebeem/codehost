import React from "react";
import ReactDOM from "react-dom/client";
import "1bit-ui";
import "./index.css";
import { App } from "./App";

const root = document.getElementById("root") as HTMLElement;
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(app);
