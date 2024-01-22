import React, { useRef, useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  ArrowDropDownOutlined,
  ChevronLeft,
} from "@mui/icons-material";

import profileImage from "../../../../assets/user.png";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../../../Redux/theme";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../FlexBetween";
import { Logout } from "../../../../Redux/auth/slice";
import ButtonLanguage from "../../../utils/Button/LanguageBTN";
import { useTranslation } from "react-i18next";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const buttonRef = useRef(null);

  const navigate = useNavigate();

  const mode = useSelector((state) => state.AppTheme.mode);
  const { result } = useSelector((state) => state.auth);

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;


  let reverso =currentLanguage ==="ar"? 'row-reverse':'row'
let styled ={
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection:reverso
}

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          flexDirection:reverso,
          backgroundColor: theme.palette.neutral.main,
        }}
      >
        {/* LEFT SIDE */}
        <FlexBetween style={{flexDirection:reverso}}>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {!isSidebarOpen ? (
              <MenuIcon sx={{ color: theme.palette.primary.light }} />
            ) : (
              <ChevronLeft sx={{ color: theme.palette.primary.light }} />
            )}
          </IconButton>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <Box gap="1.5rem" sx={styled}>
          <IconButton onClick={() => dispatch(setMode({ mode }))}>
            {mode == "dark" ? (
              <DarkModeOutlined
                sx={{
                  fontSize: "25px",
                  color: theme.palette.primary.contrastText,
                }}
              />
            ) : (
              <LightModeOutlined
                sx={{
                  fontSize: "25px",
                  color: theme.palette.primary.light,
                }}
              />
            )}
          </IconButton>

          <FlexBetween gap="1.5rem" sx={styled}>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
                flexDirection:reverso
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover",
              
              
              }}
              />
              <Box textAlign="left" sx={{

              }}>
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.primary.light }}
                >
                  {result?.firstName} {result?.lastName}
                </Typography>
                <Typography
                  fontSize=".8rem"
                  sx={{
                    color: theme.palette.primary.light,
                    fontWeight: "500",
                  }}
                >
                  {result?.role == 1
                    ? "ADMIN"
                    : result?.role == 2
                    ? "MANAGER"
                    : "ACQUEREUR"}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{
                  color: theme.palette.primary.light,
                  fontSize: "25px",
                }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate(`/${"profile"}`);
                }}
              >
                My profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  dispatch(Logout());
                  navigate("login");
                  localStorage.removeItem('isLoggedIn');
                  localStorage.removeItem('data');

                }}
              >
                Log Out
              </MenuItem>
            </Menu>
          </FlexBetween>
          <ButtonLanguage ref={buttonRef}  />

        </Box>
    
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
