import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const InnerContent = () => {
  const { result } = useSelector((state) => state.auth);

  return (
    <>
       {result?.data?.isPayed !== null ? <Outlet /> : <Navigate to="/plans" />}
    </>
  );
};

export default InnerContent;
