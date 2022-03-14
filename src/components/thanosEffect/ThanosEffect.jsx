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

    const blocks = document.querySelectorAll('.block');

    // const animation = anime.timeline({
    //   target: blocks,
    //   easing: 'easeInOutExpo',
    //   loop: true,
    // });
  }, []);

  return <div className="container" id="thanosEffect-container"></div>;
};

export default ThanosEffect;
