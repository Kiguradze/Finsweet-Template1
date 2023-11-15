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

  return (
    <section className="testimonials">
      <div className="container">
        <h1>Customer Testimonials</h1>
        <Swiper
          slidesPerView={3}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
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
