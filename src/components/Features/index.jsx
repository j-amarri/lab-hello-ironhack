import React from 'react';

import './style.css';

function FeaturesComponent() {
  return (
    <div className="Features-list">
      <div className="Feature-card"></div>
      <div className="Feature-card">
        <img
          src="/images/icon1.png"
          className="Feature-image"
          alt="Declarative"
        />
        <h3>Declarative</h3>
      </div>
      <div className="Feature-card">
        <img
          src="/images/icon2.png"
          className="Feature-image"
          alt="Components"
        />
        <h3>Components</h3>
      </div>
      <div className="Feature-card">
        <img
          src="/images/icon3.png"
          className="Feature-image"
          alt="Single-Way"
        />
        <h3>Single-Way</h3>
      </div>
      <div className="Feature-card">
        <img src="/images/icon4.png" className="Feature-image" alt="JSX" />
        <h3>JSX</h3>
      </div>
    </div>
  );
}

// ./ bring me at current level
// ../ brings me one level up

export default FeaturesComponent;
