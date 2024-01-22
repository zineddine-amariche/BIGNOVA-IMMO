import React, { useEffect } from "react";
import { getAllUsers, getUserInfo } from "../../../Redux/users/slice";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../components/utils/Table";

const Utilisateur = () => {
  const { isLoading, allUsers } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return <Table dataTable={allUsers?.data} isLoading={isLoading} title={"Utilisateur"}  />;
};

export default Utilisateur;
