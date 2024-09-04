import React, { useState, useRef, useEffect } from "react";
import "../../index.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // To handle which submenu is open
  const [rightArrow , setRightArrow]  = useState(false)
  const menuRef = useRef(null);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  // Function to toggle a specific submenu
  const toggleSubMenu = (index) => {
    setOpenSubMenu((prevState) => (prevState === index ? null : index));
  };

  // Function to handle clicks outside the menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(false); // Close the menu if the click is outside
      setOpenSubMenu(null); // Optionally close the submenu
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleArrow = ()=> {
    alert()
    console.log(rightArrow)
    setRightArrow(true)
  }

  return (
    <>
      <header className="site-header header-style-1">
        <div className="pbmit-header-overlay">
          <div className="container">
            <div className="pbmit-header-content d-flex justify-content-between align-items-center">
              <div className="site-branding">
                <h1 className="site-title">
                  <a href="index.html">
                    <img
                      className="logo-img"
                      src="https://cdn-ilbdkbh.nitrocdn.com/GGBSRezAcKtdtDGlymCMPjksrwxVOkHU/assets/images/optimized/rev-da2fefc/arogyayoghome.com/wp-content/uploads/2024/01/Arogya-yoghome-logo.png"
                      alt="Yoge"
                    />
                  </a>
                </h1>
              </div>
              <div className="site-navigation" ref={menuRef}>
                <nav className="main-menu navbar-expand-xl navbar-light">
                  <div className="navbar-header">
                    {/* Toggle Button */}
                    <button
                      onClick={toggleMenu}
                      className="navbar-toggler"
                      type="button"
                    >
                      <i className="pbmit-base-icon-menu-1" />
                    </button>
                  </div>
                  <div
                    className={`collapse navbar-collapse ${
                      openMenu ? "show" : ""
                    }`}
                    id="pbmit-menu"
                  >
                    <div className="pbmit-menu-wrap">
                      <span className="closepanel" onClick={toggleMenu}>
                        <svg
                          className="qodef-svg--close qodef-m"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.163"
                          height="20.163"
                          viewBox="0 0 26.163 26.163"
                        >
                          <rect
                            width={36}
                            height={1}
                            transform="translate(0.707) rotate(45)"
                          />
                          <rect
                            width={36}
                            height={1}
                            transform="translate(0 25.456) rotate(-45)"
                          />
                        </svg>
                      </span>
                      <ul className="navigation clearfix">
                        <li className="dropdown active">
                          <a href="/">Home</a>
                        </li>

                        <li className="dropdown ">
                          <a
                            href="#"
                            onClick={()=>handleArrow}
                          >
                            Services
                          </a>
                          <span className="righticon" onClick={()=>handleArrow}>
                            <i className={`pbmit-base-icon-angle-right `} />
                          </span>
                          <ul
                            className={`sub-menu ${
                              rightArrow ? "show-sub-menu" : ""
                            }`}
                          >
                            <li>
                              <a href="/service/offline_online">Classes</a>
                            </li>
                            <li>
                              <a href="/service/doctor">Doctor Consultations</a>
                            </li>
                          </ul>
                        </li>

                        <li className="dropdown">
                          <a href="/about">About Us</a>
                        </li>

                        <li className="dropdown">
                          <a href="/servicedetail">Classes Detail</a>
                        </li>
                        <li className="dropdown">
                          <a href="/traine">Trainers</a>
                        </li>
                        <li>
                          <a href="/contact">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="pbmit-right-box d-flex align-items-center">
                <div className="pbmit-button-box">
                  <div className="pbmit-header-button">
                    <a href="tel:+%201(212)%20255-511">
                      <span className="pbmit-header-button-text-1">
                        +1(212)255-511
                      </span>
                      <span className="pbmit-header-button-text-2">
                        + 1(212) 255-511
                      </span>
                    </a>
                  </div>
                </div>
                <div className="pbmit-header-search-btn">
                  <a href="#" title="Search">
                    <i className="pbmit-base-icon-search-1" />
                  </a>
                </div>
                {/* <div className="pbmit-button-box-second">
                  <a
                    className="pbmit-btn pbmit-btn-global"
                    href="contact-us.html"
                  >
                    <span className="pbmit-btn-content-wrapper">
                      <span className="pbmit-button-text">
                        Make An Appointment
                      </span>
                      <span className="pbmit-button-icon">
                        <i className="pbmit-base-icon-black-arrow-1" />
                      </span>
                    </span>
                  </a>
                  <div className="pbmit-sticky-corner pbmit-top-left-corner">
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill=""
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M30 30V0C30 16 16 30 0 30H30Z" fill="red" />
                    </svg>
                  </div>
                  <div className="pbmit-sticky-corner pbmit-bottom-right-corner">
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M30 30V0C30 16 16 30 0 30H30Z" fill="red" />
                    </svg>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
