import React from "react";
import SliderArea from "./pricing-box-components/SliderArea";

function PricingBox() {
  return (
    <div className="pricing-box">
      <SliderArea />
      <div className="toggle-area"></div>
      <div className="info-area"></div>
    </div>
  );
}

export default PricingBox;
