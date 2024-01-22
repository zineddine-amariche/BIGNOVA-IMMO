import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button, IconButton, Menu, MenuItem, BoxProps } from "@mui/material";
import { useTheme } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import ListItemText from "@mui/material/ListItemText";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Stack from "@mui/material/Stack";
import { LotsCardProps } from "../../useCardInfo";
import { RoleColors } from "../../../../../../data/userMockData";
import Pills from "../../usePills";
import { GlobalSliceState } from "../../../../../../Redux/global/slice";
import { RootState } from "../../../../../../Redux/store";
import { useSelector } from "react-redux";


export interface  InfoProps extends BoxProps {
  handleClick: () => void;
  handleClose: () => void;
  handleClickMenu: (event: React.MouseEvent<HTMLElement>) => void;
  title: string;
  sx?: React.CSSProperties; // Define the type for sx prop
  informationUser: { [key: string]: string };
  anchorEl;
  open: boolean;
}


const UserCard = ({
  title,
  sx,
  handleClick,
  handleClickMenu,
  anchorEl,
  imageSrc,
  handleClose,
  informationUser,
  open,
  ...props
}: LotsCardProps) => {
  const sideBarType = useSelector<RootState, GlobalSliceState["sideBarType"]>(
    (state) => state.globaleState.sideBarType
  );

  return (
    <Box sx={sx}>
        {!sideBarType ? (
        <Info
          handleClick={handleClick}
          handleClickMenu={handleClickMenu}
          anchorEl={anchorEl}
          handleClose={handleClose}
          informationUser={informationUser}
          open={open}
          title={title}
          sx={sx}
        />
      ) : (
        <FormCreate />
      )}
    </Box>
  );
};

export default UserCard;


const Info = ({
  title,
  sx,
  handleClick,
  handleClickMenu,
  anchorEl,
  handleClose,
  informationUser,
  open,
}: InfoProps) => {
  const theme = useTheme();

  return (
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
        <MenuItem onClick={handleClose}>Edit {title}</MenuItem>
      </Menu>
    </Box>

    <Stack spacing={1} display="flex" alignItems="center" mb="2rem">
      {Object.entries(informationUser).map(([key, value]) => {
        if (key === "profilePicture") {
          return (
            <Box
              key={key} // Add a unique key prop
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
              key={key} // Add a unique key prop
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
            <Box key={key}>
              {" "}
              {/* Add a unique key prop */}
              <Pills
                text={RoleColors.map((element) => {
                  if (element.id === value) {
                    return element.role;
                  }
                })}
                bgColorPill={RoleColors.map((element) => {
                  if (element.id === value) {
                    return element.color;
                  }
                })}
              />
            </Box>
          );
        } else {
          return null; // Return null for other cases if needed
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
  );
};

const FormCreate = () => {
  return <></>;
};