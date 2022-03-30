import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import login from "./login";



const authentic = () => {
  const path = "http://localhost:3000";
  return (
    <Routes>
      <Route path={`${path}/login`} component={login} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default authentic;
