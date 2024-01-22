import axios from "axios";

const API_URL =  import.meta.env.VITE_REACT_API_BASE_URL

const api = async (data) => {
  let { isPayed, id } = data;

  let obj = {
    isPayed,
  };
  const res = await axios.patch(`${API_URL}/updatepayement/${id}`, obj);
  return res;
};

const serviceUpdateUserInfo = {
  api,
};
export default serviceUpdateUserInfo;
