import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./utils/roots";
import { RouterProvider } from "react-router-dom";
import "./global/styles/index.css";
console.log(Routes);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>
);
