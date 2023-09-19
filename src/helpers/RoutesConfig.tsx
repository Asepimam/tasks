import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tasks from "../pages/Tasks";
import ErrorPage from "./page/error-page";
import Home from "../pages/Home";
import Auth from "../pages/Auth";

const RoutesConfig: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="/auth" element={<Auth />} errorElement={<ErrorPage />} />
        <Route path="/tasks" element={<Tasks />} errorElement={<ErrorPage />} />
        <Route errorElement={<ErrorPage />} />
        {/* Ini akan menangani rute yang tidak cocok */}
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
