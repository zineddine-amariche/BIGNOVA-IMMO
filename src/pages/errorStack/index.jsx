import { Stack } from "@mui/material";
import React from "react";
import { Box, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PrimaryText } from "../../components/utils/typography";

const Denied = () => {
  const theme = useTheme();
  const { isAuth, result } = useSelector((state) => state.auth);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#122",
      }}
    >
      DENIED, As a {result.role} you don't have permission to access the
      dashboard.
      <Link to={"/login"}>
        <PrimaryText
          fontWeight={"500"}
          fontSize={"14px"}
          text={"login"}
          color={theme.palette.info.dark}
          cursor
          lineHeight={3.5}
          textDecoration
        />
      </Link>
    </Box>
  );
};

export default Denied;
