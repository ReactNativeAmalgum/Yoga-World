import React, { useState, useRef, useEffect } from "react";
import "../../index.css";
import { Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  // Function to handle clicks outside the menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(false); // Close the menu if the click is outside
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

  // Define menu items for the Dropdown
  const menuItems = (
    <Menu>
      <Menu.Item key="1">
        <a href="/service/1">Classes</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/service/2">Doctor Consultations</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <header className="site-header header-style-1">
        <div className="pbmit-header-overlay">
          <div className="container">
            <div className="pbmit-header-content d-flex justify-content-between align-items-center">
              <div className="site-branding">
                <h1 className="site-title">
                  <a href="/">
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
                    className={`collapse navbar-collapse ${openMenu ? "show" : ""
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

                        <li className="dropdown">
                          <Dropdown
                            overlay={menuItems}
                            trigger={['click']} // Opens on click
                          >
                            <a onClick={(e) => e.preventDefault()}>
                              <Space>
                                Services
                                <DownOutlined />
                              </Space>
                            </a>
                          </Dropdown>
                        </li>

                        <li className="dropdown">
                          <a href="/about">About Us</a>
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
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
