import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  checkProjectExistence,
  create,
  getAllProjets,
} from "../../../../../../../Redux/projects/slice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../../Redux/store";
import {
  handleShowSidebar,
  handleTypeSidebar,
} from "../../../../../../../Redux/global/slice";
import {
  checkLotExistence,
  createLots,
  DeleteLot,
  getAllLots,
} from "../../../../../../../Redux/Lots/slice";

export function createLotHooks() {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const { exist } = useSelector((state: RootState) => state.projects);

  const navigate = useNavigate();

  interface FormValues {
    numerodelot: string;
    surfacetotal: string;
    surfacesansbalcon: string;
    bloc: string;
    prix: string;
    etage: string;
    typelot: string;
    projet: string;
  }

  const initialState: FormValues = {
    numerodelot: "",
    surfacetotal: "",
    surfacesansbalcon: "",
    bloc: "",
    prix: "",
    etage: "",
    typelot: "",
    projet: "",
  };

  const validationSchema = Yup.object().shape({
    numerodelot: Yup.string().required("number is required"),
    surfacetotal: Yup.string().required("surface total is required"),
    surfacesansbalcon: Yup.string().required("surface sans balcon is required"),
    bloc: Yup.string().required("bloc is required"),
    prix: Yup.string().required("prix is required"),
    typelot: Yup.string().required("type lot is required"),
    projet: Yup.string().required("projet is required"),
    etage: Yup.string().required("etage is required"),
    
  });

  const onErrorAction = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
  };

  const onSuccessAction = (message: string) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
    dispatch(handleShowSidebar(false)); // close the sidebar
    dispatch(handleTypeSidebar(false)); // close the sidebar
    dispatch(getAllLots());
  };

  const onSubmit = async (values) => {
    const { numerodelot } = values;

    // Dispatch checkProjectExistence action
    const existenceResult = await dispatch(checkLotExistence(numerodelot));
    if (existenceResult.payload) {
      // Lot exists, show error message
      onErrorAction("Lot already exists.");
    } else {
      // Project does not exist, dispatch createProject action

      let object = {
        obj: values,
        onSuccessAction,
        onErrorAction,
      };
      await dispatch(createLots(object));
      // Handle success case
    }
  };

  const onDelete = async (values) => {
    const { id } = values;

    let object = {
      obj: id,
      onSuccessAction,
      onErrorAction,
    };
    await dispatch(DeleteLot(object));
    // Handle success case
  };

  return {
    initialState,
    validationSchema,
    onSubmit,
    onDelete,
  };
}
