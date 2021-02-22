import React from "react";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import card1 from "../assets/images/card1.jpg";
import card2 from "../assets/images/card2.jpg";
import card3 from "../assets/images/card3.jpg";
import card4 from "../assets/images/card4.jpg";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

let popularPlaces = [
  card1,
  card2,
  card3,
  card4,
  card1,
  card2,
  card3,
  card4,
  card1,
  card2,
];

function PopularPlaces() {
  return (
    <>
      <div className="popularcard_title">
        <p>Popular Places</p>
        <h2>Integer sapien odio</h2>
      </div>
      <div className="container-fluid  mb-5  ">
        <Swiper
          spaceBetween={50}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          breakpoints={{
            992: {
              slidesPerView: 6,
            },
            767: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          pagination={{ clickable: true }}
        >
          {popularPlaces.map((item) => (
            <SwiperSlide>
              <img className="slide_img" src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
export default PopularPlaces;
