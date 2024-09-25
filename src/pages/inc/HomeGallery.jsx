import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import { Bounce, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { eevent } from '../../components/Trainer.js'
function HomeGallery() {

  const [isInView, setIsInView] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry.isIntersecting); // Check if it is in view
        setIsInView(entry.isIntersecting);
      },
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

  const heading = "Elegant designs enhancing your living spaces beautifully.".split(" ");

  return (
    <>
      <section className="marg-t">
        <div className="container">
          <div className="position-relative">
            <div className="pbmit-heading-subheading animation-style2 home-gallery-cont">
              <h4 className="pbmit-subtitle home-gallery-txt">Gallery</h4>
              <h2 className="pbmit-title home-gallery-txt" ref={headingRef}>
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
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="gallery-image">
                <img
                  src={eevent[1].eventData[2].image}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="gallery-image">
                <img
                  src={eevent[2].eventData[1].image}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="gallery-image">
                <img
                  src={eevent[0].eventData[1].image}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div />
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="gallery-image">
                <img
                  src={eevent[0].eventData[3].image}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="gallery-image">
                <img
                  src={eevent[1].eventData[4].image}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="gallery-image">
                <img
                  src={eevent[2].eventData[4].image}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default HomeGallery;
