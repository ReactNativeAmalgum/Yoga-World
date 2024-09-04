import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Banner.css";
import yoga1 from "../../images/yoga1.jpg";
import yoga2 from "../../images/yoga2.jpg";
import yoga3 from "../../images/yoga3.jpg";
import { Reveal, Rotate, Slide } from "react-awesome-reveal";

const CarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    interval: 5000, // Adjusted interval to match animation timing
    pause: "hover",
    controls: true,
    indicators: true,
  };

  const moreAbout = () => (
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

  const moreAbout2 = () => (
    <Rotate right duration={2000}>
      <div className="booknow-circle-cont">
        <Link to={"/contact"} style={{ textDecoration: "none" }}>
          <div className="banner-book-now2">
            <span> Contact Us</span>
          </div>
        </Link>
      </div>
    </Rotate>
  );

  const slides = [
    {
      id: 1,
      img: yoga1,
      text: "Heal yourself through Yoga",
      text2:
        "We all need a little space to grow. Give yourself the space to find your inner you.",
    },
    {
      id: 2,
      img: yoga2,
      text: "Find peace within",
      text2: "Your journey to wellness starts here.",
    },
    {
      id: 3,
      img: yoga3,
      text: "Embrace the calm",
      text2: "Nurture your body, mind, and spirit.",
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
              className="d-block w-100 slider-img"
              src={slide.img}
              alt={`Slide ${slide.id}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="text-box">
        <Slide direction="left" duration={2000} delay={500}>
          <h3 className="txt-h3">{slides[currentSlide].text}</h3>
        </Slide>
        <Slide direction="left" duration={2000} delay={1000}>
          <h2>{slides[currentSlide].text2}</h2>
        </Slide>
        <Slide direction="up" duration={2000} delay={1000}>

        <div className="moreAbout">{moreAbout()}</div>
        <div className="moreAbout2">{moreAbout2()}</div>
        </Slide>
      </div>
    </div>
  );
};

export default CarouselBanner;
