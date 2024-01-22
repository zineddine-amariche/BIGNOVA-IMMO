import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  handleGetSidebar,
  handleShowSidebar,
  handleTypeSidebar,
} from "../../../../Redux/global/slice";

export function useTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [userInfo, setUserInfo] = useState({
    id: 0,
    fullname: "",
    email: "",
    phone: "",
    address: "",
    role: 1,
    createdAt: "",
  });
  const handleCloseDrawer = () => {
    dispatch(handleShowSidebar(false)); // close the sidebar
    dispatch(handleTypeSidebar(false)); // close the sidebar
  };

  const getRowId = (row) => {
    // Generate a unique id based on the row data
    // For example, you can concatenate properties or use a unique identifier library
    return row?.firstName + row?._id;
  };

  const handleOpen = (value, data) => {
    //looping over the user data and retrieving the user that matches with the id
    data.forEach((user) => {
      if (user._id == value) {
        dispatch(handleGetSidebar(user));
      }
    });

    dispatch(handleShowSidebar(true)); // opening the sidebar
  };

  return {
    dispatch,
    navigate,
    getRowId,
    handleOpen,
    handleCloseDrawer,
    userInfo,
  };
}
