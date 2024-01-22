import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { useTheme } from "@mui/material";
import UserCard from "./Cards/userCard/usersCard";
import ProjetsCard from "./Cards/ProjectCard/projetsCard";
// import TypelotsCard from "./Cards/typelotsCard";
import LotsCard from "./Cards/lotsCard/lotsCard";
import TypeLotsCard from "./Cards/typeLotsCard/typelotsCard";
import { createLotHooks } from "./Cards/lotsCard/Hooks/useCreateLots";

export interface LotsCardProps {
  handleClick: () => void;
  handleClose: () => void;
  handleClickMenu: (event: React.MouseEvent<HTMLElement>) => void;
  title: string;
  // sx?: React.CSSProperties; // Define the type for sx prop
  sx?: BoxProps["sx"]; // Use the sx prop type from BoxProps

  informationUser: { [key: string]: string };
  imageSrc: string;
  anchorEl;
  open: boolean;
  create: boolean;
  // HandlDelete?: (values: any) => void | undefined;

  HandlDelete?: (values: any) => Promise<void> | undefined; // Update the type

  handlePrint?: (values: any) => void | undefined;
  ref
}

const InfoCard = React.forwardRef<HTMLDivElement, LotsCardProps>((props, ref) => {
  const theme = useTheme();
  const { onDelete } = createLotHooks();

  const { informationUser, handleClick, title, handlePrint } = props;
  const [anchorEl, setAnchorEl] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  const paperStyle1 = {
    padding: ".5rem",
    height: "100%",
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.default,
  };

  const renderStep = () => {
    switch (title) {
      case "Projets":
        return (
          <ProjetsCard
            {...props}
            sx={paperStyle1}
            handleClick={handleClick}
            handleClickMenu={handleClickMenu}
            anchorEl={anchorEl}
            handleClose={handleClose}
            informationUser={informationUser}
            open={open}
            // HandlDelete={() => {}}
            handlePrint={handlePrint}
            title={title}
          />
        );
      case "Type de Lot":
        return (
          <TypeLotsCard
            {...props}
            sx={paperStyle1}
            handleClick={handleClick}
            handleClickMenu={handleClickMenu}
            anchorEl={anchorEl}
            handleClose={handleClose}
            informationUser={informationUser}
            open={open}
            // HandlDelete={() => {}}
            handlePrint={handlePrint}
            title={title}

          />
        );

      case "Lots":
        return (
          <LotsCard
            {...props}
            sx={paperStyle1}
            handleClick={handleClick}
            handleClickMenu={handleClickMenu}
            anchorEl={anchorEl}
            handleClose={handleClose}
            informationUser={informationUser}
            open={open}
            HandlDelete={onDelete}
            handlePrint={handlePrint}
            title={title}

          />
        );
      case "Acquereur":
      case "Utilisateur":
        return (
          <UserCard
            {...props}
            sx={paperStyle1}
            handleClick={handleClick}
            handleClickMenu={handleClickMenu}
            anchorEl={anchorEl}
            handleClose={handleClose}
            informationUser={informationUser}
            open={open}
            // HandlDelete={() => {}}
            handlePrint={handlePrint}
            title={title}

          />
        );
      default:
        // Handle the default case here, if needed
        return null;
    }
  };

  return <Box height={"100%"}>{renderStep()}</Box>;
})
export default InfoCard;


 