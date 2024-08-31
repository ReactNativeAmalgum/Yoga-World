import React, { useEffect } from "react";

import "./Teacher.css";
import { FaFilePdf } from "react-icons/fa";
import ProgressCircle from "../components/ProgressCircle";

export default function Teachers() {
  return (
    <>
        <div class="pbmit-title-bar-wrapper">
          <div class="container">
            <div class="pbmit-title-bar-content">
              <div class="pbmit-title-bar-content-inner">
                <div class="pbmit-tbar">
                  <div class="pbmit-tbar-inner container">
                    <h1 class="pbmit-tbar-title"> Trainers</h1>
                  </div>
                </div>
                <div class="pbmit-breadcrumb">
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
                    src="https://cdn-ilbdkbh.nitrocdn.com/GGBSRezAcKtdtDGlymCMPjksrwxVOkHU/assets/images/optimized/rev-da2fefc/arogyayoghome.com/wp-content/uploads/2024/05/Trainer-2.jpeg"
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
                      YOGA TRAINER
                    </p>
                  </div>
                  <h6 className="pbmit-team-title">Jayprakash Dhakad</h6>
                  <div className="underline mx-auto"></div>
                  <div className="teacher-contact-cont">
                    <h6>PHONE NUMBER</h6>
                    <div className="teacher-personal-info-cont">
                      <span>+91 392939384</span>
                    </div>
                  </div>
                  <div className="teacher-contact-cont">
                    <h6>CERTIFICATE </h6>
                    <div className="teacher-personal-info-cont ">
                      <span  className="download-text">
                      
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
                <div style={{}} class="p-3 border  custom-column-9">
                  <div className="teacher-right-column-inner-container">
                    <h4>Personal Information</h4>
                    <span className="teacher-p-info">
                      <span className="special-word">W</span>This column takes
                      up 9/12 of the width on extra-large screens. This column
                      takes up 9/12 of the width on extra-large screens. This
                      column takes up 9/12 of the width on extra-large screens.
                      This column takes up 9/12 of the width on extra-large
                      screens. This column takes up 9/12 of the width on
                      extra-large screens.
                    </span>
                    <br />
                    <br />
                    <p>
                      This column takes up 9/12 of the width on extra-large
                      screens. This column takes up 9/12 of the width on
                      extra-large screens. This column takes up 9/12 of the
                      width on extra-large screens. This column takes up 9/12 of
                      the width on extra-large screens.
                    </p>
                    <div className="certificate-cont">
                      <div class="container">
                        <div class="row no-gap exp-cer-spe-column">
                          <div class="col-md-2 custom-col-left-inner">
                            <h6>Specially:</h6>
                          </div>
                          <div class="col-md-8 custom-col-right-inner">
                            <p>Conclusion, self practice and self study</p>
                          </div>
                        </div>
                        <div class="row no-gap exp-cer-spe-column">
                          <div class="col-md-2 custom-col-left-inner">
                            <h6>Certification:</h6>
                          </div>
                          <div class="col-md-8 custom-col-right-inner">
                            <p>Conclusion, self practice and self study</p>
                          </div>
                        </div>
                        <div class="row no-gap exp-cer-spe-column">
                          <div class="col-md-2 custom-col-left-inner">
                            <h6>Experience:</h6>
                          </div>
                          <div class="col-md-8 custom-col-right-inner">
                            <p>5+, self practice and self study</p>
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
                  <div class="progress-container">
                    <ProgressCircle
                      class="progress-circle"
                      value={85}
                      fill="#448c74"
                      emptyFill="#e9f0ec"
                      size={150}
                      thickness={5}
                      label="Caring Your Flex Body"
                    />
                    <ProgressCircle
                      class="progress-circle"
                      value={70}
                      fill="#448c74"
                      emptyFill="#e9f0ec"
                      size={150}
                      thickness={5}
                      label="Skills for life transitions"
                    />
                    <ProgressCircle
                      class="progress-circle"
                      className='special-circle'
                      value={90}
                      fill="#448c74"
                      emptyFill="#e9f0ec"
                      size={150}
                      thickness={5}
                      label="Access to your inner wisdom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
