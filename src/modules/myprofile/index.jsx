import React from "react";
import { Route, Routes } from "react-router-dom";
import ChangePassword from "./changePassword";
import ChangeProfile from "./changeProfile";

const MyProfile = () => {
  return (
    <Routes>
      <Route path="/" element={<ChangeProfile />} />
      <Route path="/changepassword" element={<ChangePassword />} />
    </Routes>
  );
};

export default MyProfile;
