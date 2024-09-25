import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-circle-progress"; // Ensure this matches the path of your package
import "./ProgressCircle.css";

const ProgressCircle = ({ value, fill, innerColor,emptyFill, size, thickness, label }) => {
  useEffect(() => {
    $(".circle-progress").each(function () {
      const $this = $(this);
      $this.circleProgress({
        value: value / 100,
        size: size,
        thickness: thickness,
        innerColor:{ backgroundColor : innerColor},
        fill: { color: fill },
        emptyFill: emptyFill,
        animation: {
          duration: 1000,
          easing: "circleProgressEasing",
        },
      });
    });
  }, [value, fill, emptyFill, size,innerColor, thickness]);

  return (
    <div className="circle-progress" style={{ width: size, height: size }}>
      <div className="circle-progress-inner" style={{ width: size, height: size,}}>
        {/* Inner circle with blue color */}
        <div className="inner-circle"style={{borderRadius:'50%', backgroundColor:innerColor}}></div>
        <div className="circle-progress-number" >
          <span>{value}</span>
          <sup>%</sup>
        </div>
      </div>
      <div className="circle-progress-label">{label}</div>
    </div>
  );
};

export default ProgressCircle;
