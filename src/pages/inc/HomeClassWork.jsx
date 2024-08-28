import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./HomeClassWork.css";
import { FreeMode, Pagination } from "swiper/modules";

export default function HomeClassWork() {
  // Slide data
  const slideData = [
    {
      id: 1,
      type: "For Beginner & Advance",
      title: "Yoga Courses",
      date: "14 Feb",
      duration: "70 min / Session",
      registrationDate: "31-10-2023",
      price: "$370 / Month",
      imgUrl: "https://yoge-demo.pbminfotech.com/html-demo/images/event-box/event-single-01.jpg",
      // link: "event-single-detail.html",
    },
    {
      id: 2,
      type: "Types of Workshop",
      title: "Yoga Workshops",
      date: "14 Feb",
      duration: "60 min / Session",
      registrationDate: "27-10-2023",
      price: "$390 / Month",
      imgUrl: "https://yoge-demo.pbminfotech.com/html-demo/images/event-box/event-single-01.jpg",
      // link: "event-single-detail.html",
    },
    {
      id: 3,
      type: "Concentration",
      title: "International Yoga",
      date: "14 Feb",
      duration: "120 min / Session",
      registrationDate: "29-10-2023",
      price: "$499 / Month",
      imgUrl: "https://img.freepik.com/free-photo/flexible-man-posing-park_23-2147645839.jpg?t=st=1724726202~exp=1724729802~hmac=909e4b7c0eca0ceb0a90e3c343550fa130ea94914a92dc06443ebf62433e2e68&w=996",
      // link: "event-single-detail.html",
    },
    {
      id: 4,
      type: "All Types Of Group Yoga",
      title: "Group Yoga",
      date: "14 Feb",
      duration: "50 min / Session",
      registrationDate: "08-11-2023",
      price: "$240 / Month",
      imgUrl: "https://img.freepik.com/free-photo/fit-woman-yoga-nature_23-2147645743.jpg?t=st=1724726237~exp=1724729837~hmac=812143ae2b1333164fce15e3ba3cadb9c996efcd4157b3de0d5c720008d52706&w=996",
      // link: "event-single-detail.html",
    },
    {
      id: 5,
      type: "Yoga For Stress / Weakness / Obesity",
      title: "Group Yoga",
      date: "14 Feb",
      duration: "50 min / Session",
      registrationDate: "08-11-2023",
      price: "$240 / Month",
      imgUrl: "https://img.freepik.com/free-photo/fit-woman-yoga-nature_23-2147645743.jpg?t=st=1724726237~exp=1724729837~hmac=812143ae2b1333164fce15e3ba3cadb9c996efcd4157b3de0d5c720008d52706&w=996",
      // link: "event-single-detail.html",
    },
    {
      id: 6,
      type: "Prental / PCOS",
      title: "Women's Yoga",
      date: "14 Feb",
      duration: "50 min / Session",
      registrationDate: "08-11-2023",
      price: "$240 / Month",
      imgUrl: "https://img.freepik.com/free-photo/fit-woman-yoga-nature_23-2147645743.jpg?t=st=1724726237~exp=1724729837~hmac=812143ae2b1333164fce15e3ba3cadb9c996efcd4157b3de0d5c720008d52706&w=996",
      // link: "event-single-detail.html",
    },
  ];

  return (
    <section
      className="section-md pbmit-extend-animation event-box-section_one pbmit-bg-color-global"
      style={{ clipPath: "inset(0% 2.2925% round 13.755px)" }}
    >
      <div className="container">
        <div className="position-relative">
          <div className="pbmit-heading-subheading text-white animation-style2">
            <h4 className="pbmit-subtitle">Our Upcoming</h4>
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
                    C
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    l
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
                    s
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
                    &amp;
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
                    W
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    o
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
                    k
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
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    h
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    o
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    p
                  </div>
                </div>
              </div>
            </h2>
          </div>
        </div>
        <Swiper
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          slidesPerView={1}
          breakpoints={{
            1440: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 2, // Show 2 slides per view on screens 1024px and wider
            },
            768: {
              slidesPerView: 1, // Show 1 slide per view on screens 768px and wider but less than 1024px
            },
            480: {
              slidesPerView: 1, // Show 1 slide per view on screens 480px and wider but less than 768px
            },
          }}
          className="swiper-slider pbmit-element-viewtype-carousel-3"
        >
          {slideData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="pbmit-ele-event_listing swiper-slide-classwork"
                role="group"
                aria-label={`Slide ${slide.id} / ${slideData.length}`}
                style={{ width: "446.667px" }} // Ensure this is responsive or adjusted in CSS
              >
                <div className="pbmit-event-layout-wrapper">
                  <div className={`event_listing event-type-${slide.type.toLowerCase().replace(/ /g, '-')}`}>
                    <div className="pbmit-event-action-url event-style-color skin-quality">
                      <div className="pbmit-event-banner">
                        <div
                          className="pbmit-event-banner-img"
                          style={{
                            backgroundImage: `url(${slide.imgUrl})`,
                          }}
                        >
                          <div className="pbmit-event-type">
                            <a href={slide.link}>
                              <span className={`pbmit-event-type-text event-type-${slide.type.toLowerCase().replace(/ /g, '-')}`}>
                                {slide.type}
                              </span>
                            </a>
                          </div>
                        </div>
                        <a
                          className="pbmit-button"
                          href={slide.link}
                        >
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                        <a
                          className="pbmit-link"
                          href={slide.link}
                        />
                      </div>
                      <div className="pbmit-event-infomation">
                        <div className="pbmit-event-date">
                          <div className="pbmit-event-date-type">
                            <div className="pbmit-from-date">
                              <div className="pbmit-date">{slide.date.split(' ')[0]}</div>
                              <div className="pbmit-month">{slide.date.split(' ')[1]}</div>
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-event-details">
                          <div className="pbmit-event-title">
                            <h3 className="pbmit-heading-text">
                              <a href={slide.link}>
                                {slide.title}
                              </a>
                            </h3>
                          </div>
                          <div className="pbmit-event-meta d-flex align-items-center">
                            <div className="pbmit-event-meta-line pbmit-event-time d-flex">
                              <i className="pbmit-base-icon-time" />
                              <div className="pbmit-event-meta-time">
                                {slide.duration}
                              </div>
                            </div>
                            <div className="pbmit-event-meta-line pbmit-event-registration-date d-flex">
                              <i className="pbmit-base-icon-calendar-3" />
                              <span className="pbmit-event-date-text">
                                {slide.registrationDate}
                              </span>
                            </div>
                          </div>
                          <div className="pbmit-event-price">
                            <div className="pbmit-event-meta-price">
                              {slide.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-event-arrow-link">
                      <a
                        href={slide.link}
                        className={`event-style-color event-type-${slide.type.toLowerCase().replace(/ /g, '-')}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
