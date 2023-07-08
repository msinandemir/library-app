import { Swiper, SwiperSlide } from "swiper/react";
import CategoryItem from "../../../../components/CategoryItem";

function CategoriesSection() {
  const fakeData = {
    id: 1,
    name: "ROMAN",
  };
  const items = new Array(20).fill(fakeData);
  return (
    <section className='mt-20 '>
      <Swiper
        className='select-none'
        spaceBetween={0}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
        }}
      >
        {items.map((item, key) => (
          <SwiperSlide className="!w-[180px]" key={key}>
            <CategoryItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CategoriesSection;
