import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getBooksForSlider = async () => {
  const response = await axios.get(BASE_URL + "books?page=0&size=20");
  return response.data;
};

export const getBooksWithParams = async (page: number, size: number) => {
  const response = await axios.get(
    BASE_URL + `books?page=${page}&size=${size}`
  );
  return response.data;
};

export const getBooksWithSearchParam = async (
  page: number,
  size: number,
  searchParam: string | null
) => {
  const response = await axios.get(
    BASE_URL +
      `books/search/findByTitleContainingIgnoreCase?title=${searchParam}&page=${page}&size=${size}`
  );
  return response.data;
};

export const getBookById = async (bookId: number) => {
  const response = await axios.get(BASE_URL + `books/${bookId}`);
  return response.data;
};
