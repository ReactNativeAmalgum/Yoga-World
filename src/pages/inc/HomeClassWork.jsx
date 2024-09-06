import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./HomeClassWork.css";
import { FreeMode, Pagination } from "swiper/modules";
import EnquiryModal from "../../components/EnquiryModal";
import beg from "../../images/begineer.jpg";
import yogaWorkshop from "../../images/yoga_workshop_slider.jpg";
import international from "../../images/international.jpg";
import groupYoga from "../../images/group_yoga_slider.jpg";
import corporate_yoga from "../../images/Corporate_Yoga.jpeg";
import women from "../../images/Women_yoga.jpeg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HomeClassWork() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
    window.scrollTo(0,0);
  };

  const [isInView, setIsInView] = useState(false);
  const headingRef = useRef(null);

  const slideData = [
    {
      id: 1,
      type: "For Beginner & Advance",
      title: "Yoga Courses",
      date: "14 Feb",
      duration: "70 min / Session",
      registrationDate: "31-10-2023",
      price: "$370 / Month",
      imgUrl: beg,
      link:`service/1/homeclasses`,
    },
    // {
    //   id: 2,
    //   type: "Types of Workshop",
    //   title: "Yoga Workshops",
    //   date: "14 Feb",
    //   duration: "60 min / Session",
    //   registrationDate: "27-10-2023",
    //   price: "$390 / Month",
    //   imgUrl: yogaWorkshop,
    // },
    {
      id: 3,
      type: "Concentration",
      title: "International Yoga",
      date: "14 Feb",
      duration: "120 min / Session",
      registrationDate: "29-10-2023",
      price: "$499 / Month",
      imgUrl: international,
      link: '/service/1/Tourist',
    },
    // {
    //   id: 4,
    //   type: "All Types Of Group Yoga",
    //   title: "Group Yoga",
    //   date: "14 Feb",
    //   duration: "50 min / Session",
    //   registrationDate: "08-11-2023",
    //   price: "$240 / Month",
    //   imgUrl: groupYoga,
    //   // link: "event-single-detail.html",
    // },
    {
      id: 5,
      type: "Yoga For Stress / Weakness / Obesity",
      title: "Corporate Yoga",
      date: "14 Feb",
      duration: "50 min / Session",
      registrationDate: "08-11-2023",
      price: "$240 / Month",
      imgUrl: corporate_yoga,
      link: "/service/1/corporateclasses",
    },
    {
      id: 6,
      type: "Prental / PCOS",
      title: "Women's Yoga",
      date: "14 Feb",
      duration: "50 min / Session",
      registrationDate: "08-11-2023",
      price: "$240 / Month",
      imgUrl: women,
      link: "/service/1/womensclasses",
    },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const heading = "Classes & Workshops".split(" ");

  return (
    <section
      className="section-md pbmit-extend-animation event-box-section_one pbmit-bg-color-global"
      style={{ clipPath: "inset(0% 2.2925% round 13.755px)" }}
    >
      <div className="container">
        <div className="position-relative">
          <div className="pbmit-heading-subheading text-white animation-style2">
            <h4 className="pbmit-subtitle">Our Upcoming</h4>
            <h2 className="pbmit-title" ref={headingRef}>
              {heading.map((el, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.3 }}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </h2>
          </div>
        </div>
        <Swiper
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            1440: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
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
                style={{}}
              >
                <div className="pbmit-event-layout-wrapper">
                  <div
                    className={`event_listing event-type-${slide.type
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                  >
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
                              <span
                                className={`pbmit-event-type-text event-type-${slide.type
                                  .toLowerCase()
                                  .replace(/ /g, "-")}`}
                              >
                                {slide.type}
                              </span>
                            </a>
                          </div>
                        </div>
                        <a className="pbmit-button" href={slide.link}>
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                        <a className="pbmit-link" href={slide.link} />
                      </div>
                      <div className="pbmit-event-infomation">
                        <div className="pbmit-event-date">
                          <div className="pbmit-event-date-type">
                            <div className="pbmit-from-date">
                              <div className="pbmit-date">
                                {slide.date.split(" ")[0]}
                              </div>
                              <div className="pbmit-month">
                                {slide.date.split(" ")[1]}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-event-details">
                          <div className="pbmit-event-title">
                            <h3 className="pbmit-heading-text">
                              <a href={slide.link}>{slide.title}</a>
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
                          <div
                            onClick={handleClick}
                            style={{ borderWidth: 1, borderColor: "white" }}
                            className="pbmit-event-price"
                          >
                            <div className="pbmit-event-meta-price">
                              <span style={{ color: "white" }}>
                                Enquiry Now
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-event-arrow-link">
                      <a
                        href={slide.link}
                        className={`event-style-color event-type-${slide.type
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
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
