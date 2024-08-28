import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import "./HomeTestimonial.css";

export default function HomeTestimonial() {
  const testimonials = [
    {
      id: 1,
      imgSrc:
        "https://img.freepik.com/free-photo/woman-doing-yoga-garden_1385-1775.jpg",
      name: "Becky Linch",
      title: "Satisfied Client",
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    },
    {
      id: 2,
      imgSrc:
        "https://img.freepik.com/free-photo/woman-doing-yoga-garden_1385-1775.jpg",
      name: "Becky Linch",
      title: "Satisfied Client",
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    },
    {
      id: 3,
      imgSrc:
        "https://img.freepik.com/free-photo/woman-doing-yoga-garden_1385-1775.jpg",
      name: "Becky Linch",
      title: "Satisfied Client",
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    },
    {
      id: 4,
      imgSrc:
        "https://img.freepik.com/free-photo/woman-doing-yoga-garden_1385-1775.jpg",
      name: "Becky Linch",
      title: "Satisfied Client",
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    },
    // Add other testimonials...
  ];

  return (
    <section className="section-xl">
      <div className="container">
        <div className="position-relative">
          <div className="pbmit-heading-subheading animation-style2">
            <h4 className="pbmit-subtitle">Testimonials</h4>
            <h2 className="pbmit-title" style={{ perspective: 400 }}>
              <div
                className="split-line"
                style={{
                  display: "block",
                  textAlign: "start",
                  position: "relative",
                }}
              >
                <div style={{ position: "relative", display: "inline-block" }}>
                  What our clients say
                </div>
              </div>
            </h2>
          </div>
          <div className="contianer">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{ clickable: true }}
              breakpoints={{
                1440: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 2, spaceBetween: 15 },
                768: { slidesPerView: 1, spaceBetween: 15 },
                480: { slidesPerView: 1, spaceBetween: 10 },
              }}
              modules={[Pagination, FreeMode]}
              className="mySwiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide
                  key={testimonial.id}
                  className="pbmit-testimonial-style-1"
                >
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-box-content-wrap">
                      <div className="pbminfotech-box-star-ratings">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className="pbmit-base-icon-star-1 pbmit-active"
                          />
                        ))}
                      </div>
                      <div className="pbminfotech-box-desc">
                        <blockquote className="pbminfotech-testimonial-text">
                          <p>{testimonial.text}</p>
                        </blockquote>
                      </div>
                      <div className="pbminfotech-box-author d-flex align-items-center">
                        <div className="pbminfotech-box-img">
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src={testimonial.imgSrc}
                                className="img-fluid"
                                alt={testimonial.name}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-auther-content">
                          <h3 className="pbminfotech-box-title">
                            {testimonial.name}
                          </h3>
                          <div className="pbminfotech-testimonial-detail">
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
