import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
