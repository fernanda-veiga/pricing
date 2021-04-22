import React from "react";
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

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="price-box">
          <div className="slider"></div>
          <div className="toggle"></div>
          <div className="info"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
