import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>this is the login screen</h1>
      <Link to="home">
        <button>home</button>
      </Link>
    </div>
  );
}

export default Login;
