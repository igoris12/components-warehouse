import React from 'react';
import './MenuHoverText.css';

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li style={{ '--clr': '#00ade1' }}>
          <a href="#" data-text="&nbsp;Home">
            &nbsp;Home
          </a>
        </li>
        <li style={{ '--clr': '#ff6493' }}>
          <a href="#" data-text="&nbsp;About">
            &nbsp;About
          </a>
        </li>
        <li style={{ '--clr': '#ffdd1c' }}>
          <a href="#" data-text="&nbsp;Services">
            &nbsp;Services
          </a>
        </li>
        <li style={{ '--clr': '#00dc82' }}>
          <a href="#" data-text="&nbsp;Contact">
            &nbsp;Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
