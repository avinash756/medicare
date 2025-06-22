import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Component } from "react";
import Home from "./components/Home";
import Caretaker from "./components/Caretaker";
import Patient from "./components/Patient";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CaretakerDashboard from "./components/carecrud";
import ProtectedRoute from "./components/ProtectedRoute";

class App extends Component {
  render() {
    const isAuthenticated = !!localStorage.getItem("token");

    return (
      <BrowserRouter>
        <Routes>
          {/* ✅ Redirect root route to login or home */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/home" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patient"
            element={
              <ProtectedRoute>
                <Patient />
              </ProtectedRoute>
            }
          />
          <Route
            path="/caretaker"
            element={
              <ProtectedRoute>
                <Caretaker />
              </ProtectedRoute>
            }
          />
          <Route
            path="/caretaker-dashboard"
            element={
              <ProtectedRoute>
                <CaretakerDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
