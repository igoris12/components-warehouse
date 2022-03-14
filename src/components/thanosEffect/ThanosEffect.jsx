import React, { useEffect } from 'react';

import './ThanosEffect.css';

const ThanosEffect = () => {
  useEffect(() => {
    const container = document.querySelector('#thanosEffect-container');

    for (let i = 0; i <= 100; i++) {
      const block = document.createElement('div');
      block.classList.toggle('block');
      container.appendChild(block);
    }
  }, []);

  return <div className="container" id="thanosEffect-container"></div>;
};

export default ThanosEffect;
