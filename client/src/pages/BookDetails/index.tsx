import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useInfiniteQuery } from "react-query";
import { getBookById } from "../../services/book";
import { Spinner } from "../../components/Spinner";
import BookModel from "../../models/BookModel";

import { Details } from "./components/details";
import { Review } from "./components/review";
import ReviewModal from "../../models/ReviewModel";
import { getReviewsByBookId } from "../../services/review";

export const BookDetails: React.FC = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState<BookModel>();
  const [reviews, setReviews] = useState<ReviewModal[]>([]);

  const fetchReviews = async (pageParam: number) => {
    const response = await getReviewsByBookId(Number(bookId), pageParam, 3);
    return response;
  };

  const { fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery(
    "reviews",
    ({ pageParam = 0 }) => fetchReviews(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!(lastPage.page.totalPages === lastPage.page.number)) {
          return lastPage.page.number + 1;
        }
        return;
      },

      onSuccess: (data) => {
        const newData: ReviewModal[] = [];
        const resData = data.pages[data.pages.length - 1]._embedded.reviews;
        for (const key in resData) {
          newData.push({
            id: resData[key].id,
            bookId: resData[key].bookId,
            date: resData[key].date,
            rating: resData[key].rating,
            reviewDescription: resData[key].reviewDescription,
            userEmail: resData[key].userEmail,
          });
        }

        setReviews((prev) => [...prev, ...newData]);
      },
    }
  );

  const { isLoading, isFetching } = useQuery(
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

  return (
    ((isLoading || isFetching) && (
      <section className='flex justify-center items-center mt-20'>
        <Spinner />
      </section>
    )) || (
      <>
        <Details book={book} />
        <Review reviews={reviews} isFetchingNextPage={isFetchingNextPage} />
        <button onClick={() => fetchNextPage()}>fetch more</button>
      </>
    )
  );
};
