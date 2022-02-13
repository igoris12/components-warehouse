import React from 'react';
import './HoverBtn.css';

const HoverBtn = () => {
  const hoverHandler = (e) => {
    const btn = e.target;
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  };
  return (
    <a onMouseEnter={hoverHandler} href="#" className="btn-hover">
      <span>Hover Me</span>
    </a>
  );
};

export default HoverBtn;
