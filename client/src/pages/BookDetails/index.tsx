import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getBookById } from "../../services/book";
import { Spinner } from "../../components/Spinner";
import BookModel from "../../models/BookModel";

import { Details } from "./components/details";
import { Review } from "./components/review";

export const BookDetails: React.FC = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState<BookModel>();

  const { data, isLoading, isFetching } = useQuery(
    "book",
    () => getBookById(Number(bookId)),
    {
      onSuccess: (data) => {
        setBook({
          id: data.id,
          title: data.title,
          author: data.author,
          description: data.description,
          copies: data.copies,
          copiesAvailable: data.copiesAvailable,
          category: data.category,
          image: data.image,
        });
      },
    }
  );
  console.log(data);

  return (
    ((isLoading || isFetching) && (
      <section className='flex justify-center items-center mt-20'>
        <Spinner />
      </section>
    )) || (
      <>
        <Details book={book} />
        <Review />
      </>
    )
  );
};
