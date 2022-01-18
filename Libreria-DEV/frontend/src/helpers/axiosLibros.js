import axios from "axios";

export const axiosLibros = async () => {
  return await axios.get("https://backend-eraseunavez.herokuapp.com/libros");
};
