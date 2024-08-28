import React, { useEffect } from "react";
import './HomeMarkq.css'
export default function HomeMarkq() {
  useEffect(() => {
    const marquee = document.getElementById("marquee");
    const speed = 1; // Adjust the speed of the scrolling
    let offset = 0;

    const scroll = () => {
      offset -= speed;
      if (offset <= -marquee.offsetWidth) {
        offset = 0;
      }
      marquee.style.transform = `translateX(${offset}px)`;
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <section className="section-lgb">
      <div className="container-fluid p-0">
        <div className="marquee-wrapper">
          <div className="marquee" id="marquee">
            <article className="pbmit-marquee-effect-style-1">
              <div className="pbmit-tag-wrapper">
                <h2 className="pbmit-element-title" data-text="Ashtanga vinyasa yoga">
                  Ashtanga vinyasa yoga
                </h2>
              </div>
            </article>
            <article className="pbmit-marquee-effect-style-1">
              <div className="pbmit-tag-wrapper">
                <h2 className="pbmit-element-title" data-text="Iyengar Yoga">
                  Iyengar Yoga
                </h2>
              </div>
            </article>
            <article className="pbmit-marquee-effect-style-1">
              <div className="pbmit-tag-wrapper">
                <h2 className="pbmit-element-title" data-text="Hot yoga">
                  Hot yoga
                </h2>
              </div>
            </article>
            <article className="pbmit-marquee-effect-style-1">
              <div className="pbmit-tag-wrapper">
                <h2 className="pbmit-element-title" data-text="Kundalini yoga">
                  Kundalini yoga
                </h2>
              </div>
            </article>
            <article className="pbmit-marquee-effect-style-1">
              <div className="pbmit-tag-wrapper">
                <h2 className="pbmit-element-title" data-text="Ashtanga vinyasa yoga">
                  Ashtanga vinyasa yoga
                </h2>
              </div>
            </article>
            <article className="pbmit-marquee-effect-style-1">
              <div className="pbmit-tag-wrapper">
                <h2 className="pbmit-element-title" data-text="Iyengar Yoga">
                  Iyengar Yoga
                </h2>
              </div>
            </article>
            <article className="pbmit-marquee-effect-style-1">
              <div className="pbmit-tag-wrapper">
                <h2 className="pbmit-element-title" data-text="Hot yoga">
                  Hot yoga
                </h2>
              </div>
            </article>
            <article className="pbmit-marquee-effect-style-1">
              <div className="pbmit-tag-wrapper">
                <h2 className="pbmit-element-title" data-text="Kundalini yoga">
                  Kundalini yoga
                </h2>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

