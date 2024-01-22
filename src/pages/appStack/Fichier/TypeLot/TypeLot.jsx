import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../../components/utils/Table";
import { getAllTypeLots } from "../../../../Redux/TypeDeLot/slice";
import { getUserInfo } from "../../../../Redux/users/slice";

const TypeLot = () => {
  const { isLoading, allTypeLots } = useSelector((state) => state.typeLots);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTypeLots());
  }, [dispatch]);
  return (
    <Table
      dataTable={allTypeLots?.data}
      isLoading={isLoading}
      title={"Type de Lot"}
    />
  );
};

export default TypeLot;
