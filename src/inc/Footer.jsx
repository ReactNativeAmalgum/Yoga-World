import React from "react";

import {
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaPhone,
  FaMapPin,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";

import { Link,  } from "react-router-dom";

import "./Footer.css";

export default function Footer() {

  return (
    <>
      <section className="bottom-bar-cont">
        <div className="bar" />
        <div className="container">
          <div className="footer-row">
            <div className="footer-col-6">
              <h3 style={{ paddingTop: 5 }}>Abouts</h3>
              <p>
                Welcome to Yoga Home, where we understand the challenges of
                modern lifestyles and their impact on physical and emotional
                well-being.
              </p>
              <div className=" logo-cont">
                <img src="https://cdn-ilbdkbh.nitrocdn.com/GGBSRezAcKtdtDGlymCMPjksrwxVOkHU/assets/images/optimized/rev-da2fefc/arogyayoghome.com/wp-content/uploads/2024/01/Arogya-yoghome-logo.png" />
              </div>
            </div>
            <div className="footer-nav-cont  col-2">
              <h3>General</h3>
              <p>
                <Link className="footer-nav-cont-p" to="/">
                  Home
                </Link>
              </p>
              <p>
                <Link className="footer-nav-cont-p" to="/services">
                  Services
                </Link>
              </p>
              <p>
                <Link className="footer-nav-cont-p" to="/about">
                  About Us
                </Link>
              </p>
              <p>
                <Link className="footer-nav-cont-p" to="/contact">
                  Contact Us
                </Link>
              </p>
            </div>
            <div className="footer-nav-cont col-2">
              <h3>Connect</h3>
              <div className="social">
                <FaFacebookF className="icon" /> <p>Facebook</p>
              </div>
              <div className="social">
                <FaInstagram className="icon" /> <p>Instagram</p>
              </div>
              <div className="social">
                <FaWhatsapp className="icon" /> <p>WhatsApp</p>
              </div>
            </div>
            <div className="footer-nav-cont col-2">
              <div className="speacial-h3">
                <h3>Contact Us</h3>
              </div>
              <div className="social">
                <CgMail className="icon" /> <p>rudra@gmail.com</p>
              </div>
              <div className="social">
                <FaPhone className="icon" /> <p>+91-9920027780</p>
              </div>
              <div className="social">
                <FaMapPin className="icon" />{" "}
                <p>301, Shree Kridhna Digital, Andher - 73</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="copywright">
          <p>2024 ©️ Yrogya Yoghome | All rights reserved | #SKDM</p>
        </div>
      </section>
    </>
  );
}
