import React, { useEffect, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBare";
import Navbar from "./Navbar";
import { Stack } from "@mui/system";
import { useTranslation } from "react-i18next";

const SidebarNavbarWrapper = () => {
  let data = {};
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (!isNonMobile) {
      setIsSidebarOpen(false);
    } else if (isNonMobile) {
      setIsSidebarOpen(true);
    }
  }, [isNonMobile]);

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;


  const getDirection = () => {
    // Check the language or any other condition and return the appropriate direction
    // Example: if (language === "ar") return "rtl"; else return "ltr";
    // return "ltr"; // Default to LTR if language is not determined

    if (currentLanguage === 'ar') {
      return 'rtl';
    } else {
      return 'ltr';
    }
  };
const theme =useTheme()


  return (
    <Box display={"flex"}    height="100%" bgcolor={theme.palette.primary.dark}>
 {   currentLanguage !=="ar" &&  <Sidebar
        user={data}
        isNonMobile={isNonMobile}
        drawerWidth={isSidebarOpen ? "240px" : "70px"}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        type={"secondary"}
        flexDirection={getDirection()}
      />}
      <Stack flexGrow={1} >
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Stack>
      {   currentLanguage ==="ar" &&  <Sidebar
        user={data}
        isNonMobile={isNonMobile}
        drawerWidth={isSidebarOpen ? "240px" : "70px"}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        type={"secondary"}
        flexDirection={getDirection()}
      />}
    </Box>
  );
};

export default SidebarNavbarWrapper;
