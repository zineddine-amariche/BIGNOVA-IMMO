import React, { useRef } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import {
  ChevronLeftOutlined,
  ChevronRightOutlined,
  HomeOutlined,
} from "@mui/icons-material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import CustDrawer from "./components/Drawer";
import {
  Collapse,
} from "@material-ui/core";
import { ExpandLess, ExpandMore, CheckCircleRounded } from "@material-ui/icons";
import { PrimaryText } from "../../../utils/typography";
import BallotIcon from "@mui/icons-material/Ballot";
import PeopleIcon from "@mui/icons-material/People";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import BadgeIcon from "@mui/icons-material/Badge";
import ButtonLanguage from "../../../utils/Button/LanguageBTN";
import { useTranslation } from "react-i18next";

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navItems = [
    {
      icon: <HomeOutlined />,
      text: `${t("sidebar.0.Dashboard")}`,
      to: "Dashboard",
    },
    {
      text: t("sidebar.0.Utilisateur"),
      icon: <PeopleIcon />,
      to: "Utilisateur",
    },
  ];

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const theme = useTheme();
  let text = "Fichiers";
  const lcText = text.toLowerCase();
  let text2 = "Fichiers";
  const lcText2 = text2.toLowerCase();

  const buttonRef = useRef(null);

  const navItems2 = [
    {
      text: t("sidebar.0.Acquereur"),
      icon: <SettingsAccessibilityIcon />,
      to: "Acquereur",
    },
    {
      text: t("sidebar.0.Projets"),
      icon: <AccountTreeIcon />,
      to: "Projets",
    },
    {
      text: t("sidebar.0.Lots"),
      icon: <BallotIcon />,
      to: "Lots",
    },
    {
      text: t("sidebar.0.TypedeLot"),
      icon: <CheckCircleRounded />,
      to: "Type de Lot",
    },
  ];

  const navItems3 = [
    {
      text: t("sidebar.0.Employes"),
      icon: <BadgeIcon />,
      to: "Employés",
    },
    {
      text: t("sidebar.0.Pointage"),
      icon: <CreditScoreIcon />,
      to: "Pointage",
    },
  ];
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <CustDrawer
      user={user}
      drawerWidth={drawerWidth}
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      isNonMobile={isNonMobile}
    >
      <Box width="100%">
        <Header isSidebarOpen={isSidebarOpen} />
      </Box>

      <ListItems
        navItems={navItems}
        setActive={setActive}
        active={active}
        isSidebarOpen={isSidebarOpen}
        navigate={navigate}
      />

      <List>
        <ListItem
          button
          onClick={handleClick}
          // disablePadding
          sx={{
            backgroundColor: active === lcText ? "#0004" : "",
            color: theme.palette.primary.light,

            "&:hover": {
              color: theme.palette.primary.light,
            },
          }}
        >
          {currentLanguage === "ar" &&
            (open2 ? (
              <Box 
              mr={!isSidebarOpen ? ".5rem" : "2rem"}
              >
                <ExpandLess />
              </Box>
            ) : (
              <Box mr={!isSidebarOpen ? ".5rem" : "2rem"}>
                <ExpandMore />
              </Box>
            ))}
          {isSidebarOpen ? <ListItemText primary={"Fichiers"} /> : null}
          
          {currentLanguage !== "ar" &&
            (open2 ? (
              <Box ml={!isSidebarOpen ? ".5rem" : "2rem"}>
                <ExpandLess />
              </Box>
            ) : (
              <Box ml={!isSidebarOpen ? ".5rem" : "2rem"}>
                <ExpandMore />
              </Box>
            ))}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItems
              navItems={navItems2}
              setActive={setActive}
              active={active}
              isSidebarOpen={isSidebarOpen}
              navigate={navigate}
            />
          </List>
        </Collapse>
      </List>

      <List>
        <ListItem
          button
          onClick={handleClick2}
          sx={{
            backgroundColor: active === lcText2 ? "#0004" : "",
            color: theme.palette.primary.light,

            "&:hover": {
              color: theme.palette.primary.light,
            },
          }}
        >
          {currentLanguage === "ar" &&
            (open2 ? (
              <Box mr={!isSidebarOpen ? ".5rem" : "2rem"}>
                <ExpandLess />
              </Box>
            ) : (
              <Box mr={!isSidebarOpen ? ".5rem" : "2rem"}>
                <ExpandMore />
              </Box>
            ))}

          {isSidebarOpen ? <ListItemText primary={"Gestion RH"} /> : null}

          {currentLanguage !== "ar" &&
            (open2 ? (
              <Box ml={!isSidebarOpen ? ".5rem" : "2rem"}>
                <ExpandLess />
              </Box>
            ) : (
              <Box ml={!isSidebarOpen ? ".5rem" : "2rem"}>
                <ExpandMore />
              </Box>
            ))}
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItems
              navItems={navItems3}
              setActive={setActive}
              active={active}
              isSidebarOpen={isSidebarOpen}
              navigate={navigate}
            />
          </List>
        </Collapse>
      </List>

      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: isSidebarOpen ? 20 : 2,
        }}
      >
        <ButtonLanguage ref={buttonRef} />
      </Box>
    </CustDrawer>
  );
};

export default Sidebar;

const Header = ({ isSidebarOpen }) => {
  const theme = useTheme();

  return (
    <>
      {isSidebarOpen && (
        <Box
          m="2rem 0rem 1.4rem 20px"
          display={"flex"}
          alignItems="center"
          component={"img"}
          src={logo}
          width={"200px"}
          height="160px"
        />
      )}

      {!isSidebarOpen && (
        <Box
          m="2rem 0rem 1.4rem 20px"
          display={"flex"}
          alignItems="center"
          component={"img"}
          src={logo}
          width={"30px"}
          height="30px"
        />
      )}
    </>
  );
};

const ListItems = ({
  navItems,
  setActive,
  active,
  isSidebarOpen,
  navigate,
}) => {
  const theme = useTheme();

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <List>
      {navItems.map(({ text, icon, to }) => {
        if (!icon) {
          return (
            <PrimaryText
              fontWeight={"500"}
              fontSize={"25px"}
              text={text}
              color={theme.palette.primary.light}
              cursor
            />
          );
        }
        const lcText = to.toLowerCase();

        return (
          <ListItem
            key={text}
            disablePadding
            sx={{
              backgroundColor: active === lcText ? "#0004" : "",
              color: theme.palette.primary.light,

              "&:hover": {
                color: theme.palette.primary.light,
              },
            }}
          >
            <ListItemButton
              onClick={() => {
                navigate(`/${lcText}`);
                setActive(lcText);
              }}
            >
              {currentLanguage === "ar" &&
                active === lcText &&
                isSidebarOpen && <ChevronLeftOutlined sx={{ mr: "auto" }} />}
              {currentLanguage !== "ar" && (
                <ListItemIcon
                  sx={{
                    ml:
                      !isSidebarOpen && currentLanguage !== "ar"
                        ? ".6rem"
                        : "2rem",
                    // mr: !isSidebarOpen && currentLanguage === "ar" ? ".6rem" : "2rem",
                    color: theme.palette.primary.light,
                  }}
                >
                  {icon}
                </ListItemIcon>
              )}
              {isSidebarOpen && <ListItemText primary={text} />}

              {currentLanguage !== "ar" && active === lcText && (
                <ChevronRightOutlined sx={{ ml: "auto" }} />
              )}
              {currentLanguage === "ar" && (
                <ListItemIcon
                  sx={{
                    ml: !isSidebarOpen ? ".6rem" : "2rem",
                    color: theme.palette.primary.light,
                  }}
                >
                  {icon}
                </ListItemIcon>
              )}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
