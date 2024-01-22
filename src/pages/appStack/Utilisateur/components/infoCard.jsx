import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import DateRangeIcon from "@mui/icons-material/DateRange";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@material-ui/core/styles";

// import "../styles.css";
import Pills from "./pills";
import { RoleColors } from "../../../../data/userMockData";

const InfoCard = (props) => {
  const theme = useTheme();
  const { informationUser, handleClick } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const paperStyle1 = {
    // marginX: " .8rem",
    padding: ".5rem",
    height: "100%",
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.default,
  };

  return (
    <Box height={"100%"}>
      <Box sx={paperStyle1} elevation={3}>
        <Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            paddingX={".6rem"}
          >
            <IconButton
              onClick={handleClick}
              size="large"
              aria-label="return"
              component="span"
              style={{
                color: theme.palette.primary.light,
              }}
            >
              <KeyboardBackspaceIcon />
            </IconButton>
            <Button
              sx={{ color: theme.palette.primary.light }}
              onClick={handleClickMenu}
            >
              <MoreHorizIcon fontSize="large" sx={{ cursor: "pointer" }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Edit User</MenuItem>
            </Menu>
          </Box>

          <Stack spacing={1} display="flex" alignItems={"center"} mb={"2rem"}>
            {Object.entries(informationUser).map(([key, value]) => {
              if (key === "profilePicture") {
                return (
                  <Box
                    component="img"
                    alt="profile"
                    src={value}
                    borderRadius="50%"
                    sx={{
                      objectFit: "cover",
                      height: { md: "80px", lg: "90px" },
                      width: { md: "80px", lg: "90px" },
                    }}
                  />
                );
              } else if (key === "fullname") {
                return (
                  <Typography
                    variant="h4"
                    style={{
                      color: theme.palette.primary.light,
                    }}
                  >
                    {value}
                  </Typography>
                );
              } else if (key === "role") {
                return (
                  <Box>
                    <Pills
                      text={RoleColors.map((element) => {
                        if (element.id == value) {
                          return element.role;
                        }
                      })}
                      bgColorPill={RoleColors.map((element) => {
                        if (element.id == value) {
                          return element.color;
                        }
                      })}
                    />
                  </Box>
                );
              }
            })}
          </Stack>
          <Divider variant="middle">
            {" "}
            <Typography
              variant="h5"
              style={{
                color: theme.palette.primary.light,
              }}
            >
              {" "}
              More information{" "}
            </Typography>{" "}
          </Divider>

          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{ my: ".5rem", color: theme.palette.primary.light }}
          >
            <List>
              {Object.entries(informationUser).map(([key, value]) => {
                if (
                  key === "email" ||
                  key === "phone" ||
                  key === "address" ||
                  key === "createdAt"
                ) {
                  return (
                    <ListItem key={key}>
                      <ListItemIcon
                        sx={{
                          color: theme.palette.primary.contrastText,
                        }}
                      >
                        {(() => {
                          switch (key) {
                            case "phone":
                              return <PhoneIcon />;
                            case "email":
                              return <AlternateEmailIcon />;
                            case "address":
                              return <MyLocationIcon />;
                            case "createdAt":
                              return <DateRangeIcon />;
                          }
                        })()}
                      </ListItemIcon>

                      <ListItemText
                        primary={` ${
                          key.charAt(0).toUpperCase() + key.slice(1)
                        }:`}
                        secondary={value}
                        sx={{
                          color: theme.palette.primary.light,
                        }}
                        secondaryTypographyProps={{
                          style: { color: theme.palette.primary.contrastText },
                        }}
                      />
                    </ListItem>
                  );
                }
              })}
            </List>
          </Box>
        </Box>
        <Box alignSelf={"center"} sx={{ marginBottom: { lg: ".8rem" } }}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Contact with email
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoCard;
