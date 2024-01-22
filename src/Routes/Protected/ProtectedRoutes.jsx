import React from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = ({roleRequired}) => {
  const { isAuth, result } = useSelector((state) => state.auth);
  if (roleRequired) {
    return isAuth ? (
      roleRequired === result?.role ? (
        <Outlet />
      ) : (
        <Navigate to="/denied" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } 
  // else {
  //   return isAuth ? <Outlet /> : <Navigate to="/login" />;
  // }
};

export default ProtectedRoutes;
