import React, { useState } from "react";
import BookModel from "../../models/BookModel";
import { Header } from "./components/header";
import { SearchedBooks } from "./components/searchedBooks";
import { Pagination } from "../../components/Pagination";
import {
  getBooksWithParams,
  getBooksWithSearchParam,
} from "../../services/api";
import { Spinner } from "../../components/Spinner";
import { scrollToTop } from "../../utils/scroll";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

export const SearchBook: React.FC = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [pageSize] = useState<number>(9);
  const [totalBooks, setTotalBooks] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();

  let searchParam = searchParams.get("filter");
  let pageParam = Number(searchParams.get("page"));

  const fetchBooks = () => {
    if (pageParam > totalPage) {
      const initPage = "1";
      searchParams.set("page", initPage);
      setSearchParams(searchParams);
    }
    if (searchParam) {
      return getBooksWithSearchParam(pageParam - 1, pageSize, searchParam);
    }
    return getBooksWithParams(pageParam - 1, pageSize);
  };

  const { isLoading, isFetching } = useQuery(
    ["books", pageParam, pageSize, searchParam],
    fetchBooks,
    {
      cacheTime: 0,
      onSuccess: (data) => {
        const resData = data._embedded.books;
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
        setTotalPage(data.page.totalPages);
        setTotalBooks(data.page.totalElements);
        scrollToTop(0, "smooth");
      },
    }
  );

  return (
    <>
      <header className='flex flex-col gap-4'>
        <Header />
        {(totalBooks > 0 && (
          <span className='font-semibold ml-4 lg:ml-0'>
            <span className='font-bold text-green-700'>{totalBooks}</span>
            &nbsp;Adet&nbsp;Sonuç&nbsp;Bulundu.
          </span>
        )) ||
          (!isLoading && totalBooks === 0 && (
            <span className='font-semibold ml-4 lg:ml-0 text-red-600'>
              Kitap&nbsp;Bulunamadı.
            </span>
          ))}
      </header>
      {((isLoading || isFetching) && (
        <div className='flex justify-center mt-5 lg:mt-0 lg:items-center lg:h-screen'>
          <Spinner />
        </div>
      )) || <SearchedBooks books={books} />}
      <Pagination count={totalPage} range={3} />
    </>
  );
};
