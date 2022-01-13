import React, { useContext } from "react";
import AuthContext from "../../contexts/auth";

const Home: React.FC = () => {
  const { username } = useContext(AuthContext);
  return (
    <div>
      <h1>this is the home page</h1>
      <h2>Welcome {username}!</h2>
    </div>
  );
};

export default Home;
