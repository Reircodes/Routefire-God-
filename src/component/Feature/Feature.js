import React from 'react';
import './Feature.css'

const Feature = ({src , alt, heading , paragraph}) => {
  return <div className='feature'>
    <div className="feature__img">
         <img src={src} alt={alt}/>
    </div>
    <div className="feature__content">
      <h5>
      {heading}
      </h5>
      <p>
        {paragraph}
      </p>

    </div>
  </div>;
};

export default Feature;
