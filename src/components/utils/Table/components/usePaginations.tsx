import React from "react";

import {
  GridFooterContainer,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
  GridPagination,
} from "@mui/x-data-grid";

import Pagination from "@mui/material/Pagination";
import { useTheme } from "@mui/material";

const CustomPagination = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const theme = useTheme();

  return (
    <Pagination
    // sx={{color:theme.palette.secondary.light}}
      color="standard"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
};

const CustomFooter = () => {
  return (
    <GridFooterContainer>
      <CustomPagination />
      <GridPagination />
    </GridFooterContainer>
  );
};

export default CustomPagination;
export { CustomFooter };
