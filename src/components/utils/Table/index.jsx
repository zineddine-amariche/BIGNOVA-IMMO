import React, { useRef } from "react";
import { Box, useTheme } from "@mui/material";
import Head from "../../../components/Layouts/Head";
import CustomPagination, { CustomFooter } from "./components/usePaginations";
import { DataGrid } from "@mui/x-data-grid";
import { useTable } from "./Hooks/usersTable";
import Layout from "../../Layouts/LoaderPageTable";
import InfoCard from "./components/useCardInfo";
// import DrawerInfo from "./components/useDrawerInfo";
import { useColums } from "./utils";
import { useSelector } from "react-redux";
import DrawerInfo from "../Drawer/useDrawerInfo";
import ReactToPrint, { useReactToPrint } from "react-to-print";

const Table = ({ isLoading, title, dataTable }) => {
  const theme = useTheme();
  const { handleOpen } = useTable();
  const { showSideBarInformations, informations } = useSelector(
    (state) => state.globaleState
  );

  const { getRowId, isOpen, userInfo, handleCloseDrawer } = useTable();

  const { columns, columnTypeLot, columnProjet, lotColumns } = useColums(
    handleOpen,
    dataTable
  );

  let customColumns;

  switch (title) {
    case "Type de Lot":
      customColumns = columnTypeLot;
      break;
    case "Projets":
      customColumns = columnProjet;
      break;
    case "Lots":
      customColumns = lotColumns;
      break;
    case "Acquereur":
    case "Utilisateur":
      customColumns = columns;
      break;
    default:
      // Handle the default case here, if needed
      break;
  }

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });
  const componentRef = useRef();

  return (
    <Layout
      isLoading={isLoading}
      Children={() => {
        return (
          <Box
            sx={{
              height: "100%",
              bgcolor: theme.palette.secondary.dark,
              borderRadius: 1,
            }}
          >
            <Head title={title} button mode={undefined} retur={undefined} />
          
              <RenderTable
                ref={componentRef}
                dataTable={dataTable}
                customColumns={customColumns}
                getRowId={getRowId}
              />

            <DrawerInfo
              isDrawerInfoOpen={showSideBarInformations}
              handleCloseDrawer={handleCloseDrawer}
            >
              <InfoCard
                informationUser={informations}
                handleClick={handleCloseDrawer}
                title={title}
                ref={componentRef}
              />
            </DrawerInfo>
          </Box>
        );
      }}
    />
  );
};

export default Table;

export const RenderTable = React.forwardRef((props, ref) => {
  const { dataTable, customColumns, getRowId } = props;
  const theme = useTheme();
  return (
    <div
      ref={ref}
      style={{
        paddingTop: 2,
        paddingBottom: 4,
        backgroundColor: theme.palette.neutral.main,
      }}
    >
      {dataTable && (
        <DataGrid
        
          autoHeight
          rows={dataTable}
          density="comfortable"
          disableSelectionOnClick={false}
          columns={customColumns}
          pageSize={10}
          getRowId={getRowId}
          rowsPerPageOptions={[10]}
          /* overriding the footer to add custom pagination to the left */
          localeText={{
            footerRowSelected: CustomPagination,
          }}
          components={{
            Footer: CustomFooter,
          }}
          sx={{
            backgroundColor: theme.palette.background.default,

            boxShadow: 2,
            m: 3,
            color: theme.palette.primary.light,
          }}
        />
      )}
    </div>
  );
});

