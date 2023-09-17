import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();
  // set time untuk redirect ke home

  return (
    <div id="error-page" className="App">
      <h1>Opps!</h1>
      <p> Sorry,an unexpected erro has occurred</p>
      <p>
        <i>{error.statusText || error.message} 😥</i>
      </p>
    </div>
  );
};
export default ErrorPage;
