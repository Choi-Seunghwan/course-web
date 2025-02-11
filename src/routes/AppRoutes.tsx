import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Auth from "../pages/Auth";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default AppRoutes;
