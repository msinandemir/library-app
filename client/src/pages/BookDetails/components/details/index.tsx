import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Rating from "react-star-picker";
import Button from "../../../../components/Button";
import BookModel from "../../../../models/BookModel";
import { getBookRating } from "../../../../services/book";
import { useParams } from "react-router-dom";

export const Details: React.FC<{ book: BookModel | undefined }> = ({
  book,
}) => {
  const [rating, setRating] = useState<number>(0);
  const { bookId } = useParams();

  useEffect(() => {
    const getRating = async () => {
      const rating = await getBookRating(Number(bookId));
      setRating(rating);
    };

    getRating();
  }, []);

  return (
    <>
      <section className='mt-20 bg-primary/20 p-2 rounded-sm'>
        <div className='flex gap-5'>
          <div className='w-[260px] h-[375px] p-5 bg-white/60 border border-zinc-400 flex justify-center items-center'>
            <PhotoProvider>
              <PhotoView src={"data:image/jpeg;base64," + book?.image}>
                <img
                  src={"data:image/jpeg;base64," + book?.image}
                  alt={book?.title}
                  className='w-full hover:scale-105 transition-all cursor-pointer'
                  title={book?.title}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className='flex flex-col gap-2 text-black/70'>
            <h1 className='font-semibold text-3xl'>{book?.title}</h1>
            <h6 className='text-xl'>{book?.author}</h6>
            <div className="flex gap-1">
              <Rating
                value={rating}
                disabled={true}
                size={25}
                onChange={() => {}}
              />
              <span className="text-red-600 font-bold text-lg cursor-default" title="Ürün puanı hesaplanırken son 20 yorum baz alınmıştır.">*</span>
            </div>
            <p className='font-semibold mt-4 text-sm w-[500px]'>
              {book?.description}
            </p>
            <span className='font-semibold mt-4 text-sm'>
              Kategori:&nbsp;<span>{book?.category.toUpperCase()}</span>
            </span>
          </div>
          <div className='w-[230px] h-[320px] bg-white/60 mt-10 border border-zinc-400 font-semibold flex flex-col gap-3 items-center justify-center'>
            {book?.copiesAvailable === undefined || book.copiesAvailable < 0 ? (
              <span className=' text-red-600 text-2xl'>MEVCUT&nbsp;DEĞİL</span>
            ) : (
              <span className='text-green-600 text-2xl '>MEVCUT</span>
            )}
            <span>
              Toplam&nbsp;Kopya:
              <span className='font-bold'>{book?.copies}</span>
            </span>
            <span>
              Mevcut&nbsp;Kopya:
              <span className='font-bold'>{book?.copiesAvailable}</span>
            </span>
            <Button as='button' size='normal' variant='primary'>
              Teslim&nbsp;Al
            </Button>
            <p className='text-xs px-1.5'>
              Mevcut kopya sayısı sizin teslim alma işleminiz tamamlanana kadar
              değişebilir.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
