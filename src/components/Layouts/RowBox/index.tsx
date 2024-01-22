import { Box } from "@mui/system";
import React from "react";
import useStyles from "./styles";

const RowBox = ({ children, justifyContent }) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.conatiner}
      sx={{ justifyContent: justifyContent ? "space-between" : undefined }}
    >
      {children}
    </Box>
  );
};

export default RowBox;
