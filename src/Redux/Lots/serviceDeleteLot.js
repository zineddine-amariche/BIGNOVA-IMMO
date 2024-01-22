import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL_LOTS;

const api = async (obj) => {

  const config = {
    headers: {
      //   Authorization: `Bearer ${token}`,
      accepts: "application/json",
    },
  };

  const res = await axios.delete(`${API_URL}/delete/${obj}`);


  return res;
};

const serviceDeleteLot = {
  api,
};
export default serviceDeleteLot;
