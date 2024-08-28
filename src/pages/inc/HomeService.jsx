import React from "react";
import "../../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import yogaLotus from "../../images/yoga_lotus.png";
import { FreeMode, Pagination } from "swiper/modules";

const slidesData = [
  {
    id: 1,
    category: "DJ Yoga Trainer",
    title: "Types of Yoga",
    image: yogaLotus,
    link: "service-details.html",
  },
  {
    id: 2,
    category: "Mantra Yoga Trainer",
    title: "Online Yoga",
    image: yogaLotus,

    link: "service-details.html",
  },
  {
    id: 3,
    category: "DJ Yoga Trainer",
    title: "Offline Yoga",
    image: yogaLotus,

    link: "service-details.html",
  },
  {
    id: 4,
    category: "Astanga Yoga Trainer",
    title: "Online Doctor Consultaions",
    image: yogaLotus,

    link: "service-details.html",
  },
];

export default function HomeService() {
  return (
    <section className="section-lg">
      <div className="container">
        <div className="position-relative">
          <div className="pbmit-heading-subheading animation-style2">
            <h4 className="pbmit-subtitle">service</h4>
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
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    O
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    u
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    r
                  </div>
                </div>{" "}
                <div style={{ position: "relative", display: "inline-block" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    m
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    a
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    i
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    n
                  </div>
                </div>{" "}
                <div style={{ position: "relative", display: "inline-block" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    s
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    e
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    r
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    v
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    i
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    c
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    e
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    s
                  </div>
                </div>
              </div>
            </h2>
          </div>
        </div>
        <div className="swiper-container">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <article className="pbmit-service-style-1">
                  <div className="pbminfotech-post-item">
                    <div className="pbminfotech-box-content">
                      <div className="pbmit-box-content-wrap">
                        <div className="pbmit-box-content-inner">
                          <div className="pbmit-contant-box">
                            <div className="pbmit-serv-cat">
                              <a
                                style={{ textDecoration: 'none', color: 'black' }}
                                href={slide.link}
                                rel="tag"
                              >
                                {slide.category}
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a
                                style={{ textDecoration: 'none', color: 'black' }}
                                href={slide.link}
                              >
                                {slide.title}
                              </a>
                            </h3>
                          </div>
                          <div className="pbmit-service-icon">
                            {slide.image ? (
                              <img src={slide.image} alt="Yoga Icon" />
                            ) : (
                              <i className={`pbmit-yoge-icon ${slide.icon}`} />
                            )}
                          </div>
                        </div>
                      </div>
                      <a
                        className="pbmit-service-btn"
                        href={slide.link}
                        title={slide.title}
                      >
                        <span className="pbmit-button-icon-wrapper">
                          <span className="pbmit-button-icon">
                            <i className="pbmit-base-icon-black-arrow-1" />
                          </span>
                        </span>
                      </a>
                    </div>
                    <a className="pbmit-link" href={slide.link} />
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

/*

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            320:{
              slidesPerView: 1
            },
            375: {
              slidesPerView: 1,
              // spaceBetween: 10,
            },
            425: {
              slidesPerView: 1,
              // spaceBetween: 10,
            },            
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <article className="pbmit-service-style-1">
                <div className="pbminfotech-post-item">
                  <div className="pbminfotech-box-content">
                    <div className="pbmit-box-content-wrap">
                      <div className="pbmit-box-content-inner">
                        <div className="pbmit-contant-box">
                          <div className="pbmit-serv-cat">
                            <a style={{textDecoration:'none', color:'black'}} href={slide.link} rel="tag">
                              {slide.category}
                            </a>
                          </div>
                          <h3 className="pbmit-service-title">
                            <a style={{textDecoration:'none', color:'black'}} href={slide.link}>{slide.title}</a>
                          </h3>
                        </div>
                        <div className="pbmit-service-icon">
                          {slide.image ? (
                            <img src={slide.image} alt="Yoga Icon" />
                          ) : (
                            <i className={`pbmit-yoge-icon ${slide.icon}`} />
                          )}
                        </div>
                      </div>
                    </div>
                    <a
                      className="pbmit-service-btn"
                      href={slide.link}
                      title={slide.title}
                    >
                      <span className="pbmit-button-icon-wrapper">
                        <span className="pbmit-button-icon">
                          <i className="pbmit-base-icon-black-arrow-1" />
                        </span>
                      </span>
                    </a>
                  </div>
                  <a className="pbmit-link" href={slide.link} />
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
*/
