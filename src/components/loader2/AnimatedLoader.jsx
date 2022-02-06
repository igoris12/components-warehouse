import React from 'react';
import './AnimatedLoader.css';

const AnimatedLoader = () => {
  return (
    <div className="AnimatedLoderContaner">
      <span className="ring"></span>
      <span className="ring"></span>
      <span className="ring"></span>
      {/* <p>Loading...</p> */}
    </div>
  );
};

export default AnimatedLoader;
