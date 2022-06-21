import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import StaffHome from "./staffhome";

const StaffPage = () => {
  return (
    <Routes>
      <Route path="/" element={<StaffHome />} />

      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default StaffPage;
