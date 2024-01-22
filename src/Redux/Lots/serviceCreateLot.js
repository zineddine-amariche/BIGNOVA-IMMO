import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL_LOTS;

const api = async (obj) => {

  const config = {
    headers: {
      //   Authorization: `Bearer ${token}`,
      accepts: "application/json",
    },
  };

  const res = await axios.post(API_URL,obj, config);

  return res;
};

const serviceCreateLot = {
  api,
};
export default serviceCreateLot;
