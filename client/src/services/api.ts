import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getBooksForSlider = async () => {
  const response = await axios.get(BASE_URL + "books?page=0&size=20");
  return response.data;
};



