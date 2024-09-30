import React, { useEffect, useRef, useState } from "react";
import "./Teacher.css";
import { FaFilePdf } from "react-icons/fa";
import ProgressCircle from "../components/ProgressCircle";
import { Reveal, Rotate, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { trainerDetail } from "../components/Trainer";

export default function Teachers() {
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
  const heading = "Personal Information".split(" ");

  const { id } = useParams();
  const trainers = trainerDetail.find((trainer) => trainer.id === Number(id));
  
  if(!trainers){
    console.log('Trainers not found!')
  }
  return (
    <>
      <div class="pbmit-title-bar-wrapper">
        <div class="container">
          <div class="pbmit-title-bar-content">
            <div class="pbmit-title-bar-content-inner">
              <div class="pbmit-tbar">
                <div class="pbmit-tbar-inner container">
                  <Slide direction="left" duration={2000} delay={500}>
                    <h1 style={{ color: "white" }} class="pbmit-tbar-title">
                      {" "}
                      Trainer
                    </h1>
                  </Slide>
                </div>
              </div>
              <div class="pbmit-breadcrumb">
                <Slide direction="left" duration={2000} delay={1000}>
                  <div class="pbmit-breadcrumb-inner">
                    <span>
                      <a title="" href="#" class="home">
                        <span>Yoge</span>
                      </a>
                    </span>
                    <span class="sep">
                      <i class="pbmit-base-icon-angle-double-right"></i>
                    </span>
                    <span>
                      <span class="post-root post post-post current-item">
                        {" "}
                        Trainers
                      </span>
                    </span>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container teacher-custom-cont">
        <div className="row teacher-custom-row">
          <div className="col-xl-3 teacher-custom-col">
            {/* <div className=""> */}
            <div className="trainer-cont">
              <div className="pbmit-featured-wrapper">
                <img
                  src={trainers.img}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div className="teacher-right-cont">
                <div className="teacher-circle-p-cont">
                  <div className="teacher-small-circle"></div>
                  <p
                    style={{ color: "white" }}
                    className="teacher-card-content"
                  >
                    YOGA TRAINER / YOGA THREAPIST
                  </p>
                </div>
                <h6 className="pbmit-team-title">{trainers.name}</h6>
                <div className="underline mx-auto"></div>
                {/* <div className="teacher-contact-cont">
                  <h6>PHONE NUMBER</h6>
                  <div className="teacher-personal-info-cont">
                    <span>+91 392939384</span>
                  </div>
                </div> */}
                <div className="teacher-contact-cont">
                  <h6>CERTIFICATE </h6>
                  <div className="teacher-personal-info-cont ">
                    <span className="download-text">
                      Download
                      <FaFilePdf className="pdf-icon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>

          <div className="col-xl-9 ">
            <div className="teacher-right-column-container">
              <div style={{}} class=" border  custom-column-9">
                <div className="teacher-right-column-inner-container">
                  <h4 ref={headingRef}>
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
                  </h4>
                  <span className="teacher-p-info">
                    <span className="special-word">W</span>{trainers.para1}
                  </span>
                  <br />
                  <br />
                  <p>
                    {trainers.para2}
                  </p>
                  <div className="certificate-cont">
                    <div class="container">
                      <div class="row no-gap exp-cer-spe-column">
                        <div class="col-md-2 custom-col-left-inner">
                          <h6>Specially:</h6>
                        </div>
                        <div class="col-md-8 custom-col-right-inner">
                          <p>{trainers.specially}</p>
                        </div>
                      </div>
                      <div class="row no-gap exp-cer-spe-column">
                        <div class="col-md-2 custom-col-left-inner">
                          <h6>Certification:</h6>
                        </div>
                        <div class="col-md-8 custom-col-right-inner">
                          <p>{trainers.certification}</p>
                        </div>
                      </div>
                      <div class="row no-gap exp-cer-spe-column">
                        <div class="col-md-2 custom-col-left-inner">
                          <h6>Experience:</h6>
                        </div>
                        <div class="col-md-8 custom-col-right-inner">
                          <p>{trainers.Experience}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="teacher-training-cont">
                <div className="container">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <ProgressCircle
                        digit={85}
                        fill="#448c74"
                        emptyFill="#e9f0ec"
                        size={150}
                        thickness={3}
                        label="Caring Your Flex Body"
                      />
                    </div>
                    <div className="col-md-4">
                      <ProgressCircle
                        digit={70}
                        fill="#448c74"
                        emptyFill="#e9f0ec"
                        size={150}
                        thickness={3}
                        label="Skills for life transitions"
                      />
                    </div>
                    <div className="col-md-4">
                      <ProgressCircle
                        digit={85}
                        fill="#448c74"
                        emptyFill="#e9f0ec"
                        size={150}
                        thickness={3}
                        label="Access to your inner wisdom"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="progress-container">
                      {[
                        { value: trainers.flex, label: "Caring Your Flex Body" },
                        { value: trainers.skill, label: "Skills for life transitions" },
                        { value: trainers.access, label: "Access to your inner wisdom" },
                      ].map((circle, index) => (
                        <ProgressCircle
                          key={index}
                          className={`progress-circle ${index === 2 ? "special-circle" : ""}`}
                          value={circle.value}
                          fill="#448c74"
                          emptyFill="#e9f0ec"
                          size={150}
                          thickness={5}
                          label={circle.label}
                        />
                      ))}
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
