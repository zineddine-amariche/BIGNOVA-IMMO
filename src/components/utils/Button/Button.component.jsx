import React from "react";
import { useTheme } from "@mui/material";
import { Button } from '@material-ui/core';

export const PrimaryNavigationButton = ({
  type,
  onClick,
  bgcolor,
  text,
  textColor,
  state,
  pathname,
}) => (
  <Button
    variant="contained"
    sx={{
      p: 1,
      mr: 2,
      bgcolor,
    }}
  >
    {text}
  </Button>
);




export const StyledButton = ({ onClick, children,type }) => {
  const theme = useTheme();

  const buttonStyle = {
    backgroundColor:type? theme.palette.primary.main: theme.palette.primary.light,
    color:type? theme.palette.primary.light:  theme.palette.primary.dark,
    fontSize: 17,
    marginTop: 3,
    width: "100%",
    alignSelf: "center",
    border: type ?`2px solid ${theme.palette.primary.light}`:`1px solid ${theme.palette.primary.light}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.light,
    },
  };

  return (
    <Button
      variant="contained"
      style={buttonStyle}
      onClick={onClick}
      pt={3}
    >
      {children}
    </Button>
  );
};


