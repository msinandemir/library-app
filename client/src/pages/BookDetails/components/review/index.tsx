import React, { ReactNode, useEffect, useState } from "react";
import Rating from "react-star-picker";
import SectionHeader from "./../../../../components/sectionHeader";
import Button from "../../../../components/Button";
import { ReviewItem } from "../../../../components/ReviewItem";
import ReviewModal from "../../../../models/ReviewModel";
import { Spinner } from "../../../../components/Spinner";
import { useInfiniteQuery } from "react-query";
import { getReviewsByBookId } from "../../../../services/review";
import { useParams } from "react-router-dom";

export const Review: React.FC = () => {
  const [rating, setRating] = useState<number | null>(1);
  const [comment, setComment] = useState<string>("");
  const [reviews, setReviews] = useState<ReviewModal[]>([]);
  const { bookId } = useParams();

  const fetchReviews = async (pageParam: number) => {
    const response = await getReviewsByBookId(Number(bookId), pageParam, 3);
    return response;
  };

  const { fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery(
    ["reviews", bookId],
    ({ pageParam = 0 }) => fetchReviews(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!(lastPage.page.totalPages === lastPage.page.number)) {
          return lastPage.page.number + 1;
        }
      },
      cacheTime: 0,

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

  return (
    <>
      <SectionHeader title='Yorumlar' className='mt-20' />
      <div className='w-full bg-background  flex flex-col gap-4 items-center border border-black/20'>
        <div className='bg-primary/20 w-full border-b border-black/60 h-24 p-2 flex gap-5 '>
          <div className='bg-background border border-black/20 w-fit h-[70px] p-1.5 rounded-md flex justify-center items-center flex-col'>
            <span className='font-semibold'>ÜRÜNE PUAN VER</span>
            <Rating value={rating} onChange={(index) => setRating(index)} />
          </div>
          <div className='w-2/3'>
            <textarea
              className='h-[70px] w-full resize-none p-1.5 border border-zinc-400 rounded-md focus:outline-orange-400'
              maxLength={255}
              placeholder='Yorum yaz...'
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </div>
          <Button
            as='button'
            size='normal'
            variant='outline'
            className='self-end disabled:cursor-not-allowed'
            disabled={comment.length < 3}
          >
            Gönder
          </Button>
        </div>
        {reviews.map((item, index) => (
          <ReviewItem item={item} key={index} />
        ))}

        {isFetchingNextPage && (
          <div className='w-full flex justify-center mt-3 mb-3'>
            <Spinner />
          </div>
        )}

        {((hasNextPage && reviews.length > 1) && (
          <Button
            as='button'
            size='normal'
            variant='outline'
            className='mb-4'
            onClick={() => fetchNextPage()}
          >
            Daha Fazla Gör
          </Button>
        )) || (
          <span className='font-semibold'>
            Gösterilecek Daha Fazla Yorum Yok.
          </span>
        )}
      </div>
    </>
  );
};
