import React from "react";
import { useAuthContext } from "../../contexts/auth";

const Home: React.FC = () => {
  const { user, logOut }: any = useAuthContext();

  const logOutHandler = async () => {
    try {
      await logOut();
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h1>Welcome {user.email}!</h1>
      <button onClick={logOutHandler}>logout</button>
    </div>
  );
};

export default Home;
