import React from 'react';
import './LandingPage.css'; // Import the CSS file for styling
// import brushImage from './brush-image.jpg'; // Import the image for the brush

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>MADEUP BRUSH</h1>
        <h2>THE BRUSH THAT DOES IT ALL!</h2>
      </header>

      <section className="intro-section">
        <div className="intro-content">
          <h3>Introducing Made Up Brush</h3>
          <p>
            Tackle wet AND dry messes effortlessly with the revolutionary rubber broom that cleans anything, anywhere—indoors AND out.
          </p>
          <p>
            Its 584 rubber fingers form an IMPENETRABLE wall while creating a static charge that attracts dirt like a magnet.
          </p>
          <p>
            Just ONE stroke is all it takes—no mess is EVER left behind!
          </p>
          <p>
            Plus, Made Up Brush won't EVER leave a scratch on floors or furniture, and the genius built-in squeegee makes it amazing for cleaning cars & windows!
          </p>
        </div>
        <div className="intro-image">
          {/* <img src={brushImage} alt="Made Up Brush" /> */}
        </div>
      </section>

      <section className="features-section">
        <h3>Sweep. Scrub & Squeegee</h3>
        <div className="features-grid">
          <div className="feature">
            <h4>Effortlessly Tackle Wet AND Dry Mess</h4>
            <p>Perfect for Carpets, Furniture, Hard Floors, Patios, Paths, and more.</p>
          </div>
          <div className="feature">
            <h4>Use Indoors AND Outdoors</h4>
            <p>Just ONE stroke is all it takes—NO MESS IS EVER LEFT BEHIND!</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Made Up Brush. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;