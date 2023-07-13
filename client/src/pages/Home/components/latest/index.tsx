import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BookItem } from "../../../../components/BookItem";
import Button from "../../../../components/Button";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { NavLink } from "react-router-dom";
import SectionHeader from "../sectionHeader";
import cs from "classnames";
import { useBreakpoint } from "../../../../hooks/useBreakpoint";
import { useEffect, useState } from "react";
import BookModel from "../../../../models/BookModel";
import { getBooksForSlider } from "../../../../services/api";
import { Spinner } from "../../../../components/Spinner";

function LatestSeciton() {
  const { breakpoint } = useBreakpoint();
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBooksForSlider();
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
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <section className='mt-20 flex flex-col gap-5 '>
      <SectionHeader title='SON&nbsp;EKLENENLER' />

      {(isLoading && (
        <div
          className={cs("flex justify-center items-center ", {
            "h-[399px]": breakpoint === "mobile",
            "h-[447px]": breakpoint === "desktop",
          })}
        >
          <Spinner />
        </div>
      )) || (
        <>
          <div>
            <Swiper
              className='!pb-7  select-none'
              spaceBetween={20}
              slidesPerView={2}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                1000: {
                  slidesPerView: 5,
                },
              }}
            >
              {books.map((item, key) => (
                <SwiperSlide key={key}>
                  <BookItem book={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='flex justify-center'>
            <Button as={NavLink} size='normal' variant='outline' to='/latest'>
              <span
                className={cs("font-semibold ", {
                  "text-xl": breakpoint === "desktop",
                  "text-lg": breakpoint === "mobile",
                })}
              >
                Daha&nbsp;Fazla&nbsp;Göster
              </span>
              <MdOutlineArrowForwardIos
                size={breakpoint === "desktop" ? 30 : 20}
              />
            </Button>
          </div>
        </>
      )}
    </section>
  );
}

export default LatestSeciton;
