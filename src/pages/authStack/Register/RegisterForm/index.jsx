import React from "react";
import { PrimaryText } from "../../../../components/utils/typography";
import {  CircularProgress, Stack, useTheme } from "@mui/material";
import { registerHooks } from "../hooks/registerHooks";
import { Formik } from "formik";
import Space from "../../../../components/Layouts/Space";
import { Button } from '@material-ui/core';
import InputFeilds from "../../../../components/utils/Inputs/InputFeilds";
import RowBox from "../../../../components/Layouts/RowBox";
import { Link } from "react-router-dom";
import SelectMenue from "../../../../components/utils/DropDown/SelectMenue";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const options = [
  { value: 1, name: "ADMIN" },
  { value: 2, name: "MANAGER" },
  { value: 3, name: "ACQUEREURE" },
];

const RegisterForm = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const {
    initialState,
    validationSchema,
    OnSubmit,
    hidePass,
    HandlehidePass,
    hidePass2,
    HandlehidePass2,
  } = registerHooks();
  const { isLoading } = useSelector((state) => state.auth);

  return (
    <Stack
      p={5}
      bgcolor={theme.palette.primary.dark}
      width={{
        xs: "93%",
        sm: "80%",
        lg: "40%",
        md: "60%",
      }}
      borderRadius={2}
    >
      <PrimaryText
        fontWeight={"500"}
        fontSize={"25px"}
        text={`${t('greeting')} to bignova immo !`}
        color={theme.palette.primary.light}
        cursor
      />
      <PrimaryText
        fontWeight={"500"}
        fontSize={"18px"}
        text={"Please register to continue"}
        color={theme.palette.primary.light}
        cursor
        lineHeight={2.5}
      />

      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          OnSubmit(values);
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
          const {
            email,
            confirmPassword,
            phone,
            password,
            birthDay,
            lastName,
            firstName,
            role
          } = values;
 
          return (
            <>
              <Space space={"20px"} />
              <Stack width={"100%"} spacing={3} display="flex">
                <Stack display={"flex"} direction="row" gap={2}>
                  <InputFeilds
                    label={"First name"}
                    error={!!(errors.firstName && touched.firstName)}
                    helperText={
                      errors.firstName && touched.firstName
                        ? errors.firstName
                        : ""
                    }
                    value={firstName}
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    id={"outlined-controlled"}
                    name={"firstName"}
                    onBlur={() => {
                      setFieldTouched("firstName", true);
                    }}
                    margin
                  />

                  <InputFeilds
                    label={"Last name"}
                    error={!!(errors.lastName && touched.lastName)}
                    helperText={
                      errors.lastName && touched.lastName ? errors.lastName : ""
                    }
                    value={lastName}
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    id={"outlined-controlled"}
                    name={"lastName"}
                    onBlur={() => {
                      setFieldTouched("lastName", true);
                    }}
                    margin
                  />
                </Stack>

                <Stack display={"flex"} direction="row" gap={2}>
                  <InputFeilds
                    label={"BirthDay"}
                    error={!!(errors.birthDay && touched.birthDay)}
                    helperText={
                      errors.birthDay && touched.birthDay ? errors.birthDay : ""
                    }
                    value={birthDay}
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    id={"outlined-controlled"}
                    name={"birthDay"}
                    onBlur={() => {
                      setFieldTouched("birthDay", true);
                    }}
                    type="date"
                    shrink={true}
                  />
                  <InputFeilds
                    label={"Phone number"}
                    error={errors.phone && touched.phone}
                    helperText={
                      errors.phone && touched.phone ? errors.phone : ""
                    }
                    value={phone}
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    id={"outlined-controlled"}
                    name={"phone"}
                    onBlur={() => {
                      setFieldTouched("phone", true);
                    }}
                    margin
                  />
                </Stack>

                <InputFeilds
                  label={"E-mail"}
                  error={!!(errors.email && touched.email)}
                  helperText={errors.email && touched.email ? errors.email : ""}
                  value={email}
                  onChange={handleChange}
                  autoFocus={true}
                  autoComplete="email"
                  required={true}
                  id={"outlined-controlled"}
                  name={"email"}
                  onBlur={() => {
                    setFieldTouched("email", true);
                  }}
                />


                <SelectMenue
                  name="role"
                  selectionTitle="Select a role *"
                  data={options}
                  handleOpen={(val) => {
                    setFieldValue("role", val);
                  }}
                  error={!!(errors.role && touched.role && errors.role)}
                  helperText={
                    errors.role && touched.role ? errors.role : ""
                  }
                  value={values.role}
                  onBlur={() => {
                    setFieldTouched("role", true);
                  }}
                  marginRight
                />

                <InputFeilds
                  error={!!(errors.password && touched.password)}
                  helperText={
                    errors.password && touched.password ? errors.password : ""
                  }
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  onBlur={() => {
                    setFieldTouched("password", true);
                  }}
                  label="Password"
                  name={"password"}
                  value={password}
                  hidePass={hidePass}
                  HandlehidePass={HandlehidePass}
                  type={hidePass ? "text" : "password"}
                />

                <InputFeilds
                  error={!!(errors.confirmPassword && touched.confirmPassword)}
                  helperText={
                    errors.confirmPassword && touched.confirmPassword
                      ? errors.confirmPassword
                      : ""
                  }
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  onBlur={() => {
                    setFieldTouched("confirmPassword", true);
                  }}
                  label="confirm password"
                  name={"confirmPassword"}
                  value={confirmPassword}
                  hidePass={hidePass2}
                  HandlehidePass={HandlehidePass2}
                  type={hidePass2 ? "text" : "password"}
                />
              </Stack>
              <Space />

              <RowBox>
                <PrimaryText
                  fontWeight={"500"}
                  fontSize={"14px"}
                  text={"You have an account ?  "}
                  color={theme.palette.primary.contrastText}
                  cursor
                  lineHeight={3.5}
                  mr={1}
                />
                <Link to={"/login"}>
                  <PrimaryText
                    fontWeight={"500"}
                    fontSize={"14px"}
                    text={"Login"}
                    color={theme.palette.primary.light}
                    cursor
                    lineHeight={3.5}
                    textDecoration
                  />
                </Link>
              </RowBox>

              <Button
                variant="contained"
                style={{
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.dark,
                  fontSize: 17,
                  mt: 3,
                  width: "100%",
                  alignSelf: "center",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                    color: theme.palette.primary.light,
                  },
                }}
                onClick={handleSubmit}
                pt={3}
                startIcon={isLoading?<CircularProgress size={25}  sx={{p:"5px"}}/>:<Space space={0}/>}

              >
                
                { !isLoading? "Register" :''}
              </Button>
            </>
          );
        }}
      </Formik>
    </Stack>
  );
};

export default RegisterForm;

<></>;
