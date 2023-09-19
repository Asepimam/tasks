import ReactDOM from "react-dom/client";
import RoutesConfig from "./helpers/RoutesConfig";
import React from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RoutesConfig />
  </React.StrictMode>
);
