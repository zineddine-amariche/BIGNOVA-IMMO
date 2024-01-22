import React, { useRef } from "react";
import { Box, useTheme } from "@mui/material";
import LoginForm from "./LoginForm";
import ButtonLanguage from "../../../components/utils/Button/LanguageBTN";

const Login = () => {
  const theme = useTheme();
  const buttonRef = useRef(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:theme.palette.primary.light,
      }}
    >
        <Box
        sx={{
          backgroundColor: theme.palette.primary.dark,
          position: "absolute",
          top: 10,
          left: 20,
          borderRadius: 0.6,
        }}
      >
        <ButtonLanguage ref={buttonRef}  />
        
      </Box>
      <LoginForm />
    </Box>
  );
};

export default Login;
