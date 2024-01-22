import { Typography, useTheme, TypographyProps } from "@mui/material";
import React from "react";

interface PrimaryTextProps extends TypographyProps {
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  text: React.ReactNode;
  lineHeight?: string;
  mr?: string | number;
  cursor?: boolean;
  maxWidth?: string | number;
  backgroundColor?: string;
  textDecoration?: boolean;
}

export const PrimaryText: React.FC<PrimaryTextProps> = ({
  fontSize,
  fontWeight,
  color,
  text,
  lineHeight,
  mr,
  cursor,
  maxWidth,
  backgroundColor,
  textDecoration,
}) => {
  const theme = useTheme();

  return (
    <Typography
      fontWeight={fontWeight}
      fontSize={fontSize}
      maxWidth={maxWidth}
      lineHeight={lineHeight ? lineHeight : "30px"}
      sx={{
        color: color ? color : theme.palette.primary.dark,
        mr: mr ? mr : 0,
        cursor: cursor ? "pointer" : "default",
        backgroundColor: backgroundColor,
        textDecoration: textDecoration ? "underline" : "none",
      }}
    >
      {text}
    </Typography>
  );
};


// import { Typography, useTheme } from "@mui/material";
// import React from "react";

// export const PrimaryText = ({
//   fontSize,
//   fontWeight,
//   color,
//   text,
//   lineHeight,
//   mr,
//   cursor,
//   maxWidth,
//   backgroundColor,
//   textDecoration,
// }) => {
//   const theme = useTheme();

//   return (
//     <Typography
//       fontWeight={fontWeight}
//       fontSize={fontSize}
//       maxWidth={maxWidth}
//       lineHeight={lineHeight ? lineHeight : "30px"}
//       sx={{
//         color: color ? color : theme.palette.primary.dark,
//         mr: mr ? mr : 0,
//         cursor: cursor ? "pointer" : "default",
//         backgroundColor: backgroundColor,
//         textDecoration: textDecoration ? "underline" : "none",
//       }}
//     >
//       {text}
//     </Typography>
//   );
// };
