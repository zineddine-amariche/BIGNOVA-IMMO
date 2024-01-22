import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL_PROJETS;

const api = async (obje) => {

  const res = await axios.get(`${API_URL}/check?name=${obje}`);

  return res;
};

const serviceCheckProjets = {
  api,
};
export default serviceCheckProjets;
