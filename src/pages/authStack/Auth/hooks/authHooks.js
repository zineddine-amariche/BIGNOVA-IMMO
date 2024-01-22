import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {   login } from "../../../../Redux/auth/slice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function authHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
     email: "insigned11@gmail.com",
     password: "@Zinou123",

    // email: "",
    // password: "",
  };

  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  let validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("email is required")
      .min(8, "email is too short - must be at least 8 characters.")
      .matches(emailRegex, "Must be a valid email !"),
    password: Yup.string()
      .min(6, "Password is too short - must be at least 6 characters.")

      .required("Password is required"),
  });

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
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('data', JSON.stringify(dataObject));

    navigate("/dashboard");
  };

  const OnSubmit = async (data) => {
    let object = {
      onSuccessAction,
      onErrorAction,
      obj: data,
    };

    dispatch(login(object));
  };

  const [hidePass, setHidePass] = useState(true);
  const HandlehidePass = () => {
    setHidePass(!hidePass);
  };

  return {
    initialState,
    validationSchema,
    OnSubmit,
    HandlehidePass,
    hidePass,
  };
}
