import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Help from "./pages/Help/Help";
import ProtectedRoute from "../src/components/ProtectedRoute";
import { AuthContextProvider } from "./contexts/auth";

const App: React.FC = () => {
  useEffect(() => {
    localStorage.setItem("token", "");
  }, []);
  return (
    <AuthContextProvider>
      <Routes>
        <Route
          path="/"
          element={localStorage.getItem("token") ? <Home /> : <Login />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/help" element={<Help />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
