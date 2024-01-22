import { Stack, useTheme } from "@mui/material";
import React from "react";
import Loader from "../Loader";

const LoaderPageTable = ({Children,isLoading}) => {
  const theme = useTheme();

  return (
    <>
      {isLoading ? (
        <Stack
          width={"100%"}
          display="flex"
          height="100%"
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader color={theme.palette.primary.light}/>
        </Stack>
      ) : 
         <Children/>
      }
    </>
  );
};

export default LoaderPageTable;
