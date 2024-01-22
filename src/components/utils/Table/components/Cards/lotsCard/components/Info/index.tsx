import React from "react";
import { Box, ListItemIcon, Stack, Typography, useTheme } from "@mui/material";
import { InfoProps } from "../../../../types";
import HeaderInfo from "../../../HeaderInfo";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import ListItemText from "@mui/material/ListItemText";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { EtatColors } from "../../../../../../../../data/userMockData";
import { makeStyles } from "@material-ui/core/styles";
import UsePillsEtat from "../../../../usePillsEtat";
import { createLotHooks } from "../../Hooks/useCreateLots";

const Info = ({
  handleClick,
  handleClickMenu,
  anchorEl,
  handleClose,
  informationUser,
  open,
  text,
  HandlDelete,
  ...props
}: InfoProps) => {
  const theme = useTheme();

  return (
    <Box>
      <HeaderInfo
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
        {...props}
        informationUser={informationUser}
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
                <Box
                  key={key}
                  bgcolor={selectedEtat.color}
                  sx={{ borderRadius: 8 }}
                >
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
              key === "numerodelot" ||
              key === "surfacetotal" ||
              key === "prix" ||
              key === "bloc" ||
              key === "etage" ||
              key === "createdAt" ||
              key === "surfacesansbalcon"
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
                        case "numerodelot":
                          return <PhoneIcon />;
                        case "surfacetotal":
                          return <AlternateEmailIcon />;
                        case "prix":
                          return <MyLocationIcon />;
                        case "etage":
                          return <DateRangeIcon />;
                        case "surfacesansbalcon":
                          return <DateRangeIcon />;
                        case "bloc":
                          return <DateRangeIcon />;
                        case "createdAt":
                          return <DateRangeIcon />;
                      }
                    })()}
                  </ListItemIcon>

                  <ListItemText
                    primary={` ${key.charAt(0).toUpperCase() + key.slice(1)}:`}
                    secondary={value as string}
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

{
  /* <Stack spacing={1} display="flex" alignItems="center" mb="2rem">
        {Object.entries(informationUser).map(([key, value]) => {
       if (key === "numerodelot") {
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
                {/* Add a unique key prop 
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
      </Stack> */
}
