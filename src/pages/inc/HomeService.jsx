import React, { useEffect, useRef, useState } from "react";
import "../../App.css";
import yogaLotus from "../../images/yoga_lotus.png";
import "./HomeService.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Autoplay } from "swiper/modules";

// Slide data
const slidesData = [
  {
    id: 1,
    category: "DJ Yoga Trainer",
    title: "Types of Yoga",
    image: yogaLotus,
    link: "/service/1",
  },
  {
    id: 2,
    category: "Mantra Yoga Trainer",
    title: "Online Yoga",
    image: yogaLotus,
    link: "/service/1",
  },
  {
    id: 3,
    category: "DJ Yoga Trainer",
    title: "Offline Yoga",
    image: yogaLotus,
    link: "/service/1",
  },
  {
    id: 4,
    category: "Astanga Yoga Trainer",
    title: "Doctor Consultation",
    image: yogaLotus,
    link: "/service/2",
  },
];

export default function HomeService() {
  const [isInView, setIsInView] = useState(false);
  const headingRef = useRef(null);

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
  const heading = "Our main services".split(" ");

  return (
    <>
      <section className="section-lg">
        <div className="container">
          <div className="position-relative">
            <div className="pbmit-heading-subheading animation-style2">
              <h4 className="pbmit-subtitle">Service</h4>
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
        </div>
      </section>

      <section className="section">
        <div className="home-service-swiper-cont container">
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            speed={1000}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 30 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 2, spaceBetween: 30 },
              1440: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Autoplay]}
          >
            {slidesData.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="homeservice-swiperslider-cont"
              >
                <div className="card-wrapper">
                  <div className="card">
                    <div className="circle-p-cont">
                      <div className="small-circle"></div>
                      <p className="card-content">{slide.category}</p>
                    </div>
                    <h3 className="card-title">{slide.title}</h3>
                    <img
                      className="slide-img"
                      src={slide.image}
                      alt={slide.title}
                    />
                  </div>
                  <div className="separate-circle">
                    <Link style={{ color: 'black' }} to={slide.link}>
                      <i className="pbmit-base-icon-black-arrow-1" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
