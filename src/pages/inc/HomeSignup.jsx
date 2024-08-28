import React from "react";
import { PiBellRingingThin } from "react-icons/pi";

export default function HomeSignup() {
  return (
    <section>
      <div className="container">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="ihbox-style-4_bg">
              <div className="pbmit-ihbox-style-4">
                <div className="pbmit-ihbox-headingicon">
                  <h4 className="pbmit-element-heading">Join our School</h4>
                  <h2 className="pbmit-element-title">
                    Ready to start learn?
                    <br /> Sign up now!
                  </h2>
                  <div className="pbmit-ihbox-btn">
                    <a href="contact-us.html">
                      <span className="pbmit-button-text">sign up now</span>
                      <span className="pbmit-button-icon-wrapper">
                        <span className="pbmit-button-icon">
                          <i className="pbmit-base-icon-black-arrow-1" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ihbox-style-5_bg">
              <div className="pbmit-ihbox-style-5">
                <div className="pbmit-ihbox-box d-flex align-items-center">
                  <div className="pbmit-ihbox-icon">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                      }}
                      className="pbmit-ihbox-icon-wrapper"
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className="pbmit-icon-wrapper pbmit-icon-type-icon"
                      >
                        <PiBellRingingThin
                          style={
                            {
                              // fontSize: "24px",
                            }
                          }
                        />
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
    </section>
  );
}
