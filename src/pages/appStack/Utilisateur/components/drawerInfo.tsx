import React, { ReactNode } from "react";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material";

type DrawerProps = {
  children: ReactNode;
  isDrawerInfoOpen: boolean;
  handleCloseDrawer: (arg0: boolean) => void;
};

const DrawerInfo = (props: DrawerProps) => {
  const theme = useTheme();
  const { children, isDrawerInfoOpen, handleCloseDrawer } = props;
  return (
    <div>
      <React.Fragment>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: theme.palette.background.paper,
              color: "#ffff",
              //theme.palette.primary[100] generates an error
              width: 420,
            },
          }}
          anchor="right"
          open={isDrawerInfoOpen}
          onClose={handleCloseDrawer}
        >
          {children}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default DrawerInfo;
