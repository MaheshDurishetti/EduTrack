import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user")); // Get user from localStorage

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />; // Redirect if unauthorized
  }

  return children;
};

export default ProtectedRoute;
