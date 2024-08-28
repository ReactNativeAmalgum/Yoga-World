import React from "react";
import { GrYoga } from "react-icons/gr";
import { TbYoga } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./About.css";

export default function About() {
  return (
    <div style={{ padding: 10 }}>
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">About Us</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner">
                  <span>
                    <a title="" href="/" className="home">
                      <span>Home</span>
                    </a>
                  </span>
                  <span className="sep">
                    <i className="pbmit-base-icon-angle-double-right" />
                  </span>
                  <span>
                    <span className="post-root post post-post current-item">
                      About Us
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section 2 */}
      <section className="section-md">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-12 col-xl-6">
              <div className="about-us-two_img">
                <div className="fid-style-2_box">
                  <div className="pbminfotech-ele-fid-style-2">
                    <div className="pbmit-fld-contents">
                      <div className="pbmit-fld-wrap">
                        <h4 className="pbmit-fid-inner">
                          <span className="pbmit-fid-before" />
                          <span
                            className="pbmit-number-rotate numinate completed"
                            data-appear-animation="animateDigits"
                            data-from={0}
                            data-to={235}
                            data-interval={5}
                            data-before=""
                            data-before-style=""
                            data-after=""
                            data-after-style=""
                          >
                            235
                          </span>
                          <span className="pbmit-fid">
                            <sup>+</sup>
                          </span>
                        </h4>
                        <div className="pbmit-fid-sub">
                          <div className="pbmit-heading-desc">
                            Happy club members
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-sticky-corner pbmit-bottom-left-corner">
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M30 30V0C30 16 16 30 0 30H30Z" />
                      </svg>
                    </div>
                    <div className="pbmit-sticky-corner pbmit-top-right-corner">
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M30 30V0C30 16 16 30 0 30H30Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-6">
              <div className="about-us-two_rightbox">
                <div className="pbmit-heading-subheading animation-style2">
                  <h4 className="pbmit-subtitle">About Us</h4>
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
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                          }}
                        >
                          S
                        </div>
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                          }}
                        >
                          t
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
                          t
                        </div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                          }}
                        >
                          y
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
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
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
                          t
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
                          y
                        </div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
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
                          f
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
                      </div>
                    </div>
                    <div
                      className="split-line"
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                          }}
                        >
                          t
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
                          d
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
                          y
                        </div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                          }}
                        >
                          w
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
                          t
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
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
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
                          s
                        </div>
                      </div>
                    </div>
                  </h2>
                  <div className="pbmit-heading-desc">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even.
                  </div>
                </div>
                <div className="about-us-two_ihbox">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="pbmit-ihbox-style-6">
                        <div className="pbmit-ihbox-headingicon">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper">
                              <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                <GrYoga />
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-ihbox-contents">
                            <h2 className="pbmit-element-title">Changing rooms</h2>
                            <div className="pbmit-heading-desc">
                              Neque blandit consectetur viverra placerat ante.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="pbmit-ihbox-style-6">
                        <div className="pbmit-ihbox-headingicon">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper">
                              <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                <TbYoga />
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-ihbox-contents">
                            <h2 className="pbmit-element-title">Training Programs</h2>
                            <div className="pbmit-heading-desc">
                              Neque blandit consectetur viverra placerat ante.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="pbmit-btn pbmit-btn-global" href="classes.html">
                  <span className="pbmit-btn-content-wrapper">
                    <span className="pbmit-button-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22.76"
                        height="22.76"
                        viewBox="0 0 22.76 22.76"
                      >
                        <title>black-arrow</title>
                        <path
                          d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1"
                          transform="translate(-0.29 -0.29)"
                          fill="none"
                          stroke="#000"
                          strokeWidth={2}
                        />
                        <path
                          d="M22.34,1a14.67,14.67,0,0,0,0,20.75"
                          transform="translate(-0.29 -0.29)"
                          fill="none"
                          stroke="#000"
                          strokeWidth={2}
                        />
                        <path
                          d="M22.34,1,1,22.34"
                          transform="translate(-0.29 -0.29)"
                          fill="none"
                          stroke="#000"
                          strokeWidth={2}
                        />
                      </svg>
                    </span>
                    <span className="pbmit-button-text">know more</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Swiper Section */}
      <section className="about-section2">
        <div className="about-swiper-cont">
        <Swiper
            navigation={true}
            slidesPerView={3}
            modules={[Navigation, Pagination, Autoplay]} // Include Autoplay here
            className="mySwiper"
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1000, // Delay between slides in ms
              disableOnInteraction: false, // Autoplay will not be disabled after user interactions
            }}
            breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          >
            {/* {RoomData.map((img, i) => ( */}
              <SwiperSlide>
                <div
                  // onClick={() => {
                  //   new Promise((resolve) => {
                  //     navigation(`/room-details/${img.id}`);
                  //     resolve();
                  //   }).then(() => {
                  //     setTimeout(() => {
                  //       window.scrollTo(0, 0);
                  //     }, 50);
                  //   });
                  // }}
                  className="acc-swiper-card-cont"
                >
                  <div className="acc-wiper-card-cont-img">
                    <img src='https://img.freepik.com/free-photo/family-therapy-psychologist-office_23-2149175189.jpg?t=st=1724841231~exp=1724844831~hmac=13c11f84dc82e32abb5c73ccb4084e41f778427d504f607e4ccd3acd2ec605be&w=1060' />

                    <div className="acc-swiper-card-text">
                      <h3 className="acc-swiper-card-text-h">AAA</h3>
                      <span className="acc-swiper-card-text-s">
                        1 bed / 1 bathroom
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  // onClick={() => {
                  //   new Promise((resolve) => {
                  //     navigation(`/room-details/${img.id}`);
                  //     resolve();
                  //   }).then(() => {
                  //     setTimeout(() => {
                  //       window.scrollTo(0, 0);
                  //     }, 50);
                  //   });
                  // }}
                  className="acc-swiper-card-cont"
                >
                  <div className="acc-wiper-card-cont-img">
                    <img src='https://img.freepik.com/free-photo/family-therapy-psychologist-office_23-2149175189.jpg?t=st=1724841231~exp=1724844831~hmac=13c11f84dc82e32abb5c73ccb4084e41f778427d504f607e4ccd3acd2ec605be&w=1060' />

                    <div className="acc-swiper-card-text">
                      <h3 className="acc-swiper-card-text-h">AAA</h3>
                      <span className="acc-swiper-card-text-s">
                        1 bed / 1 bathroom
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  // onClick={() => {
                  //   new Promise((resolve) => {
                  //     navigation(`/room-details/${img.id}`);
                  //     resolve();
                  //   }).then(() => {
                  //     setTimeout(() => {
                  //       window.scrollTo(0, 0);
                  //     }, 50);
                  //   });
                  // }}
                  className="acc-swiper-card-cont"
                >
                  <div className="acc-wiper-card-cont-img">
                    <img src='https://img.freepik.com/free-photo/family-therapy-psychologist-office_23-2149175189.jpg?t=st=1724841231~exp=1724844831~hmac=13c11f84dc82e32abb5c73ccb4084e41f778427d504f607e4ccd3acd2ec605be&w=1060' />

                    <div className="acc-swiper-card-text">
                      <h3 className="acc-swiper-card-text-h">AAA</h3>
                      <span className="acc-swiper-card-text-s">
                        1 bed / 1 bathroom
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  // onClick={() => {
                  //   new Promise((resolve) => {
                  //     navigation(`/room-details/${img.id}`);
                  //     resolve();
                  //   }).then(() => {
                  //     setTimeout(() => {
                  //       window.scrollTo(0, 0);
                  //     }, 50);
                  //   });
                  // }}
                  className="acc-swiper-card-cont"
                >
                  <div className="acc-wiper-card-cont-img">
                    <img src='https://img.freepik.com/free-photo/family-therapy-psychologist-office_23-2149175189.jpg?t=st=1724841231~exp=1724844831~hmac=13c11f84dc82e32abb5c73ccb4084e41f778427d504f607e4ccd3acd2ec605be&w=1060' />

                    <div className="acc-swiper-card-text">
                      <h3 className="acc-swiper-card-text-h">AAA</h3>
                      <span className="acc-swiper-card-text-s">
                        1 bed / 1 bathroom
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  // onClick={() => {
                  //   new Promise((resolve) => {
                  //     navigation(`/room-details/${img.id}`);
                  //     resolve();
                  //   }).then(() => {
                  //     setTimeout(() => {
                  //       window.scrollTo(0, 0);
                  //     }, 50);
                  //   });
                  // }}
                  className="acc-swiper-card-cont"
                >
                  <div className="acc-wiper-card-cont-img">
                    <img src='https://img.freepik.com/free-photo/family-therapy-psychologist-office_23-2149175189.jpg?t=st=1724841231~exp=1724844831~hmac=13c11f84dc82e32abb5c73ccb4084e41f778427d504f607e4ccd3acd2ec605be&w=1060' />

                    <div className="acc-swiper-card-text">
                      <h3 className="acc-swiper-card-text-h">AAA</h3>
                      <span className="acc-swiper-card-text-s">
                        1 bed / 1 bathroom
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  // onClick={() => {
                  //   new Promise((resolve) => {
                  //     navigation(`/room-details/${img.id}`);
                  //     resolve();
                  //   }).then(() => {
                  //     setTimeout(() => {
                  //       window.scrollTo(0, 0);
                  //     }, 50);
                  //   });
                  // }}
                  className="acc-swiper-card-cont"
                >
                  <div className="acc-wiper-card-cont-img">
                    <img src='https://img.freepik.com/free-photo/family-therapy-psychologist-office_23-2149175189.jpg?t=st=1724841231~exp=1724844831~hmac=13c11f84dc82e32abb5c73ccb4084e41f778427d504f607e4ccd3acd2ec605be&w=1060' />

                    <div className="acc-swiper-card-text">
                      <h3 className="acc-swiper-card-text-h">AAA</h3>
                      <span className="acc-swiper-card-text-s">
                        1 bed / 1 bathroom
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            {/* ))} */}
          </Swiper>

        </div>
      </section>
    </div>
  );
}
