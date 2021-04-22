import React, { useState } from "react";
import price from "../../data/price";

function SliderArea() {
  const [sliderValue, setSliderValue] = useState(3);

  function handleSlide(event) {
    const percentage =
      ((event.target.value - 1) * 100) / (event.target.max - event.target.min);
    event.target.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0% ${percentage}%, hsl(224, 65%, 95%) ${percentage}% 100%`;

    setSliderValue(event.target.value);
  }

  return (
    <div className="slider-area">
      <p className="pageviews">{price[sliderValue].pageviews + " PAGEVIEWS"}</p>
      <RangeSlider value={sliderValue} handleSlide={handleSlide} />
      <span>
        <p className="price">{"$" + price[sliderValue].value + ".00"}</p>
        <p className="frequency">/month</p>
      </span>
    </div>
  );
}

function RangeSlider(props) {
  return (
    <div className="slider-container">
      <input
        type="range"
        min="1"
        max="5"
        value={props.value}
        className="slider"
        onInput={props.handleSlide}
      />
    </div>
  );
}

export default SliderArea;
