import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useRef, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PrintIcon from "@mui/icons-material/Print";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../Redux/store";
import { GlobalSliceState } from "../../../../../../Redux/global/slice";
import { HeaderProps } from "../../types";
import { StyledButton } from "../../../../Button/Button.component";
import Space from "../../../../../Layouts/Space";
import FlexBetween from "../../../../../Layouts/FlexBetween";
import ReactToPrint from "react-to-print";
// import logo from "../../../../../../assets/logo.png";
import { PrimaryText } from "../../../../typography";
import { getCurrentDate } from "../../../../../../helpers/getnewdate";
import { images } from "../../../photos";

const HeaderInfo = ({
  handleClick,
  anchorEl,
  handleClose,
  open,
  text,
  HandlDelete,
  handlePrint,
  informationUser,
  title,
  ...props
}: HeaderProps) => {
  const theme = useTheme();
  const sideBarType = useSelector<RootState, GlobalSliceState["sideBarType"]>(
    (state) => state.globaleState.sideBarType
  );

  const [ModalShow, setModal] = useState(false);
  const [ShowDelete, setShowDelete] = useState(false);

  const handleCloseModal = () => {
    setModal(!ModalShow);
  };
  const handleCloseModalDelete = () => {
    setShowDelete(!ShowDelete);
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const styleWhite = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: `2px solid ${theme.palette.primary.dark}`,
    boxShadow: 24,
    p: 4,
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.main,
  };

  const componentRef = useRef();

  return (
    <Box display={"flex"} justifyContent={"space-between"} paddingX={".6rem"}>
      <IconButton
        onClick={handleClick}
        size="large"
        aria-label="return"
        component="span"
        style={{
          color: theme.palette.primary.light,
        }}
      >
        <KeyboardBackspaceIcon />
      </IconButton>

      <Box>
        {!sideBarType ? (
          <>
            <ReactToPrint
              trigger={() => (
                <Button sx={{ color: theme.palette.primary.light }}>
                  <PrintIcon fontSize="medium" sx={{ cursor: "pointer" }} />
                </Button>
              )}
              content={() => componentRef.current}
            />

            <Modal
              open={ModalShow}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>

            <Button
              sx={{ color: theme.palette.primary.light }}
              onClick={handleCloseModalDelete}
            >
              <DeleteIcon fontSize="medium" sx={{ cursor: "pointer" }} />
            </Button>

            <Modal
              open={ShowDelete}
              onClose={handleCloseModalDelete}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleWhite}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Warrning
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Are you sur you wanna delete this lot ?
                </Typography>
                <Space space={30} />

                <FlexBetween style={{ gap: 30 }}>
                  <StyledButton type onClick={handleCloseModalDelete}>
                    No
                  </StyledButton>
                  <StyledButton type={undefined} onClick={HandlDelete}>
                    yes
                  </StyledButton>
                </FlexBetween>
              </Box>
            </Modal>

            <Button
              sx={{ color: theme.palette.primary.light }}
              onClick={handleCloseModalDelete}
            >
              <MoreHorizIcon fontSize="large" sx={{ cursor: "pointer" }} />
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>{text}</MenuItem>
            </Menu>
          </>
        ) : null}
      </Box>
      <div style={{ display: "none" }}>
        <PrintContent
          ref={componentRef}
          informationUser={informationUser}
          title={title}
        />
      </div>
    </Box>
  );
};

export default HeaderInfo;

interface HeaderProps {
  // other props
  ref?: React.RefObject<HTMLDivElement> | undefined;
}

export const PrintContent = React.forwardRef<HTMLDivElement, HeaderProps>(
  (props, ref) => {
    const theme = useTheme();

    let date = getCurrentDate();

    const { informationUser } = props;
    return (
      <div
        ref={ref}
        style={{
          paddingTop: 2,
          paddingBottom: 4,
          color: "#111",
          padding: 30,
        }}
      >
        {/* {informationUser?._id} */}
        <Stack direction="row" display="flex" justifyContent={"space-between"}>
          <Stack
            style={{ alignItems: "center" }}
            direction="column"
            display="flex"
          >
            <Box
              m="2rem 0rem 1.4rem 20px"
              display={"flex"}
              alignItems="center"
              component={"img"}
              src={images.inbox}
              width={"200px"}
              height="160px"
            />
            <PrimaryText
              text={"Entreprise BigNova"}
              color={theme.palette.grey[900]}
              fontWeight={700}
            />
          </Stack>
          <Stack>
            <PrimaryText
              text={date}
              color={theme.palette.grey[900]}
              fontWeight={700}
            />
          </Stack>
        </Stack>
        <Stack width={"100%"} alignItems="center" display="flex" p={2}>
          <PrimaryText
            text={`Details de ${props.title}`}
            color={theme.palette.grey[900]}
            sx={{ fontWeight: "700" }}
            fontWeight={700}
            
          />
        </Stack>

        {informationUser?.numerodelot && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"N° de lot selon EDD : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
              
            />
            <PrimaryText
              text={"  " + informationUser?.numerodelot}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
              
            />
          </Stack>
        )}
        {informationUser?.typelot && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Type de lot : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
              
            />
            <PrimaryText
              text={"  " + informationUser?.typelot[0]?.typeName}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
              
            />
          </Stack>
        )}

        {informationUser?.createdAt && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Date de creation : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
              
            />
            <PrimaryText
              text={"  " + informationUser?.createdAt}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
              
            />
          </Stack>
        )}

        {informationUser?.surfacesansbalcon && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Surface sans balcon : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
              
            />
            <PrimaryText
              text={"  " + informationUser?.surfacesansbalcon}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
              
            />
          </Stack>
        )}

        {informationUser?.surfacetotal && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Surface totale : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.surfacetotal}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
              
            />
          </Stack>
        )}

        {informationUser?.bloc && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Nombre de bloc : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
              
            />
            <PrimaryText
              text={"  " + informationUser?.bloc}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
              
            />
          </Stack>
        )}

        {informationUser?.etage && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Nombre d'etage : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
              
            />
            <PrimaryText
              text={"  " + informationUser?.etage}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
              
            />
          </Stack>
        )}

        {informationUser?.prix && (
          <Stack
            justifyContent="flex-end"
            display={"flex"}
            flexDirection={"row"}
            p={1}
            width="100%"
          >
            <PrimaryText
              text={"Prix du lot : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
              fontSize={36}
            />
            <Box width={30}></Box>
            <PrimaryText
              text={"  " + informationUser?.prix}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
              fontSize={36}
            />
          </Stack>
        )}

        {/* Project print */}

        {/* adresse
: 
"Cité Dardara N565 Khemis Miliana"
datefin
: 
"2023-06-23"
datestart
: 
"2023-06-17"
description
: 
"Cité Dardara N565 Khemis Miliana"
etat
: 
3
name
: 
"reda dev" */}

        {informationUser?.name && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Nom du porjet : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
              
            />
            <PrimaryText
              text={"  " + informationUser?.name}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
              
            />
          </Stack>
        )}
        {informationUser?.adresse && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Adresse du porjet : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
              
            />
            <PrimaryText
              text={"  " + informationUser?.adresse}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
              
            />
          </Stack>
        )}

        {informationUser?.datestart && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Date debut du porjet : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.datestart}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
            />
          </Stack>
        )}
        {informationUser?.datefin && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Date fin du porjet : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.datefin}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
            />
          </Stack>
        )}

        {informationUser?.description && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Description du porjet : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.description}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
            />
          </Stack>
        )}
      </div>
    );
  }
);
