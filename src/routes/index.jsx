import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Authentic from "../modules/auth";

export default function RoutesRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/*" element={<Authentic />} />

        <Route path="/" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
