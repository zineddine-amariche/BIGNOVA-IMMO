import { Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import RowBox from "../../../../../components/Layouts/RowBox";
import Space from "../../../../../components/Layouts/Space";
import InputFeilds from "../../../../../components/utils/Inputs/InputFeilds";
import { PrimaryText } from "../../../../../components/utils/typography";
import { dashboardHooks } from "../../Hooks/dashboardHooks";
import { useTheme } from "@mui/material";

const ElearningForm = ({ handleMode }) => {
  const { initialState, validationSchema } = dashboardHooks();
  const theme = useTheme();

  return (
    <Stack px={3}>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          OnSubmit(values);
          handleMode(2);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          touched,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          setFieldTouched,
        }) => {
          const { dateFin, dateDebut, description, title } = values;

          return (
            <>
              <Space space={"20px"} />
              <Stack width={"100%"} spacing={3} display="flex">
              <InputFeilds
                value={title}
                label={"Ajouter un titre "}
                // margin
                onChange={handleChange}
                error={errors.title && touched.title}
                helperText={
                  errors.title && touched.title
                    ? errors.title
                    : ""
                }
                autoFocus={true}
                required={true}
                id={"outlined-controlled"}
                name={"title"}
                onBlur={() => {
                  setFieldTouched("title", true);
                }}
              />

                <InputFeilds
                  label={"Ajouter une date debut"}
                  value={dateDebut}
                  // margin
                  onChange={handleChange}
                  error={errors.dateDebut && touched.dateDebut}
                  helperText={
                    errors.dateDebut && touched.dateDebut
                      ? errors.dateDebut
                      : ""
                  }
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"dateDebut"}
                  onBlur={() => {
                    setFieldTouched("dateDebut", true);
                  }}
                  type="date"
                  shrink={true}
                />
                <InputFeilds
                  label={"Ajouter une date fin"}
                  value={dateFin}
                  // margin
                  onChange={handleChange}
                  error={errors.dateFin && touched.dateFin}
                  helperText={
                    errors.dateFin && touched.dateFin ? errors.dateFin : ""
                  }
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"dateFin"}
                  onBlur={() => {
                    setFieldTouched("dateFin", true);
                  }}
                  type="date"
                  shrink={true}
                />

                <InputFeilds
                  label={"Description"}
                  error={errors.description && touched.description}
                  helperText={
                    errors.description && touched.description
                      ? errors.description
                      : ""
                  }
                  value={description}
                  onChange={handleChange}
                  autoFocus={true}
                  autoComplete="description"
                  required={true}
                  id={"outlined-controlled"}
                  name={"description"}
                  onBlur={() => {
                    setFieldTouched("description", true);
                  }}
                  rows={4}
                  multiline={true}
                />
              </Stack>
              <Space />

              <Stack
                justifyContent="flex-end"
                maxWidth="100%"
                flexDirection="row"
                pt={3}
              >
                <Button
                  variant="contained"
                  sx={{
                    px: 5,
                    py: 1,
                    color: theme.palette.primary.light,
                    bgcolor: theme.palette.background.default,

                    fontSize: 17,
                  }}
                  onClick={handleSubmit}
                >
                  Create
                </Button>
              </Stack>
            </>
          );
        }}
      </Formik>
    </Stack>
  );
};

export default ElearningForm;
