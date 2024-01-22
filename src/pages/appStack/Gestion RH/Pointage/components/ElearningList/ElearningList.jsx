import { Stack } from "@mui/material";
import React from "react";
import { PrimaryText } from "../../../../../components/utils/typography";
import { useTheme } from "@mui/material";

const data = [];

export const ElearningList = () => {
  return <>{data.length == 0 ? <NoInformations /> : <List />}</>;
};

const NoInformations = () => {
  const theme = useTheme();

  return (
    <Stack
      px={3}
      sx={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PrimaryText
        fontWeight={"400"}
        fontSize={"17px"}
        text={'There is no information'}
        color={theme.palette.error.light}
      />
    
    </Stack>
  );
};

const List = () => {
  return <></>;
};
