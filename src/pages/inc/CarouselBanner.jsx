import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Banner.css";

const CarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    interval: 3000, // This replaces `autoplaySpeed` from react-slick
    pause: "hover", // Pause on hover
    controls: true, // Show controls if needed
    indicators: true, // Show indicators if needed
  };

  const moreAbout = () => {
    return (
      <div className="booknow-circle-cont">
        <Link to={"/contact"} style={{ textDecoration: "none" }}>
          <div className="banner-book-now">
            <span> Contact Us</span>
          </div>

          <div className="book-now-circle">
            <FaArrowRight />
          </div>
        </Link>
      </div>
    );
  };

  const moreAbout2 = () => {
    return (
      <div className="booknow-circle-cont">
        <Link to={"/contact"} style={{ textDecoration: "none" }}>
          <div className="banner-book-now2">
            <span> Contact Us</span>
          </div>
        </Link>
      </div>
    );
  };

  const slides = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/group-people-yoga-mats-park-sunset-with-natural-backdrop_1258-296242.jpg?t=st=1724753338~exp=1724756938~hmac=c673c4d40fa78a2cc50febcc9f0a216d52fde657d888a3508407485c9970d284&w=1380",
      text: "Heal yourself through Yoga",
      text2:
        "We all need a littke space to grow. Give your self the space to find your inner you.",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/group-sporty-people-tree-exercise_1163-4990.jpg?t=st=1724753485~exp=1724757085~hmac=2c38850d9ad4863d8ada8f3d33b61756416f322bf9209fd11cbe1dc7fd68ff98&w=1060",
      text: "Heal yourself through Yoga",
      text2:
        "We all need a littke space to grow. Give your self the space to find your inner you.",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/positive-people-doing-mermaid-pose-yoga-class_1262-16382.jpg?t=st=1724753411~exp=1724757011~hmac=43c4a88193066049d725599283578d839410b3cd2d16cab9d0bb059e8c515c2d&w=1060",
      text: "Heal yourself through Yoga",
      text2:
        "We all need a littke space to grow. Give your self the space to find your inner you.",
    },
  ];

  return (
    <div className="carousel-container">
      <Carousel
        data-bs-theme="dark"
        onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}
        interval={settings.interval}
        pause={settings.pause}
        controls={settings.controls}
        indicators={settings.indicators}
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              style={{
                backgroundColor: "rgba(0,0,0,0.7)",
                opacity: 5,
                textDecoration: "none",
              }}
              className="d-block w-100 slider-img"
              src={slide.img}
              alt={`Slide ${slide.id}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="text-box">
        <h3 className="txt-h3">{slides[currentSlide].text}</h3>
        <h2>{slides[currentSlide].text2}</h2>
        <div className="moreAbout">{moreAbout()}</div>
        <div className="moreAbout2">{moreAbout2()}</div>
      </div>
    </div>
  );
};

export default CarouselBanner;
