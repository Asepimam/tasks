import React, { useEffect } from "react";
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  const errors = error as any;
  return (
    <div id="error-page" className="App">
      <h1>Opps!</h1>
      <p> Sorry,an unexpected erro has occurred</p>
      <p>
        <i>{errors.statusText || errors.message} 😥</i>
      </p>
    </div>
  );
};
export default ErrorPage;
