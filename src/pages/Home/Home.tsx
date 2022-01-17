import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";

import "./Home.css";
import { setSourceMapRange } from "typescript";

const Home: React.FC = () => {
  const { user, logOut }: any = useAuthContext();
  const [catImageUrl, setCatImageUrl]: any = useState("");

  const logOutHandler = async () => {
    try {
      await logOut();
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let result = await fetch("https://placekitten.com/g/640/480");
      // result = await result.json();
      setCatImageUrl(result.url);
      console.log(result);
    };
    fetchData();
  }, []);

  return (
    <div className="homepage-div">
      <h1>Welcome {user.email}!</h1>
      <div className="cat-div">
        <img src={catImageUrl}></img>
      </div>
      <div className="cat-button-container">
        <button onClick={logOutHandler}>logout</button>
        <Link to="/help">
          <button>Help!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
