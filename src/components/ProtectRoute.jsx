import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authentication } from "../authProvider";

const ProtectedRoute = ({ children }) => {
  const auth = useContext(authentication);

  if (auth.accessToken === null) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
