import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getReviewsByBookId = async (
  bookId: number,
  pageParam: number,
  size: number
) => {
  const response = await axios.get(
    BASE_URL +
      `reviews/search/findByBookId?bookId=${bookId}&page=${pageParam}&size=${size}`
  );
  return response.data;
};
