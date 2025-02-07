import React from 'react';

import mainLogo from'./assets/images/0E3A1911.png';
import carImg from './assets/images/0E3A1885.JPG';
const LandingPage = () => {
  return (
    <div >
 <div className="flex justify-center items-center  bg-white p-4">
      <div className="border-4 border-blue-900 rounded-lg p-4 max-w-4xl w-full bg-white">
        {/* Main Image */}
        <div className="relative">
          <img
            src={mainLogo}
            alt="Brush cleaning wooden floor1"
            className="w-full rounded-lg"
          />
          <h1 className="absolute top-4 left-4 bg-blue-900 text-white text-3xl font-bold p-2 rounded-md">
            MADE UP <span className="block">BRUSH</span>
          </h1>
        </div>

        {/* Small Circular Images */}
        <div className="flex justify-end space-x-4 mt-4">
          <img
            src={carImg}
            alt="Cleaning car"
            className="w-24 h-24 rounded-full border-4 border-blue-900"
          />
          <img
            src="/images/carpet-cleaning.png"
            alt="Cleaning carpet"
            className="w-24 h-24 rounded-full border-4 border-blue-900"
          />
        </div>

        {/* Footer Text */}
        <div className="bg-blue-900 text-white text-center text-2xl font-bold p-3 mt-4 rounded-lg">
          THE BRUSH THAT DOES IT <span className="text-white">ALL!</span>
        </div>
      </div>
    </div>

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