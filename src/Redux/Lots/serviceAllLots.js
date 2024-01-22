import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL_LOTS;

const api = async () => {
  const res = await axios.get(`${API_URL}`);
  return res;
};

const serviceAllLots = {
  api,
};
export default serviceAllLots;
