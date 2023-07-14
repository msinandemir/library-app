import React, { useState } from "react";
import BookModel from "../../models/BookModel";
import Header from "./components/header";
import SearchedBooks from "./components/searchedBooks";
import { Pagination } from "../../components/Pagination";

export const SearchBook: React.FC = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const [totalBooks] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  return (
    <>
      <Header />
      <SearchedBooks />
      <Pagination count={20} range={3}/>
    </>
  );
};
