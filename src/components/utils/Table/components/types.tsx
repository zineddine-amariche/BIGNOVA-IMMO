import { BoxProps } from "@mui/material";
import { ForwardedRef, MutableRefObject } from "react";

export interface HeaderProps  {
  handleClick: () => void;
  handleClose: () => void;
  handleClickMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorEl;
  open: boolean;
  text: string;
  informationUser?: { [key: string]: string   | undefined};
  HandlDelete?: (values: any) => void | undefined;
  handlePrint?: (values: any) => void | undefined;
  title:string

}

export interface InfoProps extends BoxProps {
  handleClick: () => void;
  handleClose: () => void;
  handleClickMenu: (event: React.MouseEvent<HTMLElement>) => void;
  title: string;
  sx?: React.CSSProperties; // Define the type for sx prop
  informationUser: { [key: string]: string };
  anchorEl;
  open: boolean;
  text: string;
  HandlDelete?: (values: any) => void | undefined;
  handlePrint?: (values: any) => void | undefined;

}
