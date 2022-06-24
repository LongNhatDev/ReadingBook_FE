import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ComfirmOTP from "./confirmOTP";
import ResetPassword from "./resetpassword";
import SignIn from "./signin";
import SignUp from "./signup";

const Authentic = () => {
  return (
    <Routes>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="confirmotp" element={<ComfirmOTP />} />
      <Route path="resetpassword" element={<ResetPassword />} />

      <Route path="/" element={<Navigate to="/signin" replace />} />
    </Routes>
  );
};

export default Authentic;
