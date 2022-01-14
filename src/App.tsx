import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Help from "./pages/Help/Help";
import AuthContext from "./contexts/auth";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [username, setUsername] = useState("");

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="home" element={<Home />} />
      <Route path="help" element={<Help />} />
    </Routes>
  );
};

export default App;
