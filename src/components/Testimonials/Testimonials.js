import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus ipsum ac ipsum dictum, a interdum neque ullamcorper. Integer ut turpis et velit euismod scelerisque id sed neque.",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus ipsum ac ipsum dictum, a interdum neque ullamcorper. Integer ut turpis et velit euismod scelerisque id sed neque.",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus ipsum ac ipsum dictum, a interdum neque ullamcorper. Integer ut turpis et velit euismod scelerisque id sed neque.",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Tina Snow",
    review:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus ipsum ac ipsum dictum, a interdum neque ullamcorper. Integer ut turpis et velit euismod scelerisque id sed neque.",
  },
];

const Testimonials = () => {
  return (
    <section id="tesstimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((testimonial) => {
          return (
            <SwiperSlide className="testimonial" key={testimonial.id}>
              <div className="client__avatar">
                <img src={testimonial.avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{testimonial.name}</h5>
              <small className="clinet__review">{testimonial.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
