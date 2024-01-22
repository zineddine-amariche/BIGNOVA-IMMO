import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { BoxProps } from "@mui/material";
import { RootState } from "../../../../../../Redux/store";
import { useSelector } from "react-redux";
import { LotsCardProps } from "../../useCardInfo";
import { GlobalSliceState } from "../../../../../../Redux/global/slice";
import { HeaderProps } from "../../types";

import Info from "./components/Info";
import HeaderInfo from "../HeaderInfo";
import CreateLotsForm from "./components/CreateLotsForm";

export interface InfoProps extends BoxProps {
  handleClick: () => void;
  handleClose: () => void;
  handleClickMenu: (event: React.MouseEvent<HTMLElement>) => void;
  title: string;
  sx?: React.CSSProperties; // Define the type for sx prop
  informationUser: { [key: string]: string };
  anchorEl;
  open: boolean;

}

const LotsCard = ({
  title,
  sx,
  handleClick,
  handleClickMenu,
  anchorEl,
  imageSrc,
  handleClose,
  informationUser,
  open,
  HandlDelete,
  ...props
}: LotsCardProps) => {
  const sideBarType = useSelector<RootState, GlobalSliceState["sideBarType"]>(
    (state) => state.globaleState.sideBarType
  );



  return (
    <Box sx={sx}>
      {!sideBarType ? (
        <Info
          handleClick={handleClick}
          handleClickMenu={handleClickMenu}
          anchorEl={anchorEl}
          handleClose={handleClose}
          informationUser={informationUser}
          open={open}
          title={title}
          sx={sx as React.CSSProperties}
          text="Edit lots"
          // HandlDelete={HandlDelete}
          {...props}

        />
      ) : (
        <FormCreateProject
          handleClick={handleClick}
          handleClickMenu={handleClickMenu}
          anchorEl={anchorEl}
          handleClose={handleClose}
          open={open}
          text={"Voir lots"}
        />
      )}
    </Box>
  );
};

export default LotsCard;

const FormCreateProject = ({
  handleClick,
  handleClickMenu,
  anchorEl,
  handleClose,
  open,
  text,
}: HeaderProps) => {

  return (
    <Box>
      <HeaderInfo
        handleClick={handleClick}
        handleClickMenu={handleClickMenu}
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={open}
        text={text}
      />

      <Stack display="flex" alignItems={"center"}>
        <CreateLotsForm />
      </Stack>
    </Box>
  );
};
