import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { register } from "../../../../Redux/auth/slice";
import { useNavigate } from "react-router-dom";

export function registerHooks() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialState = {
    // fullName: "enzo2",
    // email: "amarichezi@yopmail.com",
    // password:"@Amariche1234",
    // confirmPassword:"@Amariche1234"

    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDay:'',
    password:"",
    confirmPassword:"",
    role:"",

  };

  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const lowercaseRegEx = /(?=.*[a-z])/;
  const uppercaseRegEx = /(?=.*[A-Z])/;
  const numericRegEx = /(?=.*[0-9])/;
  const specialsRegEx = /[^A-Za-z 0-9]/g;

  let validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    role: Yup.string().required("role is required"),
    phone: Yup.string().required("Phone number is required"),
    birthDay: Yup.string().required("Birthday is required"),
    email: Yup.string()
      .required("Email is required")
      .min(8, "Email is too short - must be at least 8 characters.")
      .matches(emailRegex, "Must be a valid email !"),
    password: Yup.string()
      .min(6, "Password is too short - must be at least 6 characters.")
      .matches(lowercaseRegEx, "Must contain a lowercase alphabetic character!")
      .matches(
        uppercaseRegEx,
        "Must contain an uppercase alphabetic character!"
      )
      .matches(numericRegEx, "Must contain a numeric character!")
      .matches(specialsRegEx, "Must contain a special character")
      .required("Password is required"),
      // fullName: Yup.string()
      // .min(4, "fullName is too short - must be at least 6 characters.")
      // .max(50, "fullName is too long - must be 50 characters maximum.")
      // .required("fullName is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const onErrorAction = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false
    });
  };
  const onSuccessAction = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false
    });
    navigate("/dashboard");

    
  };

  const OnSubmit = async (data) => {
    let object = {
      onSuccessAction,
      onErrorAction,
      obj:data,
    };

    dispatch(register(object));
  };

  const [hidePass, setHidePass] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);

  const HandlehidePass = () => {
    setHidePass(!hidePass);
  };
  const HandlehidePass2 = () => {
    setHidePass2(!hidePass2);
  };

  return {
    initialState,
    validationSchema,
    OnSubmit,
    HandlehidePass,
    hidePass,
    HandlehidePass2,
    hidePass2
  };
}
