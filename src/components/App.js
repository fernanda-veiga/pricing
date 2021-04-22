import React, { useEffect } from "react";
import "../styles/App.css";

function Header() {
  return (
    <div className="header">
      <h3>Simple, traffic-based pricing</h3>
      <span>
        <p>Sign-up for our 30-day trial.</p>
        <p>No credit card required.</p>
      </span>
    </div>
  );
}

function PricingBox() {
  return (
    <div className="pricing-box">
      <SliderArea />
      <div className="toggle-area"></div>
      <div className="info-area"></div>
    </div>
  );
}

function SliderArea() {
  return (
    <div className="slider-area">
      <p className="pageviews">100K PAGEVIEWS</p>
      <RangeSlider />
      <span>
        <p className="price">$16.00</p>
        <p className="frequency">/month</p>
      </span>
    </div>
  );
}

function RangeSlider() {
  useEffect(() => {
    document.querySelector("input").value = 3;
  }, []);

  function handleSlide(event) {
    const percentage =
      ((event.target.value - 1) * 100) / (event.target.max - event.target.min);
    event.target.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0% ${percentage}%, hsl(224, 65%, 95%) ${percentage}% 100%`;
  }

  return (
    <div className="slider-container">
      <input
        type="range"
        min="1"
        max="5"
        className="slider"
        onInput={handleSlide}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <PricingBox />
    </div>
  );
}

export default App;
