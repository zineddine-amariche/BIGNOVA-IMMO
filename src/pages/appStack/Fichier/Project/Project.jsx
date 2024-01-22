import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../../components/utils/Table";
import { getAllProjets } from "../../../../Redux/projects/slice";

const Project = () => {
  const { isLoading, allProjets } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    let object = {
      role: 2,
    };
    dispatch(getAllProjets(object));
  }, [dispatch]);
  return (
    <Table
      dataTable={allProjets?.data}
      isLoading={isLoading}
      title={"Projets"}
    />
  );
};

export default Project;
