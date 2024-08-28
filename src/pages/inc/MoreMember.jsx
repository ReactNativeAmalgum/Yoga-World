import React from 'react'

export default function MoreMember() {
  return (
<section className="ihbox-section_one">
  <div className="container">
    <div className="ihbox-one_bg">
      <div className="row">
        <div className="col-md-5 col-xl-4">
          <div className="pbmit-ihbox-style-1">
            <div className="pbmit-ihbox-headingicon d-flex align-items-center">
              <div className="pbmit-ihbox-icon">
                <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-image">
                  <img
                    src="	https://yoge-demo.pbminfotech.com/html-demo/images/homepage-1/ihbox/icon-img.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="pbmit-ihbox-contents">
                <h2 className="pbmit-element-title">
                  More than <span>9.5k members</span> are connected with us
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-xl-4">
          <div className="spinner_box">
            <div className="pbmit-spinner-box-style-1">
              <a className="pbmit-scroll-section" href="#">
                <div className="pbmit-ihbox-box">
                  <div className="pbmit-ihbox-icon">
                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                      <i className="pbmit-yoge-icon pbmit-yoge-icon-down-arrow" />
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    viewBox="0 0 200 200"
                  >
                    <defs>
                      <path
                        d="M0, 100a100, 100 0 1, 0 200, 0a100, 100 0 1, 0 -200, 0"
                        id="txt-path"
                      />
                    </defs>
                    <circle cx={150} cy={100} r={75} fill="none" />
                    <text
                      fontSize={15}
                      fontFamily="Sora,sans-serif"
                      fontWeight={500}
                    >
                      <textPath startOffset={0} xlinkHref="#txt-path">
                        Scroll Down . Scroll Down . Scroll Down . Scroll Down .
                        Scroll Down . Scroll Down .
                      </textPath>
                    </text>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-xl-4">
          <div className="pbmit-ihbox-style-3">
            <div className="pbmit-ihbox-headingicon d-flex align-items-center">
              <div className="pbmit-ihbox-contents">
                <h2 className="pbmit-element-title">
                  Click on this video to check how work with our clients
                </h2>
              </div>
              <a
                className="pbmin-lightbox-video"
                href="https://www.youtube.com/watch?v=SZEflIVnhH8"
              >
                <div className="pbmit-feature-wrapper-img">
                  <div className="pbmit-ihbox-wrapper">
                    <div className="pbmit-ihbox-icon-type-image">
                      <img
                        src="	https://yoge-demo.pbminfotech.com/html-demo/images/homepage-1/ihbox/icon-img-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="pbmit-ihbox-icon">
                  <div className="pbmit-ihbox-icon-wrapper">
                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                      <i className="pbmit-yoge-icon-play" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
