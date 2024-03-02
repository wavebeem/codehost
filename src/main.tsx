import React from "react";
import ReactDOM from "react-dom/client";
import "@wavebeem/candy-css";
import "./index.css";
import { App } from "./App";

Prism.plugins.autoloader.languages_path = "/prism/components/";

const root = document.getElementById("root") as HTMLElement;
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(app);
