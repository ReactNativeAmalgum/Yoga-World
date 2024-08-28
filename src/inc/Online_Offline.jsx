import React from "react";
import { imageData } from "../images/img_index";
import { LuBellRing } from "react-icons/lu";

export default function Online_Offline() {
  const events = [
    {
      id: 1,
      image: imageData.HomeYoga,
      type: "Time Flexibility",
      link: "#",
      detailLink: "#",
      date: "14 Feb",
      title: "Home Yoga Classes",
      duration: "50 min / Session",
      registrationDate: "08-11-2023",
      price: "$240 / Month",
    },
    {
      id: 2,
      image: imageData.CommunityYoga,
      type: "Empower Communities",
      link: "event-style-1.html",
      detailLink: "event-single-detail.html",
      date: "14 Feb",
      title: "Society Yoga Classes",
      duration: "55 min / Session",
      registrationDate: "22-11-2023",
      price: "$300 / Month",
    },
    {
      id: 3,
      image: imageData.CorporateYoga,
      type: "Stress Buster",
      link: "event-style-1.html",
      detailLink: "event-single-detail.html",
      date: "14 Feb",
      title: "Corporate Yoga",
      duration: "60 min / Session",
      registrationDate: "20-11-2023",
      price: "$330 / Month",
    },
    {
      id: 4,
      image: imageData.HospitalYoga,
      type: "Therapeutic",
      link: "#",
      detailLink: "event-single-detail.html",
      date: "14 Feb",
      title: "Hospital Yoga Classes",
      duration: "45 min / Session",
      registrationDate: "14-11-2023",
      price: "$200 / Month",
    },
    {
      id: 5,
      image: imageData.H_R_yoa,
      type: "Blissful Experience",
      link: "event-style-1.html",
      detailLink: "event-single-detail.html",
      date: "14 Feb",
      title: "Hotel & Resorts Yoga classes",
      duration: "55 min / Session",
      registrationDate: "11-11-2023",
      price: "$370 / Month",
    },
    {
      id: 6,
      image: imageData.Women_Yoga,
      type: "Women Empowerment",
      link: "event-style-1.html",
      detailLink: "event-single-detail.html",
      date: "14 Feb",
      title: "Women's Care Yoga Classes",
      duration: "30 min / Session",
      registrationDate: "01-11-2023",
      price: "$245 / Month",
    },
    {
      id: 7,
      image: imageData.F_C_Yoga,
      type: "Deepened Connections",
      link: "#",
      detailLink: "event-single-detail.html",
      date: "14 Feb",
      title: "Family /Couple Yoga Classes",
      duration: "30 min / Session",
      registrationDate: "01-11-2023",
      price: "$245 / Month",
    },
    {
      id: 8,
      image: imageData.EmpYoga,
      type: "Corporate Wellbeing System",
      link: "#",
      detailLink: "event-single-detail.html",
      date: "14 Feb",
      title: "Office Yoga Classes",
      duration: "30 min / Session",
      registrationDate: "01-11-2023",
      price: "$245 / Month",
    },
    {
      id: 9,
      image: imageData.school_yoga,
      type: "Empowering Young Mindset",
      link: "#",
      detailLink: "event-single-detail.html",
      date: "14 Feb",
      title: "Office Yoga Classes",
      duration: "30 min / Session",
      registrationDate: "01-11-2023",
      price: "$245 / Month",
    },
    {
      id: 10,
      image: imageData.AbroadYoga,
      type: "Yoga Around The World",
      link: "#",
      detailLink: "event-single-detail.html",
      date: "14 Feb",
      title: "Abroad Yoga Classes",
      duration: "30 min / Session",
      registrationDate: "01-11-2023",
      price: "$245 / Month",
    },
    {
      id: 11,
      image: imageData.TourstYoga,
      type: "Holistic Exploration",
      link: "#",
      detailLink: "event-single-detail.html",
      date: "14 Feb",
      title: "Tourist Yoga Classes",
      duration: "30 min / Session",
      registrationDate: "01-11-2023",
      price: "$245 / Month",
    },
    {
      id: 11,
      image: imageData.Occupation_Yoga,
      type: "Word related Occasion",
      link: "#",
      detailLink: "event-single-detail.html",
      date: "14 Feb",
      title: "Occupational event Yoga Classes",
      duration: "30 min / Session",
      registrationDate: "01-11-2023",
      price: "$245 / Month",
    },
  ];
  return (
    <>
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title"> Classes</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Even Style 1 */}
        <section className="section-md event_boxes">
          <div className="container">
            <div className="pbmit-heading-subheading animation-style2">
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
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
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
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
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
                  <div
                    style={{ position: "relative", display: "inline-block" }}
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
            <div className="row">
              {events.map((event) => (
                <div className="col-md-4" key={event.id}>
                  <div className="pbmit-ele-event_listing">
                    <div className="pbmit-event-layout-wrapper">
                      <div
                        className={`event_listing event-type-${event.type
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        <div
                          className={`pbmit-event-action-url event-style-color ${event.type
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          <div className="pbmit-event-banner">
                            <div
                              className="pbmit-event-banner-img"
                              style={{ backgroundImage: `url(${event.image})` }}
                            >
                              <div className="pbmit-event-type">
                                <a href={event.link}>
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
                            <a className="pbmit-button" href={event.detailLink}>
                              <span className="pbmit-button-icon-wrapper">
                                <span className="pbmit-button-icon">
                                  <i className="pbmit-base-icon-black-arrow-1" />
                                </span>
                              </span>
                            </a>
                            <a className="pbmit-link" href={event.detailLink} />
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
                                  <a href={event.detailLink}>{event.title}</a>
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
                                <div className="pbmit-event-meta-price">
                                  <span>Enquiry Now</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-event-arrow-link">
                          <a
                            href={event.detailLink}
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

        <section className="appoinment_two">
          <div className="container">
            <div className="appoinment-two_bg">
              <div className="appoinment-bg-overlay" />
              <div className="row align-items-center g-0">
                <div className="col-md-4">
                  <div className="appoinment-two_left">
                    <div className="pbmit-ihbox-style-5">
                      <div className="pbmit-ihbox-box d-flex align-items-center">
                        <div className="pbmit-ihbox-icon">
                          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}} className="pbmit-ihbox-icon-wrapper">
                            <div style={{display:'contents'}} className="pbmit-icon-wrapper pbmit-icon-type-icon">
                            <LuBellRing style={{fontSize:52, rotate:'320deg'}} />                            </div>
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
        {/* Appoinment End */}
        {/* Pricing Start */}
        <section className="section-xl">
          <div className="container">
            <div className="pbmit-heading-subheading animation-style2">
              <h4 className="pbmit-subtitle">my price</h4>
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
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      C
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      h
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      o
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      o
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      s
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      e
                    </div>
                  </div>{" "}
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      a
                    </div>
                  </div>{" "}
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      s
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      u
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      b
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      s
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      c
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      r
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      i
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      p
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      t
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      i
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      o
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(50px, 0px)",
                        opacity: 0,
                      }}
                    >
                      n
                    </div>
                  </div>
                </div>
              </h2>
            </div>
            <div className="pbminfotech-ptable-style-1">
              <div className="pbmit-ptable-cols row">
                <div className="pbmit-ptable-col col-lg-4 col-md-6">
                  <div className="pbmit-pricing-table-box">
                    <div className="pbmit-head-wrap">
                      <div className="pbminfotech-ptable-desc">Individual</div>
                      <h3 className="pbminfotech-ptable-heading">Light Yoga</h3>
                      <div className="pbminfotech-sep" />
                      <div className="pbmit-price-wrapper">
                        <div className="pbmit-head-icon-wrap">
                          <div className="pbmit-ptable-icon">
                            <div className="pbmit-ptable-icon-wrapper" />
                          </div>
                        </div>
                        <div className="pbmit-ptable-price-w">
                          <div className="pbminfotech-ptable-symbol">$</div>
                          <div className="pbminfotech-ptable-price">12</div>
                        </div>
                        <div className="pbminfotech-ptable-frequency">
                          / Month
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ptable-inner">
                      <div className="pbmit-ptable-lines-w">
                        <div className="pbmit-ptable-line">
                          <i className="ti-check" /> 2 hours personal training
                        </div>
                        <div className="pbmit-ptable-line">
                          <i className="" /> Video &amp; audio content
                        </div>
                        <div className="pbmit-ptable-line">
                          <i className="ti-check" /> 1 month support
                        </div>
                        <div className="pbmit-ptable-line">
                          <i className="" /> Lifetime access
                        </div>
                      </div>
                      <div className="pbminfotech-ptable-btn">
                        <a href="#" className="pbmit-btn pbmit-btn-outline">
                          <span className="pbmit-button-text">
                            Purchase now
                          </span>
                          <span className="pbmit-button-icon-wrapper">
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
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="pbmit-feature-wrap" />
                  </div>
                </div>
                <div className="pbmit-pricing-table-featured-col pbmit-ptable-col col-lg-4 col-md-6">
                  <div className="pbmit-pricing-table-box">
                    <div className="pbmit-head-wrap">
                      <div className="pbminfotech-ptable-desc">
                        Premium plan
                      </div>
                      <h3 className="pbminfotech-ptable-heading">
                        Deep Meditaion
                      </h3>
                      <div className="pbminfotech-sep" />
                      <div className="pbmit-price-wrapper">
                        <div className="pbmit-head-icon-wrap">
                          <div className="pbmit-ptable-icon">
                            <div className="pbmit-ptable-icon-wrapper" />
                          </div>
                        </div>
                        <div className="pbmit-ptable-price-w">
                          <div className="pbminfotech-ptable-symbol">$</div>
                          <div className="pbminfotech-ptable-price">45</div>
                        </div>
                        <div className="pbminfotech-ptable-frequency">
                          / Month
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ptable-inner">
                      <div className="pbmit-ptable-lines-w">
                        <div className="pbmit-ptable-line">
                          <i className="ti-check" /> 2 hours personal training
                        </div>
                        <div className="pbmit-ptable-line">
                          <i className="ti-check" /> Video &amp; audio content
                        </div>
                        <div className="pbmit-ptable-line">
                          <i className="ti-check" /> 1 month support
                        </div>
                        <div className="pbmit-ptable-line">
                          <i className="" /> Lifetime access
                        </div>
                      </div>
                      <div className="pbminfotech-ptable-btn">
                        <a href="#" className="pbmit-btn pbmit-btn-outline">
                          <span className="pbmit-button-text">
                            Purchase now
                          </span>
                          <span className="pbmit-button-icon-wrapper">
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
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="pbmit-feature-wrap">
                      <div className="pbmit-ptablebox-featured-w" />
                    </div>
                  </div>
                </div>
                <div className="pbmit-ptable-col col-lg-4 col-md-6">
                  <div className="pbmit-pricing-table-box">
                    <div className="pbmit-head-wrap">
                      <div className="pbminfotech-ptable-desc">
                        Advanced plan
                      </div>
                      <h3 className="pbminfotech-ptable-heading">
                        Full Complex
                      </h3>
                      <div className="pbminfotech-sep" />
                      <div className="pbmit-price-wrapper">
                        <div className="pbmit-head-icon-wrap">
                          <div className="pbmit-ptable-icon">
                            <div className="pbmit-ptable-icon-wrapper" />
                          </div>
                        </div>
                        <div className="pbmit-ptable-price-w">
                          <div className="pbminfotech-ptable-symbol">$</div>
                          <div className="pbminfotech-ptable-price">99</div>
                        </div>
                        <div className="pbminfotech-ptable-frequency">
                          / Month
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ptable-inner">
                      <div className="pbmit-ptable-lines-w">
                        <div className="pbmit-ptable-line">
                          <i className="ti-check" /> 2 hours personal training
                        </div>
                        <div className="pbmit-ptable-line">
                          <i className="ti-check" /> Video &amp; audio content
                        </div>
                        <div className="pbmit-ptable-line">
                          <i className="ti-check" /> 1 month support
                        </div>
                        <div className="pbmit-ptable-line">
                          <i className="ti-check" /> Lifetime access
                        </div>
                      </div>
                      <div className="pbminfotech-ptable-btn">
                        <a href="#" className="pbmit-btn pbmit-btn-outline">
                          <span className="pbmit-button-text">
                            Purchase now
                          </span>
                          <span className="pbmit-button-icon-wrapper">
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
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="pbmit-feature-wrap" />
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
