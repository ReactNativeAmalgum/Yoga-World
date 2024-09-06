import React, { useEffect, useRef, useState } from "react";
import { LuBellRing } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import "../App.css";
import { eevent } from "../components/Trainer";

export default function Doctor() {
  const navigate = useNavigate();
  const [isInView, setIsInView] = useState(false);
  const headingRef = useRef(null);
  const search = useLocation();
  const pathSegments = search.pathname.split("/");
  const [id, slug] = pathSegments[2] ? [pathSegments[2].match(/\d+/)[0], pathSegments[2].replace(/\d+/, '')] : [null, null];

  // Find the event with the correct ID
  const eventsToDisplay = eevent.find((event) => event.id === id) || { eventData: [] };

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

  const heading = "Classes & Consultations".split(" ");

  return (
    <>
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <Slide direction="left" duration={2000} delay={500}>
                    <h1 className="pbmit-tbar-title">Consultations</h1>
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
                        Doctor Consultations
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
        {/* Event Section */}
        <section className="section-md event_boxes">
          <div className="online-offine-cutom-cont container">
            <div className="pbmit-heading-subheading animation-style2">
              <h4 className="pbmit-subtitle">Our Upcoming</h4>
              <h2
                className="pbmit-title"
                ref={headingRef}
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
              {eventsToDisplay.eventData.length > 0 ? (
                eventsToDisplay.eventData.map((event) => (
                  <div className="col-md-4" key={event.id}>
                    <div className="pbmit-ele-event_listing">
                      <div className="pbmit-event-layout-wrapper">
                        <div className={`event_listing event-type-${event.type.toLowerCase().replace(" ", "-")}`}>
                          <div className={`pbmit-event-action-url event-style-color ${event.type.toLowerCase().replace(" ", "-")}`}>
                            <div className="pbmit-event-banner">
                              <div
                                className="pbmit-event-banner-img"
                                style={{ backgroundImage: `url(${event.image})` }}
                              >
                                <div className="pbmit-event-type">
                                  <a href={event.link}>
                                    <span className={`pbmit-event-type-text event-type ${event.type.toLowerCase().replace(" ", "-")}`}>
                                      {event.type}
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <a className="pbmit-button" href={`/service/${id}${event.slug}`}>
                                <span className="pbmit-button-icon-wrapper">
                                  <span className="pbmit-button-icon">
                                    <i className="pbmit-base-icon-black-arrow-1" />
                                  </span>
                                </span>
                              </a>
                              <a className="pbmit-link" href={`/service/${id}${event.slug}`} />
                            </div>
                            <div className="pbmit-event-infomation">
                              <div className="pbmit-event-date">
                                <div className="pbmit-event-date-type">
                                  <div className="pbmit-from-date">
                                    <div className="pbmit-date">{event.date.split(" ")[0]}</div>
                                    <div className="pbmit-month">{event.date.split(" ")[1]}</div>
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-event-details">
                                <div className="pbmit-event-title">
                                  <h3 className="pbmit-heading-text">
                                    <a href={`/service/${id}${event.slug}`}>
                                      {event.title}
                                    </a>
                                  </h3>
                                </div>
                                <div className="pbmit-event-meta d-flex align-items-center">
                                  <div className="pbmit-event-meta-line pbmit-event-time d-flex">
                                    <i className="pbmit-base-icon-time" />
                                    <div className="pbmit-event-meta-time">{event.duration}</div>
                                  </div>
                                  <div className="pbmit-event-meta-line pbmit-event-registration-date d-flex">
                                    <i className="pbmit-base-icon-calendar-3" />
                                    <span className="pbmit-event-date-text">{event.registrationDate}</span>
                                  </div>
                                </div>
                                <div className="pbmit-event-price">
                                  <div className="pbmit-event-meta-price">
                                    <span onClick={() => navigate("/contact")}>Enquiry Now</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-event-arrow-link">
                            <a href={`/service/${id}${event.slug}`} className={`event-style-color ${event.type.toLowerCase().replace(" ", "-")}`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No events available.</p>
              )}
            </div>
          </div>
        </section>

        <section className="appoinment_two">
          <div className="container">
            <div className="appoinment-two_bg">
              <div className="appoinment-bg-overlay" />
              <div className="appoinment-two-left">
                <div className="pbmit-heading-subheading animation-style2">
                  <h2 className="pbmit-title text-white">
                    Join Free Trial Classes and Yoga To Relief Your Stress
                  </h2>
                  <p className="text-white">
                    Mauris ut lacus interdum, placerat arcu nec, feugiat
                    lectus. Suspendisse nec tincidunt nibh. Suspendisse potenti.
                  </p>
                </div>
              </div>
              <div className="appoinment-two-right">
                <div className="newsletter_form_input">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                  />
                  <div className="pbmit-btn-wraper">
                    <a
                      className="elementor-animation-push elementor-button-link elementor-button elementor-size-md"
                      href="#"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-icon elementor-align-icon-right">
                          <LuBellRing />
                        </span>
                        <span className="elementor-button-text">
                          Subscribe Now
                        </span>
                      </span>
                    </a>
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
