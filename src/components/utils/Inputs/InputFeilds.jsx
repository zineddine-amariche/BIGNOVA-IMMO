import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { Visibility, VisibilityOff } from '@material-ui/icons';

const InputFeilds = (props) => {
  const {
    error,
    id,
    value,
    onChange,
    autoComplete,
    label,
    type,
    multiline,
    rows,
    onBlur,
    select,
    margin,
    required,
    helperText,
    name,
    handleBlur,
    marginRight,
    defaultValue,
    shrink,
    hidePass,
    HandlehidePass
  } = props;
  const { mode } = useSelector((state) => state.AppTheme);

  const classes = useStyles(mode);
  const theme = useTheme();

  const handleMouseDownPassword = (event) => event.preventDefault();
  return (
    <TextField
      name={name}
      error={error}
      value={value}
      helperText={helperText}
      className={mode == "dark" ? classes.inputStyles : classes.inputStylesDark}
      type={type}
      variant="outlined"
      margin="normal"
      id={id}
      label={label}
      autoComplete={autoComplete}
      onChange={(val) => {
        // if (margin) {
        //   onChange(val.target.value);
        // } else {
        //   onChange(val);
        // }
          onChange(val);

      }}
      multiline={multiline}
      minRows={rows}
      // onBlur={handleBlur}
      // defaultValue={defaultValue}
      onBlur={onBlur}
      fullWidth
      select={select}
      // style={{ marginRight: margin ? "0px" : "20px" }}
      InputLabelProps={{
        style: { color: theme.palette.primary.light },
        shrink: shrink,
      }}
      required={required}
      InputProps={{
        style: { color: theme.palette.neutral.dark },
        endAdornment: name == 'password' || name == 'confirmPassword' ? (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={HandlehidePass}
              onMouseDown={handleMouseDownPassword}
            >
              {hidePass ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
        :undefined
      }}
      

    />
  );
};

export default InputFeilds;

const useStyles = makeStyles((theme) => ({
  inputStyles: {
    flexGrow: 1,
    color: "#FFF",
    "&.MuiInputBase-input MuiOutlinedInput-input": {
      color: theme.palette.primary.light,
      backgroundColor: "#FFF",
    },
    "& .Mui-focused": {
      color: "#22407b",
      fontWeight: "bold",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: ".5px solid #ccc",
      },
      "&:hover fieldset": {
        border: "2px solid #22407b",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #22407b",
      },
    },
  },

  inputStylesDark: {
    flexGrow: 1,
    color: "#FFF",
    "& .MuiInputBase-input MuiOutlinedInput-input": {
      color: "#FFF",
      backgroundColor: "#FFF",
    },
    "& .Mui-focused": {
      color: "#FFF",
      fontWeight: "bold",
    },

    "&.MuiFormLabel-root": {
      color: "#FFF",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: ".5px solid #ccc",
        color: "#FFF",
      },
      "&:hover fieldset": {
        border: "2px solid #22407b",
        color: "#FFF",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #22407b",
        color: "#FFF",
      },
    },
  },
}));
