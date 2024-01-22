import React from "react";
import {
  Box,
  ListItemIcon,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import HeaderInfo from "../../../HeaderInfo";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import ListItemText from "@mui/material/ListItemText";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import DateRangeIcon from "@mui/icons-material/DateRange";
import {
  EtatColors,
  RoleColors,
} from "../../../../../../../../data/userMockData";
import { makeStyles } from "@material-ui/core/styles";
import UsePillsEtat from "../../../../usePillsEtat";
import { InfoProps } from "../../../../types";

const Info = ({
  title,
  sx,
  handleClick,
  handleClickMenu,
  anchorEl,
  handleClose,
  informationUser,
  open,
  text,
  HandlDelete,
  handlePrint,

}: InfoProps) => {
  const theme = useTheme();

  return (
    <Box>
      <HeaderInfo
        handlePrint={handlePrint}
        handleClick={handleClick}
        handleClickMenu={handleClickMenu}
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={open}
        text={text}
        HandlDelete={() => {
          let obj = {
            id: informationUser._id,
          };
          if (HandlDelete) {
            HandlDelete(obj);
          }
        }}
        informationUser={informationUser}
        title={title}
      />
      <CustomDivider text="More information" />
 
      <Stack spacing={1} display="flex" alignItems="center" mb="2rem">
        {Object.entries(informationUser).map(([key, value]) => {
          if (key === "etat") {
            const selectedEtat = EtatColors.find(
              (element) => element.id == value
            );
            if (selectedEtat) {
              return (
                <Box key={key} bgcolor={selectedEtat.color} sx={{borderRadius:8}}>
                  <UsePillsEtat
                    text={selectedEtat.etat}
                    bgColorPill={selectedEtat.color}
                  />
                </Box>
              );
            }
          }
          return null;
        })}
      </Stack>

      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{ my: ".5rem", color: theme.palette.primary.light }}
      >
        <List>
          {Object.entries(informationUser).map(([key, value]) => {
            if (
              key === "description" ||
              key === "adresse" ||
              key === "name" ||
              key === "datestart"
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
                        case "description":
                          return <PhoneIcon />;
                        case "adresse":
                          return <AlternateEmailIcon />;
                        case "name":
                          return <MyLocationIcon />;
                        case "datestart":
                          return <DateRangeIcon />;
                      }
                    })()}
                  </ListItemIcon>

                  <ListItemText
                    primary={` ${key.charAt(0).toUpperCase() + key.slice(1)}:`}
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

export default Info;

const CustomDivider = ({ text }: { text: string }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.customDivider}>
      <Typography
        variant="h5"
        style={{
          color: theme.palette.primary.light,
        }}
      >
        {text}
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  customDivider: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    "&::before, &::after": {
      content: "''",
      flex: 1,
      borderBottom: `1px solid ${theme.palette.grey[700]}`, // Replace "red" with your desired color
    },
    "&::before": {
      marginRight: theme.spacing(1),
    },
    "&::after": {
      marginLeft: theme.spacing(1),
    },
  },
}));


