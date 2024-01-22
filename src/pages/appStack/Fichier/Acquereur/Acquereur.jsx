import React, { useEffect } from "react";
import Table from "../../../../components/utils/Table";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../../../Redux/users/slice";

const Acquereur = () => {
  const { isLoading, userRole } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    let object = {
      role: 3,
    };
    dispatch(getUserInfo(object));
  }, [dispatch]);
  return (
    <Table
      dataTable={userRole?.data}
      isLoading={isLoading}
      title={"Acquereur"}
    />
  );
};

export default Acquereur;
