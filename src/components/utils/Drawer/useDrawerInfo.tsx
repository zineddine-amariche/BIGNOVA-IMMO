import React, { ReactNode } from "react";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

type DrawerProps = {
  children: ReactNode;
  isDrawerInfoOpen: boolean;
  handleCloseDrawer: (arg0: boolean) => void;
};


type reverso  = {
  reverso: string;
};


const DrawerInfo = (props: DrawerProps) => {
  const theme = useTheme();
  const { children, isDrawerInfoOpen, handleCloseDrawer } = props;

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;


  let reverso =currentLanguage ==="ar"? 'left':'right'


  
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
          anchor={reverso}
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
