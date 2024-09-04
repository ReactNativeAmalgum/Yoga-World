import React from 'react'
import './HomeTrainer.css'
import '../../App.css';
import jakparsh from '../../images/Trainer-2.webp'
import rajpatwa from '../../images/rajpatwa.webp'
export default function HomeTranies() {
  return (
<section className="section-lgb" style={{paddingTop:20}}>
  <div className="container">
    <article className="pbmit-team-style-2">
      <div className="pbminfotech-post-item">
        <div className="pbminfotech-box-content">
          <div className="pbmit-team-title-wapper d-flex">
            <h3 className="pbmit-team-title">
              <a href="team-single-detail.html">MR. Jayprakash Dhakad</a>
            </h3>
            <div className="pbminfotech-box-team-position">yoga trainer</div>
          </div>
          <div className="pbminfotech-team-wrapper">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <img
                  src= {jakparsh}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <a className="pbmit-team-btn" href="team-single-detail.html">
            <span className="pbmit-button-text">Read More</span>
            <span className="pbmit-button-icon-wrapper">
              <span className="pbmit-button-icon">
                <i className="pbmit-base-icon-black-arrow-1" />
              </span>
            </span>
          </a>
        </div>
        <a className="pbmit-link" href="team-single-detail.html" />
      </div>
    </article>
    <article className="pbmit-team-style-2">
      <div className="pbminfotech-post-item">
        <div className="pbminfotech-box-content">
          <div className="pbmit-team-title-wapper d-flex">
            <h3 className="pbmit-team-title">
              <a href="team-single-detail.html">Mr. Raj Patwa</a>
            </h3>
            <div className="pbminfotech-box-team-position">yoga instructor</div>
          </div>
          <div className="pbminfotech-team-wrapper">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <img
                  src={rajpatwa}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <a className="pbmit-team-btn" href="team-single-detail.html">
            <span className="pbmit-button-text">Read More</span>
            <span className="pbmit-button-icon-wrapper">
              <span className="pbmit-button-icon">
                <i className="pbmit-base-icon-black-arrow-1" />
              </span>
            </span>
          </a>
        </div>
        <a className="pbmit-link" href="team-single-detail.html" />
      </div>
    </article>
    <article className="pbmit-team-style-2">
      <div className="pbminfotech-post-item">
        <div className="pbminfotech-box-content">
          <div className="pbmit-team-title-wapper d-flex">
            <h3 className="pbmit-team-title">
              <a href="team-single-detail.html">Mr. Rohan Prajapati</a>
            </h3>
            <div className="pbminfotech-box-team-position">Yoga Therapist</div>
          </div>
          <div className="pbminfotech-team-wrapper">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <img
                  src="https://img.freepik.com/free-photo/side-view-young-woman-practicing-yoga-park_23-2148066886.jpg?t=st=1724734038~exp=1724737638~hmac=01e03efea18f58fb06d5eb0e8123147c9b34eab1292cdbcf22f853b14022d5af&w=996"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <a className="pbmit-team-btn" href="team-single-detail.html">
            <span className="pbmit-button-text">Read More</span>
            <span className="pbmit-button-icon-wrapper">
              <span className="pbmit-button-icon">
                <i className="pbmit-base-icon-black-arrow-1" />
              </span>
            </span>
          </a>
        </div>
        <a className="pbmit-link" href="team-single-detail.html" />
      </div>
    </article>
  </div>
</section>

  )
}
