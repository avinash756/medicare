import React from "react";
import { Navigate } from "react-router-dom";

// Check for token in localStorage
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

// Wrapper for protected routes
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
