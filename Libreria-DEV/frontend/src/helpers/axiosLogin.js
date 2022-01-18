import axios from "axios";

export const axiosLogin = async () => {
  return await axios.get("https://backend-eraseunavez.herokuapp.com/login");
};
