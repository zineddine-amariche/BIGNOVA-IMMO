import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { ChevronLeft, Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import { handleShowSidebar, handleTypeSidebar } from "../../Redux/global/slice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const Head = ({ title, retur, button, mode, onCreate }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;


  let reverso =currentLanguage ==="ar"? 'row-reverse':'row'
  return (
    <Box
      sx={{
        padding: "25px",
        color: theme.palette.primary.light,
        fontSize: "22px",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        overflow: "hidden",
        justifyContent: "space-between",
        flexDirection: reverso,
        "&:hover": {
          textDecoration: retur ? "underline" : "none",
        },
      }}
    >
      <Box>
        {retur ? (
          <ChevronLeft sx={{ color: theme.palette.primary.light }} />
        ) : null}
        {title}
      </Box>
      {button && (
        <Box>
          <IconButton
            onClick={() => {
              dispatch(handleShowSidebar(true));
              dispatch(handleTypeSidebar(true));
            }}
            sx={{
              color: theme.palette.primary.dark,
              bgcolor: theme.palette.primary.light,
              "&:hover": {
                color: theme.palette.primary.dark,
                bgcolor: theme.palette.primary.light,
              },
            }}
          >
            <AddCircle />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Head;
