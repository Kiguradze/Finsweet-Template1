import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import testimonialData from "../../testimonialsData/testimonialData";
import Testimonial from "../../components/testimonials/Testimonial";
import "./testimonials.css";

const Testimonials = () => {
  const [data, setData] = useState(testimonialData);

  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1020: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h1>Customer Testimonials</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // slidesPerView={3}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          breakpoints={breakpoints}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Testimonial
                img={testimonial.img}
                name={testimonial.name}
                desk={testimonial.desk}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
