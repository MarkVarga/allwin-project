import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Help.css";

const Help: React.FC = () => {
  return (
    <div className="help-div">
      <h1>This is the help screen</h1>
      <div className="help-div-textbox">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Link to="/home">
        <button>back</button>
      </Link>
    </div>
  );
};

export default Help;
