
import React, { useEffect, useMemo } from "react";
import MainRoutes from "./Routes/Routes";
import { themeSettings } from "./theme";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { toast, ToastContainer } from 'react-toastify';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import "./styles.css";
import 'react-toastify/dist/ReactToastify.css';
import { login } from "./Redux/auth/slice";
import { useNavigate } from "react-router-dom";

function App() {
  const mode = useSelector((state) => state.AppTheme.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const onErrorAction = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
  };
  const onSuccessAction = (message,dataObject) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
    // localStorage.setItem('isLoggedIn', 'true');
    // localStorage.setItem('data', JSON.stringify(dataObject));

    navigate("/dashboard");
  };



  // const OnSubmit = async (data) => {
  //   let object = {
  //     onSuccessAction,
  //     onErrorAction,
  //     obj: data,
  //   };

  //   dispatch(login(object));
  // };
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    // const LoggedInData = await localStorage.getItem('data');
    const storedData = localStorage.getItem('data');

    const parsedData = JSON.parse(storedData);

    if (isLoggedIn === 'true') {
      // User is logged in

      let object = {
        onSuccessAction,
        onErrorAction,
        obj: parsedData,
      };
      // console.log('isLoggedIn', isLoggedIn)
      // console.log('isLoggedInData', (parsedData))
    dispatch(login(object));

    } else {
      // User is not logged in
      console.log('isLoggedIn', isLoggedIn)

    }
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <CssBaseline />
      <I18nextProvider i18n={i18n}>
      <MainRoutes />
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
