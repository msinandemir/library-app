import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import thumbnail from "../../../../assets/images/book-thumbnail.jpg";
import BookItem from "../../../../components/BookItem";
import Button from "../../../../components/Button";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { NavLink } from "react-router-dom";


function LatestSeciton() {
  const fakeData = {
    id: 1,
    name: "İstanbul",
    owner: "Ahmet Umit",
    photo: thumbnail,
  };
  const item = new Array(20).fill(fakeData);
  return (
    <section className='mt-20 flex flex-col gap-5 '>
      <header>
        <h4 className='text-primaryText font-semibold text-2xl'>
          SON&nbsp;EKLENENLER
        </h4>
      </header>
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
          {item.map((item, key) => (
            <SwiperSlide key={key}>
              <BookItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center">

      <Button as={NavLink} size="normal" variant="outline" to='/latest'><span className="font-semibold text-xl">Daha&nbsp;Fazla&nbsp;Göster</span><MdOutlineArrowForwardIos size={30} /></Button>
      </div>
    </section>
  );
}

export default LatestSeciton;
