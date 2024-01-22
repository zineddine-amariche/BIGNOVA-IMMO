import React from "react";
import { Box, useTheme } from "@mui/material";
import Head from "../../../components/Layouts/Head";
// import Head from "../../../components/Layouts/Head";

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: theme.palette.neutral.main,
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <Head title={"dashboard"}  />
    </Box>
  );
};

export default Dashboard;
