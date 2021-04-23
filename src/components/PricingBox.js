import React from "react";
import SliderArea from "./pricing-box-components/SliderArea";
import ToggleArea from "./pricing-box-components/ToggleArea";

function PricingBox() {
  return (
    <div className="pricing-box">
      <SliderArea />
      <ToggleArea />
      <div className="info-area"></div>
    </div>
  );
}

export default PricingBox;
