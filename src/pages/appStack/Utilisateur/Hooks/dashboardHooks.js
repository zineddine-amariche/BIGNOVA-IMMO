import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { getPermission, login } from "../../../../Redux/auth/slice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function dashboardHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    title: "",
    image: "",
    description: "",
    dateDebut: "",
    dateFin: "",
  };

  let validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("title is required"),
    image: Yup.string().required("image is required"),
    description: Yup.string().required("description is required"),
    dateDebut: Yup.string().required("Start date is required"),
    dateFin: Yup.string().required("End date is required"),
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
  const onSuccessAction = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
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
