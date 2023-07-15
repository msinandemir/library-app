import React, { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import { Header } from "./components/header";
import { SearchedBooks } from "./components/searchedBooks";
import { Pagination } from "../../components/Pagination";
import { getBooksWithParams } from "../../services/api";
import { Spinner } from "../../components/Spinner";

export const SearchBook: React.FC = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pageSize] = useState<number>(9);
  const [totalBooks, setTotalBooks] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [searchParam, setSearchParam] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchedData, setSearchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await getBooksWithParams(currentPage, pageSize);
      const resData = res._embedded.books;
      const loadedBooks: BookModel[] = [];

      for (const key in resData) {
        loadedBooks.push({
          id: resData[key].id,
          title: resData[key].title,
          author: resData[key].author,
          description: resData[key].description,
          copies: resData[key].copies,
          copiesAvailable: resData[key].copiesAvailable,
          category: resData[key].category,
          image: resData[key].image,
        });
      }
      setBooks(loadedBooks);
      setTotalPage(res.page.totalPages);
      setTotalBooks(res.page.totalElements);
      setIsLoading(false);
    };
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchData();
  }, [currentPage, pageSize]);

  return (
    <>
      <header className='flex flex-col gap-4'>
        <Header searchParam={searchParam} setSearchParam={setSearchParam} setSearchedData={setSearchedData}/>
        {totalBooks > 0 ? (
          <span className='font-semibold'>
            <span className='font-bold text-green-700'>{totalBooks}</span>
            &nbsp;Adet&nbsp;Sonuç&nbsp;Bulundu.
          </span>
        ) : (
          <span className='font-semibold'>
            "<span className='font-bold text-red-600'>{searchParam}</span>
            "&nbsp;Adında&nbsp;Bir&nbsp;Kitap&nbsp;Bulunamadı.
          </span>
        )}
      </header>
      {(isLoading && (
        <div className='flex justify-center items-center h-screen'>
          <Spinner />
        </div>
      )) || <SearchedBooks books={books} />}
      <Pagination count={totalPage} range={3} setCurrentPage={setCurrentPage} />
    </>
  );
};
