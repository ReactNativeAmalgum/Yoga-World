import React, { useEffect, useRef, useState } from "react";
import { Reveal, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";
import "../App.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { eevent } from "../components/Trainer";
import bookimg from '../images/Hospital_yoga.jpeg'

export default function ServiceDetail() {
  const location = useLocation();
  const [isInView, setIsInView] = useState(false);
  const headingRef = useRef(null);
  const [details, setDetails] = useState(null);
  const [nav, setNav] = useState([]);
  const navigate = useNavigate()

  // Extract ID and slug from the URL
  const [, , id, slug] = location.pathname.split("/");

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

  // Fetch event details based on ID and slug
  useEffect(() => {
    const fetchDetails = () => {
      const trainer = eevent.find(trainer => trainer.id === id);
      if (trainer) {
        console.log("trianer", trainer)
        const navItems = trainer.eventData.map(r => ({ title: r.title, slug: r.slug }));
        setNav(navItems);
        console.log(navItems)
        console.log(nav)
        const event = trainer.eventData.find(data => data.slug === "/" + slug);
        if (event) {
          setDetails(event);
          console.log(event)
        } else {
          console.error('Event not found');
        }
      } else {
        console.error('Trainer not found');
      }
    };

    fetchDetails();
  }, [id, slug]);

  const heading = "Our yoga is the fountain of the youth".split(" ");
  const heading2 = "Different types of yoga method".split(" ");
  const handleNavigation = (id, slug) => {
    const path = `/service/${id}${slug}`;
    console.log("Navigating to:", path); // Debugging output
    navigate(path);
  };
  return (
    <>
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <Slide direction="left" duration={3000} delay={500}>
                    <h1 className="pbmit-tbar-title">{details?.title || 'Default Title'}</h1>
                  </Slide>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <Slide direction="left" duration={3000} delay={1000}>
                  <div className="pbmit-breadcrumb-inner">
                    <span><a href="#" className="home">Yoge</a></span>
                    <span className="sep"><i className="pbmit-base-icon-angle-double-right" /></span>
                    <span><a href="#" className="home">Services</a></span>
                    <span className="sep"><i className="pbmit-base-icon-angle-double-right" /></span>
                    <span><a href="#" className="home">DJ Yoga Trainer</a></span>
                    <span className="sep"><i className="pbmit-base-icon-angle-double-right" /></span>
                    <span><span className="post-root post post-post current-item">Ardha Chakrasana</span></span>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Service Details */}
        <section className="site_content service_details">
          <div className="container serviceDetail-container">
            <div className="servicedetail-row row">
              <div className="col-lg-9 service-right-col">
                <div className="pbmit-service-feature-image">
                  <img
                    src={details?.image || "images/services/service-detail-01.jpg"}
                    className="img-fluid w-100"
                    alt="Service"
                  />
                </div>
                <div className="pbmit-entry-content">
                  <div className="pbmit-service_content">
                    <div className="pbmit-heading animation-style2">
                      <h3
                        className="pbmit-title mb-3"
                        style={{ perspective: 400 }}
                        ref={headingRef}
                      >
                        {heading.map((word, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                          >
                            {word}{" "}
                          </motion.span>
                        ))}
                      </h3>
                    </div>
                    <p className="pbmit-firstletter">
                      {details?.descp}
                      <u><a className="pbmit-global-color" href="#">considered strength-building</a></u>
                    </p>
                    <p>
                      {details?.descp2}
                      <u><a className="pbmit-global-color" href="#">Flexibility is an important</a></u>
                    </p>
                    <div className="pbmit-heading pt-3 animation-style2">
                      <h3
                        className="pbmit-title mb-3"
                        style={{ perspective: 400 }}
                        ref={headingRef}
                      >
                        {heading2.map((word, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                          >
                            {word}{" "}
                          </motion.span>
                        ))}
                      </h3>
                    </div>
                    <p>{details?.descp3}</p>
                  </div>
                  {/* Additional Info */}
                  <div className="ihbox_style_box">
                    <div className="row">
                      {/* Box 1 */}
                      <div className="col-md-6 col-xl-4">
                        <div className="pbmit-ihbox-style-10">
                          <div className="pbmit-ihbox-box" style={{ backgroundColor: "white" }}>
                            <div className="pbmit-content-wrapper">
                              <div className="pbmit-heading-desc">Yoga Trainer</div>
                              <h2 className="pbmit-element-title">5+ years <br />Experience</h2>
                            </div>
                            <div className="pbmit-ihbox-icon">
                              <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-18" />
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-ihbox-box-number" style={{ backgroundColor: "white" }}>01</div>
                        </div>
                      </div>
                      {/* Box 2 */}
                      <div className="col-md-6 col-xl-4">
                        <div className="pbmit-ihbox-style-10">
                          <div className="pbmit-ihbox-box" style={{ backgroundColor: "white" }}>
                            <div className="pbmit-content-wrapper">
                              <div className="pbmit-heading-desc">Yoga Trainer</div>
                              <h2 className="pbmit-element-title">Modern Yoga <br /> Trainer</h2>
                            </div>
                            <div className="pbmit-ihbox-icon">
                              <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose" />
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-ihbox-box-number" style={{ backgroundColor: "white" }}>02</div>
                        </div>
                      </div>
                      {/* Box 3 */}
                      <div className="col-md-6 col-xl-4">
                        <div className="pbmit-ihbox-style-10">
                          <div className="pbmit-ihbox-box" style={{ backgroundColor: "white" }}>
                            <div className="pbmit-content-wrapper">
                              <div className="pbmit-heading-desc">Yoga Trainer</div>
                              <h2 className="pbmit-element-title">World Class <br /> Gurus</h2>
                            </div>
                            <div className="pbmit-ihbox-icon">
                              <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-8" />
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-ihbox-box-number" style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: "50%" }}>03</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Benefits Section */}
                  <div className="list-group_box">
                    <div className="row">
                      <div className="col-md-12 col-xl-6">
                        <div className="pbmit-animation-style7 active">
                          <img
                            src="https://yoge-demo.pbminfotech.com/html-demo/images/services/service-detail-02.jpg"
                            className="img-fluid"
                            alt="Benefits"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-xl-6">
                        <div className="service-list-group">
                          <div className="pbmit-heading animation-style2">
                            <Slide direction="right" duration={2000} delay={500}>
                              <h3 className="pbmit-title mb-3" style={{ perspective: 400 }}>
                                Benefits of Yoga Session
                              </h3>
                            </Slide>
                          </div>
                          <p>
                            When your immunity is compromised, you're more susceptible to illness. Yoga is considered a scientifically backed alternative treatment for stress.
                          </p>
                          <ul className="list-group list-group-borderless">
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i aria-hidden="true" className="pbmit-base-icon-check" />
                              </span>
                              <span className="pbmit-icon-list-text">Yoga improves strength, balance and flexibility.</span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i aria-hidden="true" className="pbmit-base-icon-check" />
                              </span>
                              <span className="pbmit-icon-list-text">Yoga connects you with a supportive community.</span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i aria-hidden="true" className="pbmit-base-icon-check" />
                              </span>
                              <span className="pbmit-icon-list-text">Yoga can mean more energy and brighter moods.</span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i aria-hidden="true" className="pbmit-base-icon-check" />
                              </span>
                              <span className="pbmit-icon-list-text">Yoga may improve cardiovascular functioning.</span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i aria-hidden="true" className="pbmit-base-icon-check" />
                              </span>
                              <span className="pbmit-icon-list-text">Yoga can promote better posture and body awareness.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar */}
              <div className="col-lg-3 service-left-col sidebar">
                <aside className="service-sidebar">
                  <aside className="widget post-list">
                    <h2 className="widget-title">Our Service</h2>
                    <div className="all-post-list">
                      <ul style={{ paddingLeft: 0 }}>
                        {nav.map((item, index) => (
                          <li key={index} className="post-active">
                            <Link to={`/service/${id}${item.slug}`}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </aside>
                  <aside className="widget pbmit-service-ad">
                    <div className="textwidget">
                      <div className="pbmit-service-ads">
                        <div className="pbmit-logo-img">
                          <img style={{borderRadius:10}} src={bookimg} alt="Advert" />
                        </div>
                        <h4 className="pbmit-ads-title">Book your yoga session</h4>
                        <div className="pbmit-ads-desc">
                          <i className="pbmit-base-icon-phone-call-1" />
                          +(123) 1234-567-8901
                        </div>
                        <a className="pbmit-btn" href="">
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
                            <span className="pbmit-button-text">Register now</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </aside>
                  <aside className="widget">
                    <h2 className="widget-title">Company Profile</h2>
                    <div className="textwidget">
                      <div className="download">
                        <div className="item-download">
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <span className="pbmit-download-content">
                              <i className="pbminfotech-base-icons pbmit-base-icon-document" /> Download PDF File
                            </span>
                            <span className="pbmit-download-item">
                              <i className="pbminfotech-base-icons pbmit-righticon pbmit-base-icon-download" />
                            </span>
                          </a>
                        </div>
                        <div className="item-download">
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <span className="pbmit-download-content">
                              <i className="pbminfotech-base-icons pbmit-base-icon-document" /> Download Word File
                            </span>
                            <span className="pbmit-download-item">
                              <i className="pbminfotech-base-icons pbmit-righticon pbmit-base-icon-download" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </aside>
                </aside>
              </div>
            </div>
          </div>
        </section>
        {/* Service Details End */}
      </div>
    </>
  );
}
