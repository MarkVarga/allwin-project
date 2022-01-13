import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Help from "./pages/Help/Help";
import AuthContext from "./contexts/auth";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [username, setUsername] = useState("");

  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{
          username,
          setUsername,
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="help" element={<Help />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
