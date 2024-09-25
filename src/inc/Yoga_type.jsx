import React, { useEffect, useRef, useState } from "react";
import { imageData } from "../images/img_index";
import { LuBellRing } from "react-icons/lu";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal, Rotate, Slide } from "react-awesome-reveal";
import "../App.css";
import { eevent } from "../components/Trainer";

export default function Yoga_type() {
  const serach = useLocation();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [isInView, setIsInView] = useState(false);
  const headingRef1 = useRef(null);
  const ss = serach.pathname.split("/");
  console.log(ss);
  console.log(ss[3]);
  // const
  const ff = ss[3];
  const eventsToDisplay = eevent.find((event) => event.id === ff);
  console.log(eventsToDisplay);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Is in view:", entry.isIntersecting);
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (headingRef1.current) {
      observer.observe(headingRef1.current);
    }

    return () => {
      if (headingRef1.current) {
        observer.unobserve(headingRef1.current);
      }
    };
  }, []);

  const heading = "Classes & Workshops".split(" ");

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/contact");
  };

  return (
    <>
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <Slide direction="left" duration={2000} delay={500}>
                    <h1 className="pbmit-tbar-title"> Types of Yoga</h1>
                  </Slide>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <Slide direction="left" duration={2000} delay={1000}>
                  <div className="pbmit-breadcrumb-inner">
                    <span>
                      <a title="" href="#" className="home">
                        <span>Yoge</span>
                      </a>
                    </span>
                    <span className="sep">
                      <i className="pbmit-base-icon-angle-double-right" />
                    </span>
                    <span>
                      <span className="post-root post post-post current-item">
                        {" "}
                        Classes
                      </span>
                    </span>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Even Style 1 */}
        <section className="section-md event_boxes">
          <div className="online-offine-cutom-cont container">
            <div className="pbmit-heading-subheading animation-style2">
              <h4 className="pbmit-subtitle">Our Upcoming</h4>
              <h2
                className="pbmit-title"
                ref={headingRef1}
                style={{ perspective: 400, color: "black" }}
              >
                {heading.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    aria-label={word} // Added for accessibility
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </h2>
            </div>
            <div className="row">
              {eventsToDisplay.eventData.map((event) => (
                <div className="col-md-4" key={event.id}>
                  <div className="pbmit-ele-event_listing">
                    <div className="pbmit-event-layout-wrapper">
                      <div
                        className={`event_listing event-type-${
                          event.type
                        }
                          `}
                      >
                        <div
                          className={`pbmit-event-action-url event-style-color ${
                            event.type
                          }
                            `}
                        >
                          <div className="pbmit-event-banner">
                            <div
                              className="pbmit-event-banner-img"
                              style={{ backgroundImage: `url(${event.image})` }}
                            >
                              <div className="pbmit-event-type">
                                <a href={`/service/${ff}${event.slug}`}>
                                  <span
                                    className={`pbmit-event-type-text event-type ${event.type
                                      .toLowerCase()
                                      .replace(" ", "-")}`}
                                  >
                                    {event.type}
                                  </span>
                                </a>
                              </div>
                            </div>
                            <a className="pbmit-button" href={"/serviceDetail"}>
                              <span className="pbmit-button-icon-wrapper">
                                <span className="pbmit-button-icon">
                                  <i className="pbmit-base-icon-black-arrow-1" />
                                </span>
                              </span>
                            </a>
                            <a
                              className="pbmit-link"
                              href={`/service/${ff}${event.slug}`}
                            />
                          </div>
                          <div className="pbmit-event-infomation">
                            <div className="pbmit-event-date">
                              <div className="pbmit-event-date-type">
                                <div className="pbmit-from-date">
                                  <div className="pbmit-date">
                                    {event.date.split(" ")[0]}
                                  </div>
                                  <div className="pbmit-month">
                                    {event.date.split(" ")[1]}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="pbmit-event-details">
                              <div className="pbmit-event-title">
                                <h3 className="pbmit-heading-text">
                                  <a
                                    href={`/service/${ff}${event.slug}`}
                                  >
                                    {event.title}
                                  </a>
                                </h3>
                              </div>
                              <div className="pbmit-event-meta d-flex align-items-center">
                                <div className="pbmit-event-meta-line pbmit-event-time d-flex">
                                  <i className="pbmit-base-icon-time" />
                                  <div className="pbmit-event-meta-time">
                                    {event.duration}
                                  </div>
                                </div>
                                <div className="pbmit-event-meta-line pbmit-event-registration-date d-flex">
                                  <i className="pbmit-base-icon-calendar-3" />
                                  <span className="pbmit-event-date-text">
                                    {event.registrationDate}
                                  </span>
                                </div>
                              </div>
                              <div className="pbmit-event-price">
                                <div
                                  onClick={handleShow}
                                  className="pbmit-event-meta-price"
                                >
                                  <span onClick={handleClick}>
                                    {" "}
                                    Enquiry Now
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-event-arrow-link">
                          <a
                            href={`/service/${ff}${event.slug}`}
                            className={`event-style-color ${event.type
                              .toLowerCase()
                              .replace(" ", "-")}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ paddingBottom: "5%" }} className="appoinment_two">
          <div className="container">
            <div className="appoinment-two_bg">
              <div className="appoinment-bg-overlay" />
              <div className="row align-items-center g-0">
                <div className="col-md-4">
                  <div className="appoinment-two_left">
                    <div className="pbmit-ihbox-style-5">
                      <div className="pbmit-ihbox-box d-flex align-items-center">
                        <div className="pbmit-ihbox-icon">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            className="pbmit-ihbox-icon-wrapper"
                          >
                            <div
                              style={{ display: "contents" }}
                              className="pbmit-icon-wrapper pbmit-icon-type-icon"
                            >
                              <LuBellRing
                                style={{ fontSize: 52, rotate: "320deg" }}
                              />{" "}
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">
                            Subscribe <br /> to our newsletter
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="appoinment-two_right">
                    <form>
                      <div className="pbmit-footer-newsletter">
                        <input
                          type="email"
                          name="EMAIL"
                          placeholder="Your email address"
                          required=""
                        />
                        <button className="pbmit-button">
                          <span className="pbmit-button-text">Subscribe</span>
                          <span className="pbmit-btn-content-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
