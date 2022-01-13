import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import "./Login.css";

const Login: React.FC = () => {
  const { setUsername } = useContext(AuthContext);

  return (
    <div className="login">
      <div className="form">
        <form>
          <div className="input-container">
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              required
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>
          <div className="button-container">
            <button type="submit">Login</button>
          </div>
        </form>
        <Link to="home">
          <button>home</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
