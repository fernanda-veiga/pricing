import React from "react";

function Toggle() {
  return (
    <label className="toggle">
      <input className="toggle-checkbox" type="checkbox" />
      <span className="toggle-slider"></span>
    </label>
  );
}

function ToggleArea() {
  return (
    <div className="toggle-area">
      <div className="toggle-area-monthly">
        <p>Monthly Billing</p>
      </div>
      <Toggle />
      <div className="toggle-area-yearly">
        <p>Yearly Billing</p>
        <div className="toggle-area-discount">
          <p>25% discount</p>
        </div>
      </div>
    </div>
  );
}

export default ToggleArea;
