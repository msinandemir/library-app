import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import thumbnail from "../../../../assets/images/book-thumbnail.jpg";
import BookItem from "../../../../components/BookItem";
import Button from "../../../../components/Button";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { NavLink } from "react-router-dom";
import SectionHeader from "../sectionHeader";
import cs from 'classnames'
import { useBreakpoint } from "../../../../hooks/useBreakpoint";
function LatestSeciton() {
  const fakeData = {
    id: 1,
    name: "İstanbul",
    owner: "Ahmet Umit",
    photo: thumbnail,
  };
  const item = new Array(20).fill(fakeData);
  const {breakpoint} = useBreakpoint()
  return (
    <section className='mt-20 flex flex-col gap-5 '>
      <SectionHeader title='SON&nbsp;EKLENENLER' />
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
      <div className='flex justify-center'>
        <Button as={NavLink} size='normal' variant='outline' to='/latest'>
          <span className={cs('font-semibold ',{
            'text-xl': breakpoint ==='desktop',
            'text-lg': breakpoint ==='mobile',
          })}>
            Daha&nbsp;Fazla&nbsp;Göster
          </span>
          <MdOutlineArrowForwardIos size={breakpoint === 'desktop'?30:20} />
        </Button>
      </div>
    </section>
  );
}

export default LatestSeciton;
