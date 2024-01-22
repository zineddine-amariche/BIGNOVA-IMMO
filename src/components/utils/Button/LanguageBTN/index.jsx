import React, { forwardRef, useState } from "react";
import {
  Box,
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  useTheme,
} from "@mui/material";
import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { images } from "./Images";

const options = ["en", "fr", "ar"];

const ButtonLanguage = forwardRef((props, ref) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const anchorRef = React.useRef();
  const [vales, setvales] = useState("en");
  React.useImperativeHandle(ref, () => ({
    // Expose a function to open the menu externally
    openMenu: () => {
      setOpen(true);
    },
  }));
  const { i18n } = useTranslation();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (event, index, option) => {
    setSelectedIndex(index);
    setOpen(false);
    i18n.changeLanguage(option);
    setvales(option);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const currentLanguage = i18n.language;

  // let reverso =currentLanguage ==="ar"? 'row-reverse':'row'

  const flags =
    currentLanguage == "ar"
      ? images.ar
      : currentLanguage == "en"
      ? images.en
      : images.fr;

  return (
    <>
      <Button
        ref={anchorRef}
        size="small"
        aria-controls={open ? "split-button-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-label="select merge strategy"
        aria-haspopup="menu"
        onClick={handleToggle}
        style={{
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.primary.light,
        }}
        startIcon={
          <Box
            // m="2rem 0rem 1.4rem 20px"
            display={"flex"}
            alignItems="center"
            component={"img"}
            src={flags}
            width={"30px"}
            height="20px"
          />
        }
      >
        {currentLanguage}
      </Button>

      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      // disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) =>
                        handleMenuItemClick(event, index, option)
                      }
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
});

export default ButtonLanguage;
