import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HomeSwipJs({ dataList }) {
  return (
    <div className="h-[65vh] w-full rounded-3xl border-none outline-none text-[#3730a3] bg-[#9e96c5] shadow-xl">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-3xl w-full h-fit shadow-xl text-[#3730a3]"
      >
        <SwiperSlide>
          <img src={dataList[0].image} alt={dataList[0].name} />
        </SwiperSlide>
        <img src={dataList[1].image} alt={dataList[1].name} />
        <SwiperSlide>
          <img src={dataList[2].image} alt={dataList[2].name} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dataList[3].image} alt={dataList[3].name} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dataList[4].image} alt={dataList[4].name} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dataList[5].image} alt={dataList[5].name} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
