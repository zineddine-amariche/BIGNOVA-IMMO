import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useTheme,FormHelperText,Stack } from "@mui/material"
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
 
    inputStyles: {
      flexGrow: 1,
      color: "#FFF",
      "&.MuiInputBase-input MuiOutlinedInput-input": {
        color: theme.palette.primary.light,
        backgroundColor: "#FFF",
      },
      "& .Mui-focused": {
        color: "#237a57",
        fontWeight: "bold",
      },
  
  
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: ".5px solid #ccc",
        },
        "&:hover fieldset": {
          border: "2px solid #237a57",
        },
        "&.Mui-focused fieldset": {
          border: "2px solid #237a57",
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
  
      "&.MuiFormLabel-root":{
        color: "#FFF",
      },
  
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: ".5px solid #ccc",
        color: "#FFF",
  
        },
        "&:hover fieldset": {
          border: "2px solid #237a57",
        color: "#FFF",
  
        },
        "&.Mui-focused fieldset": {
          border: "2px solid #237a57",
        color: "#FFF",
  
        },
      },
    },
  

  }));

  export default function DatePickers({id,label,onChange,onBlur,value,error,margin,helperText,defaultValue}) {
    const { mode } = useSelector((state) => state.AppTheme);
    const classes = useStyles(mode);
    const theme = useTheme();
  
    return (
     
        <TextField
          id={id}
          label={label}
          type="date"
          variant="outlined"
          defaultValue={defaultValue}
          onChange={(val) => {
            if(margin){
              onChange(val.target.value);
            }else{
    
              onChange(val);
            }
          }}
          onBlur={onBlur}
          value={value}
          className={mode == "dark" ? classes.inputStyles : classes.inputStylesDark}
          InputLabelProps={{
            shrink: true,
            style: { color: theme.palette.secondary.light },
          }}
          InputProps={{
            style: { color: theme.palette.neutral.dark },
          }}
          fullWidth
          
          error={error}
          style={{ marginRight: margin ? "0px" : "20px", }}
          helperText={helperText}
        />
        
    );
  }
