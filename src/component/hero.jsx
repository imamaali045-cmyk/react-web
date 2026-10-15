import React from 'react';
import phoneImg1 from '../images/phone_1.png'; 
import phoneImg2 from '../images/phone_2.png'; 
import './hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title" >
          <strong>Promote Your App with</strong> <br />
          <strong>SoftLand</strong>
        </h1>
        <p className="hero-desc">
          We are team of talented designers making websites with Bootstrap
        </p>
        
        <div className="hero-buttons">
          <button className="btn">Google Play</button>
          <button className="btn">App Store</button>
        </div>
      </div>

      {/* Dono Images ka Container */}
      <div className="hero-image-container">
        <img src={phoneImg1} alt="Phone Back" className="phone-back" />
        <img src={phoneImg2} alt="Phone Front" className="phone-front" />
      </div>
    </section>
  );
};

export default Hero;