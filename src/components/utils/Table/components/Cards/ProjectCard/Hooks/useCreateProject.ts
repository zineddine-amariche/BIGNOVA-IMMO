import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  checkProjectExistence,
  create,
  getAllProjets,
  ProjectPayload,
} from "../../../../../../../Redux/projects/slice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../../Redux/store";
import {
  handleShowSidebar,
  handleTypeSidebar,
} from "../../../../../../../Redux/global/slice";

export function createProjectHooks() {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const { exist } = useSelector((state: RootState) => state.projects);
  const { result } = useSelector((state: RootState) => state.auth);

  interface FormValues {
    name: string;
    adresse: string;
    datestart: string;
    datefin: string;
    etat: number;
    description: string;
    createdBy: string
  }

  const initialState: FormValues = {
    name: "BIGNOVA - IMMOO -- REDA",
    adresse: "Bejeia-city",
    etat: 1,
    datefin: "24/12/2023",
    datestart: "24/12/2029",
    description: "new project is new project",
    createdBy: result._id,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    // .test('project-exists', 'project already exists', async value => {
    //   return exist;
    // })
    adresse: Yup.string().required("adresse is required"),
    datestart: Yup.string().required("start date is required"),
    datefin: Yup.string().required("end date required"),
    etat: Yup.string().required("etat is required"),
    description: Yup.string().required("description is required"),
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
    dispatch(getAllProjets());
  };

  // const onSubmit = async (data: FormValues) => {
  //   let object:ProjectPayload = {
  //     onSuccessAction,
  //     onErrorAction,
  //     obj: data,
  //   };
  //   // console.log("project - data - ", data);
  //    dispatch(create(object))
  // };

  const onSubmit = async (values) => {
    const { name } = values;

    // Dispatch checkProjectExistence action
    const existenceResult = await dispatch(checkProjectExistence(name));
    if (existenceResult.payload) {
      // Project exists, show error message
      // You can use setFieldError() to set the error message for the specific field
      onErrorAction("Project already exists.");
    } else {
      // Project does not exist, dispatch createProject action

      let object = {
        obj: values,
        onSuccessAction,
        onErrorAction,
      };
      await dispatch(create(object));
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
    // await dispatch(DeleteLot(object));
    // Handle success case
    console.log("delete project");
  };

  return {
    initialState,
    validationSchema,
    onSubmit,
    onDelete,
  };
}
