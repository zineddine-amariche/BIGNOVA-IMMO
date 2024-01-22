import axios from "axios";

const API_URL = `http://localhost:5000/user/register`;

//  !Login user api

const api = async (obj) => {

  const config = {
    headers: {
      //   Authorization: `Bearer ${token}`,
      "accepts":"application/json"
    },
  };

  const res = await axios.post(API_URL, obj, config);
  return res;
};
const registerService = {
  api,
};
export default registerService;
