import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth";

const ProtectedRoute = ({ children }: any) => {
  let { user }: any = useAuthContext();

  if (!user && localStorage.getItem("token") === "") {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
