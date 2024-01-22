import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../../components/utils/Table";
import { getAllLots } from "../../../../Redux/Lots/slice";

const Lot = () => {
  const { isLoading, allLots } = useSelector((state) => state.lots);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLots());
  }, [dispatch]);

  return (
    <Table dataTable={allLots?.data} isLoading={isLoading} title={"Lots"} />
  );
};

export default Lot;
