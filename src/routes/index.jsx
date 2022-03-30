import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "../modules/auth/login";

export default function RoutesRoot() {
  return (
    <BrowserRouter
    >
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Navigate  to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
