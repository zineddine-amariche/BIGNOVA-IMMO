import React, { ForwardedRef, LegacyRef, useRef } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

import Stack from "@mui/material/Stack";
import { LotsCardProps } from "../../useCardInfo";
import { GlobalSliceState } from "../../../../../../Redux/global/slice";
import { RootState } from "../../../../../../Redux/store";
import { useSelector } from "react-redux";
import CreateProjectForm from "./components/CreateProjectForm";
import HeaderInfo from "../HeaderInfo";
import Info from "./components/Info";
import { HeaderProps } from "../../types";
import { createProjectHooks } from "./Hooks/useCreateProject";

const ProjetsCard = ({
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
  const { onDelete } = createProjectHooks();

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
          text={"Edit projet"}
          HandlDelete={() => {
            onDelete(informationUser.id);
          }}
        />
      ) : (
        <FormCreateProject
          handleClick={handleClick}
          handleClickMenu={handleClickMenu}
          anchorEl={anchorEl}
          handleClose={handleClose}
          open={open}
          text={"Voir Project"}
          title={title}
        />
      )}
    </Box>
  );
};

export default ProjetsCard;

const FormCreateProject = ({
  handleClick,
  handleClickMenu,
  anchorEl,
  handleClose,
  open,
  text,
  title,
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
        title={title}
      />

      <Stack display="flex" alignItems={"center"}>
        <CreateProjectForm />
      </Stack>
    </Box>
  );
};
