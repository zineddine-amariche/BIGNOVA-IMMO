import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import Body from "../../../../components/Layouts/Body";
import { Formik } from "formik";
import InputFeilds from "../../../../components/utils/Inputs/InputFeilds";
import Space from "../../../../components/Layouts/Space";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import RowBox from "../../../../components/Layouts/RowBox";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const EditProfile = ({handlClose}) => {
  const navigate = useNavigate();

  const theme = useTheme();
  const initialValues = {
    nom: "John",
    tel: "0782205066",
    email: "john@gmail.com",
    adresse: "Bejaia",
    prenom: "Dev",
    profession: "Ingenieur en dev",
  };

  const validationSchema = Yup.object().shape({
    intitule: Yup.string().required("Intitulé est obligatoire"),
    nom: Yup.string().required("Nom est obligatoire"),
    prenom: Yup.string().required("Prenom est obligatoire"),
    tel: Yup.string().required("Téléphone est obligatoire"),
    email: Yup.mixed().required("Email est obligatoire"),
    adresse: Yup.string().required("Adresse est obligatoire"),
    profession: Yup.string(),
  });
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.neutral.dark,
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log("values", values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          setFieldTouched,
        }) => {
          return (
            <>
              <RowBox>
                <InputFeilds
                  name="nom"
                  label={"Nom"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nom}
                  id="nom"
                  required={true}
                  error={errors.nom && touched.nom}
                  helperText={errors.nom && touched.nom ? errors.nom : ""}
                />

                <InputFeilds
                  name="email"
                  label={"Email"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  id="email"
                  required={true}
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email ? errors.email : ""}
                />
              </RowBox>

              <RowBox>
                <InputFeilds
                  name="prenom"
                  label={"Prenom"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prenom}
                  id="prenom"
                  required={true}
                  error={errors.prenom && touched.prenom}
                  helperText={
                    errors.prenom && touched.prenom ? errors.prenom : ""
                  }
                />

                <InputFeilds
                  name="tel"
                  label={"N° téléphone "}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tel}
                  id="tel"
                  required={true}
                  error={errors.tel && touched.tel}
                  helperText={errors.tel && touched.tel ? errors.tel : ""}
                />
              </RowBox>
              <RowBox>
                <InputFeilds
                  name="profession"
                  label={"Profession"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.profession}
                  id="profession"
                />

                <InputFeilds
                  name="adresse"
                  label={"Adresse"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.adresse}
                  id="adresse"
                  required={true}
                  error={errors.adresse && touched.adresse}
                  helperText={
                    errors.adresse && touched.adresse ? errors.adresse : ""
                  }
                />
              </RowBox>
              <Space space={20} />

              <div style={{ float: "right" }}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  size="medium"
                  style={{
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.background.default,
                  }}
                  type="submit"
                  sx={{ marginRight: 2 }}
                  onClick={handleSubmit}
                >
                  Valider
                </Button>
                <Button
                  variant="contained"
                  endIcon={<CloseIcon />}
                  size="medium"
                  color="error"
                  onClick={handlClose}
                >
                  Annuler
                </Button>
              </div>
            </>
          );
        }}
      </Formik>
    </Box>
  );
};

export default EditProfile;
