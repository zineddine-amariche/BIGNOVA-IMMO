import React, { useState } from "react";
import { Box, Typography, useTheme, Stack } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import EditIcon from "@material-ui/icons/Edit";

import Space from "../../../components/Layouts/Space";
import EditProfile from "./formEditProfile";
import { PrimaryText } from "../../../components/utils/typography";
import { useSelector } from "react-redux";
import Head from "../../../components/Layouts/Head";

const Profile = () => {
  const theme = useTheme();
  const [clicked, setclicked] = useState(false);
  const { result } = useSelector((state) => state.auth);
  return (
    <Box sx={{ height: "100%", bgcolor: theme.palette.neutral.main }}>
      <Head title={`Informations ${result?.firstName}`} />
      <BodyInformations clicked={clicked} />
    </Box>
  );
};

export default Profile;

const BodyInformations = ({ clicked }) => {
  const theme = useTheme();
  const { result } = useSelector((state) => state.auth);
  return (
    <>
      <Box sx={{ p: 3 }}>
        <Card
          sx={{
            width: "100%",
            backgroundColor: theme.palette.background.default,
            color: theme.palette.neutral.dark,
          }}
        >
          <CardHeader
            style={{
              backgroundColor: theme.palette.neutral.dark,
              color: theme.palette.background.default,
            }}
            title="Informations"
          ></CardHeader>
          <CardContent>
            <Stack
              flexDirection="row"
              // justifyContent="space-between"
              paddingTop="15px"
              direction={{
                xs: "column",
                sm: "column",
                lg: "row",
                md: "column",
              }}
            >
              {!clicked ? (
                <Stack spacing={20} direction="row">
                  <Box style={{ paddingBottom: 15 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={600}
                    >
                      Nom
                    </Typography>
                    <Typography variant="body2" style={{ paddingBottom: 10 }}>
                      {result?.firstName} {" "}{result?.lastName}
                    </Typography>

                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={600}
                    >
                      Role
                    </Typography>
                    <Typography variant="body2">{result?.role}</Typography>
                  </Box>

                  <Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={600}
                    >
                      Email
                    </Typography>
                    <Typography variant="body2" style={{ paddingBottom: 10 }}>
                      {result.email}
                    </Typography>

                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={600}
                    >
                      Numero de telephone
                    </Typography>
                    <Typography variant="body2" style={{ paddingBottom: 10 }}>
                    {result.phone}
                    </Typography>

                 
                   
                  </Box>
                </Stack>
              ) : (
                <EditProfile
                  style={{
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.neutral.dark,
                  }}
                  handlClose={() => {
                    // setclicked(false);
                  }}
                />
              )}
            </Stack>
          </CardContent>
        </Card>
        <Space space={20} />

        {!clicked ? (
          <Button
            variant="contained"
            endIcon={<EditIcon />}
            size="medium"
            style={{
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.background.default,

              float: "right",
            }}
            onClick={() => setclicked(true)}
          >
            Modifier
          </Button>
        ) : null}

        <Space space={20} />
      </Box>
    </>
  );
};
