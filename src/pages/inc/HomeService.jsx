import React from "react";
import "../../App.css";
import yogaLotus from "../../images/yoga_lotus.png";
import "./HomeService.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
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
    title: "Online Doctor Consultations",
    image: yogaLotus,
    link: "service-details.html",
  },
];

export default function HomeService() {
  return (
    <>
      <section className="section-lg">
        <div className="container">
          <div className="position-relative">
            <div className="pbmit-heading-subheading animation-style2">
              <h4 className="pbmit-subtitle">Service</h4>
              <h2 className="pbmit-title" style={{ perspective: 400 }}>
                <div
                  className="split-line"
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                  }}
                >
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      O
                    </div>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      u
                    </div>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      r
                    </div>
                  </div>{" "}
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      m
                    </div>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      a
                    </div>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      i
                    </div>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      n
                    </div>
                  </div>{" "}
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      s
                    </div>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      e
                    </div>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      r
                    </div>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      v
                    </div>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      i
                    </div>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      c
                    </div>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      e
                    </div>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      s
                    </div>
                  </div>
                </div>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
      <div className="home-service-swiper-cont container">
      <Swiper
      // spaceBetween={}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
        1440:{
          slidesPerView:2
        }
      }}
    >
      <SwiperSlide className="homeservice-swiperslider-cont">
        <div className="card-wrapper">
          <div className="card">
            <div className="circle-p-cont">
              <div className="small-circle"></div>
              <p className="card-content">DJ Yoga Trainer</p>
            </div>
            <h3 className="card-title">Types of Yoga</h3>
            <img className="slide-img" src={yogaLotus} alt="y" />
          </div>
          <div className="separate-circle">
            <i className="pbmit-base-icon-black-arrow-1"></i>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-wrapper">
          <div className="card">
            <div className="circle-p-cont">
              <div className="small-circle"></div>
              <p className="card-content">DJ Yoga Trainer</p>
            </div>
            <h3 className="card-title">Offline Yoga</h3>
            <img className="slide-img" src={yogaLotus} alt="y" />
          </div>
          <div className="separate-circle">
            <i className="pbmit-base-icon-black-arrow-1"></i>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card-wrapper">
          <div className="card">
            <div className="circle-p-cont">
              <div className="small-circle"></div>
              <p className="card-content">DJ Yoga Trainer</p>
            </div>
            <h3 className="card-title">Online Doctor Yoga</h3>
            <img className="slide-img" src={yogaLotus} alt="y" />
          </div>
          <div className="separate-circle">
            <i className="pbmit-base-icon-black-arrow-1"></i>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card-wrapper">
          <div className="card">
            <div className="circle-p-cont">
              <div className="small-circle"></div>
              <p className="card-content">DJ Yoga Trainer</p>
            </div>
            <h3 className="card-title">Offline Yoga</h3>
            <img className="slide-img" src={yogaLotus} alt="y" />
          </div>
          <div className="separate-circle">
            <i className="pbmit-base-icon-black-arrow-1"></i>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
      </div>
      </section>
    </>
  );
}
