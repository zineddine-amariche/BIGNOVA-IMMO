import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL_LOTS;

const api = async (obje) => {

  const res = await axios.get(`${API_URL}/check?numerodelot=${obje}`);

  return res;
};

const serviceCheckLots = {
  api,
};
export default serviceCheckLots;
