import React from 'react';
import { Button } from '@mui/material';
import './Header.css'

const Header = () => {
  return <section className="header">
      <div className="header__container">
          <div className="header__container--content">
          <h1>
          A trading stack
          built to scale.
          </h1>
          <p>
          Routefire is the premier provider of trade execution infrastructure in the digital asset space. We offer the industry's leading smart order routing, execution algos, and market solutions to meet your company’s bespoke trading needs with top speed, reliability, and performance.
          </p>
          <div className="header__container--content__buttons">
             <button className='btn btn__one'>
               Get started now
             </button>
             <button className='btn btn__two'>
               Request a demo
             </button>
          </div>
          </div>
          <div className="header__container--img">
             <img src='https://routefire.io/images/hero-banner.png'/>
          </div>
      </div>

      
      {/* <div className="custom-shape-divider">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg> */}
{/* </div> */}
    
  </section>;
};

export default Header;
