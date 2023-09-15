import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import ErrorPage from "../pages/error-page";

const RouteConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  //   {
  //     path: "/tasks",
  //     element: <Tasks />,
  //   },
]);
export default RouteConfig;
