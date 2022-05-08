import React from "react";
import { Route, Routes } from "react-router-dom";
import ComfirmOTP from "./confirmOTP";
import ResetPassword from "./resetpassword";
import SignUp from "./signup";

const Authentic = () => {
  return (
    <Routes>
      <Route path="signup" element={<SignUp />} />
      <Route path="confirmotp" element={<ComfirmOTP />} />
      <Route path="resetpassword" element={<ResetPassword />} />
    </Routes>
  );
};

export default Authentic;
