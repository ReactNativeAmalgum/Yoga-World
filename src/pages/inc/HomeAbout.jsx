import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import './HomeAbout.css'
import ProgressCircle from '../../components/ProgressCircle';


export default function HomeAbout() {
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
  const heading = "My course helps to become".split(" ");

  return (
    // <section className="about-section-cont">
    //   <div className="container">
    //     <div className="position-relative">
    //       <div className="pbmit-heading-subheading animation-style2 home-gallery-cont">
    //         <h4 className="pbmit-subtitle home-gallery-txt">About us</h4>
    //         <h2 className="pbmit-title home-gallery-txt" ref={headingRef}>
    //           {heading.map((el, i) => (
    //             <motion.span
    //               key={i}
    //               initial={{ opacity: 0, y: 20 }}
    //               animate={isInView ? { opacity: 1, y: 0 } : {}}
    //               transition={{ duration: 0.5, delay: i * 0.3 }}
    //             >
    //               {el}{" "}
    //             </motion.span>
    //           ))}
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section
      className="section-lg counter-section_one pbmit-extend-animation pbmit-bg-color-global Homeabout-cont"
    // style={{ clipPath: "inset(0% 4.775% round 28.65px)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xl-4">
            <div className="pbmit-heading-subheading text-white animation-style2">
              <h4 className="pbmit-subtitle">why people choose us</h4>


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


              <div className="pbmit-heading-desc">
                Nullam porta enim vel tellus commodo eget laoreet odio ultrices.
                Etiam fringilla lobortis sapien sit amet cursus. Maecenas est orci
                congue egestas lobortis vel feugiat non tellus.
              </div>
            </div>
            <a
              className="pbmit-btn pbmit-btn-hover-white"
              href="/about"
              data-magnetic=""
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
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
                <span className="pbmit-button-text">Read More</span>
              </span>
            </a>
          </div>
          <div className="col-md-12 col-xl-4">
            <div className="img_box">
              <img
                src="https://yoge-demo.pbminfotech.com/html-demo/images/homepage-1/img-01.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-12 col-xl-4">
            <div className="counter-one_box">
              <div className="pbminfotech-ele-fid-style-1">
                <div className="pbmit-fld-contents d-flex align-items-center">
                  <div
                    className="pbmit-circle-outer completed"
                    data-digit={85}
                    data-fill="#ffffff"
                    data-emptyfill="#448c74"
                    data-before=""
                    data-after="<sup>%</sup>"
                    data-thickness={3}
                    data-size={127}
                  >
                    <div className="pbmit-circle">

                      <ProgressCircle
                        className={`progress-circle`}
                        value={85}
                        fill='white'
                        emptyFill="#448c74"
                        size={115}
                        innerColor='#e5c466'
                        thickness={3}
                      // label={circle.label}
                      />
                    </div>
                  </div>
                  <div className="pbmit-fid-sub">
                    <h3 className="pbmit-fid-title">Happy Customers</h3>
                    <div className="pbmit-heading-desc">
                      Sed risus augue commodo ornare felis non eleifend.
                    </div>
                  </div>
                </div>
              </div>
              <div className="pbminfotech-ele-fid-style-1">
                <div className="pbmit-fld-contents d-flex align-items-center">
                  <div
                    className="pbmit-circle-outer completed"
                    data-digit={90}
                    data-fill="#ffffff"
                    data-emptyfill="#448c74"
                    data-before=""
                    data-after="<sup>%</sup>"
                    data-thickness={3}
                    data-size={127}
                  >
                    <div className="pbmit-circle">

                      <ProgressCircle
                        className={`progress-circle`}
                        value={90}
                        fill='white'
                        emptyFill="#448c74"
                        size={115}
                        innerColor='#e5c466'
                        thickness={3}
                      // label={circle.label}
                      />
                    </div>
                  </div>
                  <div className="pbmit-fid-sub">
                    <h3 className="pbmit-fid-title">Experienced trainer</h3>
                    <div className="pbmit-heading-desc">
                      Sed risus augue commodo ornare felis non eleifend.
                    </div>
                  </div>
                </div>
              </div>
              <div className="pbminfotech-ele-fid-style-1">
                <div className="pbmit-fld-contents d-flex align-items-center">
                  <div
                    className="pbmit-circle-outer completed"
                    data-digit={80}
                    data-fill="#ffffff"
                    data-emptyfill="#448c74"
                    data-before=""
                    data-after="<sup>%</sup>"
                    data-thickness={3}
                    data-size={127}
                  >
                    <div className="pbmit-circle">

                      <ProgressCircle
                        className={`progress-circle`}
                        value={80}
                        fill='white'
                        emptyFill="#448c74"
                        size={115}
                        innerColor='#e5c466'
                        thickness={3}
                      // label={circle.label}
                      />
                    </div>
                  </div>
                  <div className="pbmit-fid-sub">
                    <h3 className="pbmit-fid-title">Active Clients</h3>
                    <div className="pbmit-heading-desc">
                      Sed risus augue commodo ornare felis non eleifend.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}
