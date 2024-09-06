import React from "react";
import { GrYoga } from "react-icons/gr";
import { TbYoga } from "react-icons/tb";
import "swiper/css";
import "swiper/css/pagination";
import "./About.css";
import { Reveal, Rotate, Slide } from "react-awesome-reveal";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { trainerDetail } from "../components/Trainer";

export default function About() {
  return (
    <div className="page-content">
      <div className="pbmit-title-bar-wrapper">
        <div className=" container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <Slide direction="left" duration={2000} delay={500}>
                    <h1 className="pbmit-tbar-title">About Us</h1>
                  </Slide>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <Slide direction="left" duration={2000} delay={1000}>
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
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section 2 */}
      <section className="section-md">
        <div className="aboutus-custom-cont container">
          <div className="about-custom-row row g-0">
            <div className="col-md-12 col-xl-6">
              <div className="about-us-two_img">
                <div className="fid-style-2_box">
                  <div className="pbminfotech-ele-fid-style-2">
                    <div className="pbmit-fld-contents">
                      <div className="pbmit-fld-wrap">
                        <h4 className="pbmit-fid-inner">
                          <span className="pbmit-fid-before" />
                          <span className="pbmit-number-rotate numinate completed">
                            <CountUp end={235} duration={10} />
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
                    <Slide direction="right" duration={2000} delay={1000}>
                      Start you healthy life today with us
                    </Slide>
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
                            <h2 className="pbmit-element-title">
                              Changing rooms
                            </h2>
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
                            <h2 className="pbmit-element-title">
                              Training Programs
                            </h2>
                            <div className="pbmit-heading-desc">
                              Neque blandit consectetur viverra placerat ante.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <a className="pbmit-btn pbmit-btn-global" href="classes.html">
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
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-md">
        <div className="container">
          <div className="row">
            {trainerDetail.map((el, i) => (
              <div className="col-md-6 col-xl-4" key={el.id}>
                <div className="pbmit-ihbox-style-10">
                  <div
                    className="pbmit-ihbox-box"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="pbmit-content-wrapper">
                      <div className="pbmit-heading-desc">yoga trainer</div>
                      <h2 className="pbmit-element-title">
                        <Link
                          style={{ color: "#448c74" }}
                          to={`/about/traine/${el.id}`}
                        >
                          {el.name}
                        </Link>
                        <br /> Trainer
                      </h2>
                    </div>
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper">
                        <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                          <i
                            className={`pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-${
                              i + 1
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-box-number">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
