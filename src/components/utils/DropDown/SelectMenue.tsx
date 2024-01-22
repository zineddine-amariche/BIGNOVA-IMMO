import React, { useState, ChangeEvent, MouseEvent, ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  FormHelperText,
  Stack,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";

interface SelectOption {
  value: string;
  name: string;
}

interface SelectMenueProps {
  label: string;
  name: string;
  data: SelectOption[];
  handleOpen: (value: number | any ) => void;
  selectionTitle: string;
  error: boolean;
  helperText: string;
  value: number | string;
  onBlur?: (event: ChangeEvent<{ value: unknown }>) => void;
  marginRight?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  renderValue?: (selected: unknown) => ReactNode;
}

const useStyles = makeStyles((theme) => ({
  select: {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #237a57",
    },

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      paddingLeft: "20px",
      width: "100%",
    },
  },
  menuItem: {
    "&:hover": {
      background: "#237a5709",
    },
    color: "#000",
  },

  icon: {
    fill: theme.palette.info.contrastText,
  },
  iconDark: {
    fill: "#237a57",
  },
}));

const SelectMenue: React.FC<SelectMenueProps> = ({
  label,
  name,
  data,
  handleOpen,
  selectionTitle,
  error,
  helperText,
  value,
  onBlur,
  marginRight,
  disabled,
  multiple,
  renderValue,
}) => {
  const theme = useTheme();
  const { mode } = useSelector((state: RootState) => state.AppTheme);
 
  const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
    const selectedValue = event.target.value as number; // Update the type if necessary
    handleOpen(selectedValue);
  };
  
  const classes = useStyles();

  return (
    <Stack
      width={"100%"}
      mt={{
        xs: 2,
        sm: 2,
        lg: 1.5,
        md: 2,
      }}
    >
      <FormControl>
        {!value && (
          <InputLabel id="demo-simple-select" style={{ paddingLeft: 10 }}>
            {label}
          </InputLabel>
        )}

        <Select
          id={"demo-simple-select"}
          value={value}
          onChange={handleChange}
          variant="outlined"
          style={{
            flexGrow: 1,
            marginRight: marginRight ? "20px" : "0px",
            color: theme.palette.secondary.light,
            border: `.2px solid ${
              error ? theme.palette.error.main : theme.palette.secondary.light
            }`,
          }}
          className={classes.select}
          inputProps={{
            classes: {
              icon: mode === "light" ? classes.icon : classes.iconDark,
            },
          }}
          error={error}
          onBlur={onBlur}
          disabled={disabled}
          multiple={multiple}
          renderValue={renderValue}
        >
          <MenuItem value="" disabled>
            {selectionTitle}
          </MenuItem>
          {data.map((item) => (
            <MenuItem
              key={item.value}
              classes={{ root: classes.menuItem }}
              value={item.value}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormHelperText sx={{ color: theme.palette.error.main, pl: 3 }}>
        {helperText}
      </FormHelperText>
    </Stack>
  );
};

export default SelectMenue;


// import React, { useState } from "react";

// import { makeStyles } from "@material-ui/core/styles";
// import { Box, FormHelperText, Stack, useTheme } from "@mui/material";
// import { useSelector } from "react-redux";
// import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   select: {
//     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//       border: "1px solid #237a57",
//     },

//     [theme.breakpoints.down("md")]: {
//       flexDirection: "column",
//       paddingLeft: "20px",
//       width: "100%",
//     },
//   },
//   menuItem: {
//     "&:hover": {
//       background: "#237a5709",
//     },
//     color: "#000",
//   },

//   icon: {
//     fill: theme.palette.info.contrastText,
//   },
//   iconDark: {
//     fill: "#237a57",
//   },
// }));

// const SelectMenue = ({
//   label,
//   name,
//   data,
//   handleOpen,
//   selectionTitle,
//   error,
//   helperText,
//   value,
//   onBlur,
//   marginRight,
//   disabled,
//   multiple,
//   renderValue,
// }) => {
//   const theme = useTheme();
//   const { mode } = useSelector((state) => state.theme);

//   const handleChange = (event) => {
//     handleOpen(event.target.value);
//   };
//   const classes = useStyles();

//   return (
//     <Stack
//       width={"100%"}
//       mt={{
//         xs: 2,
//         sm: 2,
//         lg: 1.5,
//         md: 2,
//       }}
//     >
//       <FormControl>
//         {!value && (
//           <InputLabel id="demo-simple-select" style={{ paddingLeft: 10 }}>
//             Selectionner un client *
//           </InputLabel>
//         )}

//         <Select
//           id={"demo-simple-select"}
//           value={value}
//           onChange={handleChange}
//           // displayEmpty
//           variant="outlined"
//           style={{
//             flexGrow: 1,
//             marginRight: marginRight ? "20px" : "0px",
//             color: theme.palette.secondary.light,
//             border: `.2px solid ${
//               error ? theme.palette.error.main : theme.palette.secondary.light
//             }`,
//           }}
//           className={classes.select}
//           inputProps={{
//             classes: {
//               icon: mode == "light" ? classes.icon : classes.iconDark,
//             },
//           }}
//           error={error}
//           onBlur={onBlur}
//           disabled={disabled}
//           renderValue={renderValue}
//         >
//           <MenuItem value="" disabled>
//             {selectionTitle}
//           </MenuItem>
//           {data.map((item, index) => {
//             return (
//               <MenuItem
//                 key={index}
//                 classes={{ root: classes.menuItem }}
//                 value={item.value}
//               >
//                 {item.name}
//               </MenuItem>
//             );
//           })}
//         </Select>
//       </FormControl>
//       <FormHelperText sx={{ color: theme.palette.error.main, pl: 3 }}>
//         {helperText}
//       </FormHelperText>
//     </Stack>
//   );
// };
// export default SelectMenue;
