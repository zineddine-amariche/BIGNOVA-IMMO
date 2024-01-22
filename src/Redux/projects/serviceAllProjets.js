import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL_PROJETS;

const api = async () => {

  
  const res = await axios.get(`${API_URL}`);

  return res;
};

const serviceAllProjets = {
  api,
};
export default serviceAllProjets;
