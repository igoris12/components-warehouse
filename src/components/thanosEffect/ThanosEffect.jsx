import React, { useEffect, useState } from 'react';
import ReactAnime from 'react-animejs';
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

  const { Anime, stagger } = ReactAnime;

  return (
    <Anime
      initial={[
        {
          targets: '.block',
          easing: 'easeInOutExpo',
          scale: 0,
          loop: true,
          // delay: 3000,

          translateX: function () {
            return Math.floor(Math.random() * 2100) + -360;
          },
          translateY: function () {
            return Math.floor(Math.random() * 2100) + -360;
          },
          rotate: function () {
            return Math.floor(Math.random() * 360) + -360;
          },
          duration: function () {
            return Math.floor(Math.random() * 3000) + 500;
          },
        },
        {
          targets: '.block',
          easing: 'easeInOutExpo',
          scale: 1,
          loop: true,
          translateX: 0,
          translateY: 0,
          rotate: 0,
          duration: function () {
            return Math.floor(Math.random() * 3000) + 500;
          },
        },
      ]}
    >
      <div className="container" id="thanosEffect-container">
        {/* <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div> */}
      </div>
    </Anime>
  );
};

export default ThanosEffect;
