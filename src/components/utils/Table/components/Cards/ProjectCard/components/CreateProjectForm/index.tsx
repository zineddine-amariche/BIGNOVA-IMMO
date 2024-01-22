import React from "react";
import { Button, Stack, useTheme } from "@mui/material";
import { createProjectHooks } from "../../Hooks/useCreateProject";
import { PrimaryText } from "../../../../../../typography";
import { Formik, FormikValues, FormikHelpers } from "formik";
import Space from "../../../../../../../Layouts/Space";
import InputFeilds from "../../../../../../Inputs/InputFeilds";
import SelectMenue from "../../../../../../DropDown/SelectMenue";

interface Option {
  value: number;
  name: string;
}

const options: Option[] = [
  { value: 1, name: "En cours" },
  { value: 2, name: "Terminés" },
  { value: 3, name: "Futurs projets" },
];

const CreateProjectForm: React.FC = () => {
  const theme = useTheme();

  const { initialState, validationSchema, onSubmit } = createProjectHooks();

  return (
    <Stack
      p={3}
      bgcolor={theme.palette.primary.dark}
      width={"100%"}
      borderRadius={2}
      mt={1}
    >
      <PrimaryText
        fontSize={"25px"}
        text={"Create a new project !"}
        color={theme.palette.primary.light}
        cursor
      />

      <Space space={20} />
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          onSubmit(values);
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
          const { name, adresse, etat, datestart, datefin, description } =
            values;

          return (
            <>
              <Stack width={"100%"} spacing={3} display="flex">
                <InputFeilds
                  label={"name"}
                  error={errors.name && touched.name}
                  helperText={errors.name && touched.name ? errors.name : ""}
                  value={name}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"name"}
                  onBlur={() => {
                    setFieldTouched("name", true);
                  }}
                  margin
                />

                <InputFeilds
                  label={"adresse"}
                  error={errors.adresse && touched.adresse}
                  helperText={
                    errors.adresse && touched.adresse ? errors.adresse : ""
                  }
                  value={adresse}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"adresse"}
                  onBlur={() => {
                    setFieldTouched("adresse", true);
                  }}
                  margin
                />

                <InputFeilds
                  label={"description"}
                  error={errors.description && touched.description}
                  helperText={
                    errors.description && touched.description
                      ? errors.description
                      : ""
                  }
                  value={description}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"description"}
                  onBlur={() => {
                    setFieldTouched("description", true);
                  }}
                  margin
                />

                <InputFeilds
                  label={"Start day"}
                  error={errors.datestart && touched.datestart}
                  helperText={
                    errors.datestart && touched.datestart
                      ? errors.datestart
                      : ""
                  }
                  value={datestart}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"datestart"}
                  onBlur={() => {
                    setFieldTouched("datestart", true);
                  }}
                  type="date"
                  shrink={true}
                />

                <InputFeilds
                  label={"End day"}
                  error={errors.datefin && touched.datefin}
                  helperText={
                    errors.datefin && touched.datefin ? errors.datefin : ""
                  }
                  value={datefin}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"datefin"}
                  onBlur={() => {
                    setFieldTouched("datefin", true);
                  }}
                  type="date"
                  shrink={true}
                />

                <SelectMenue
                  name="etat"
                  selectionTitle="Select project status *"
                  data={options}
                  handleOpen={(val: number) => {
                    setFieldValue("etat", val);
                  }}
                  error={!!(errors.etat && touched.etat && errors.etat)}
                  helperText={errors.etat && touched.etat ? errors.etat : ""}
                  value={values.etat}
                  onBlur={() => {
                    setFieldTouched("etat", true);
                  }}
                  // marginRight
                  label={""}
                />
              </Stack>
              <Space space={30} />

              <Button
                variant="contained"
                style={{
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.dark,
                  fontSize: 17,
                  marginTop: 3,
                  width: "100%",
                  alignSelf: "center",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                    color: theme.palette.primary.light,
                  },
                }}
                onClick={handleSubmit}
                pt={3}
              >
                Create
              </Button>
            </>
          );
        }}
      </Formik>
    </Stack>
  );
};

export default CreateProjectForm;
