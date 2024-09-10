import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const Carusel = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper mt-6"
    >
      <SwiperSlide>
        <img
          className="w-full h-[400px] object-contain"
          src="https://storage.kun.uz/source/uploads/2018fevral/images002/0202/qotil5.jpg "
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[400px] object-contain"
          src="https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/gissar-0-0-0-0-1595409657.jpg "
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[400px] object-contain"
          src="https://storage.kun.uz/source/uploads/2018fevral/images002/0202/qotil4.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[400px] object-contain"
          src="https://storage.kun.uz/source/uploads/2018fevral/images002/0202/qotil4.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carusel;
