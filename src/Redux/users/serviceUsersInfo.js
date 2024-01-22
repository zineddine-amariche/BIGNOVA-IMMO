import axios from "axios";

const API_URL =  import.meta.env.VITE_REACT_API_BASE_URL

const api = async (data) => {
  let {  role } = data;

  
  const res = await axios.get(`${API_URL}/roles?role=${role}`);


  return res;
};

const serviceUsersInfo = {
  api,
};
export default serviceUsersInfo;
