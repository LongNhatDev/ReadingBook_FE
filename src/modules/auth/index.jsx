import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./login";
import SignUp from "./signup";

const Authentic = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};

export default Authentic;
