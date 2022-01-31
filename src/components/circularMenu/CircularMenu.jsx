import React, { useState } from 'react';
import './CircularMenu.css';
import {
  ImPlus,
  ImWrench,
  ImDatabase,
  ImAddressBook,
  ImCreditCard,
  ImHome3,
  ImLocation2,
  ImUsers,
  ImLinkedin,
} from 'react-icons/im';

const CircularMenu = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <div className={active ? 'circularMenu active' : 'circularMenu'}>
      <div className="toggle" onClick={toggleMenu}>
        <ImPlus />
      </div>
      <li style={{ '--i': '0' }}>
        {' '}
        <a href="#">
          <ImWrench />
        </a>
      </li>
      <li style={{ '--i': '1' }}>
        {' '}
        <a href="#">
          <ImLinkedin />
        </a>
      </li>
      <li style={{ '--i': '2' }}>
        <a href="#">
          <ImDatabase />
        </a>
      </li>
      <li style={{ '--i': '3' }}>
        <a href="#">
          <ImAddressBook />
        </a>
      </li>
      <li style={{ '--i': '4' }}>
        <a href="#">
          <ImCreditCard />
        </a>
      </li>
      <li style={{ '--i': '5' }}>
        <a href="#">
          <ImHome3 />
        </a>
      </li>
      <li style={{ '--i': '6' }}>
        <a href="#">
          <ImLocation2 />
        </a>
      </li>
      <li style={{ '--i': '7' }}>
        <a href="#">
          <ImUsers />
        </a>
      </li>
    </div>
  );
};

export default CircularMenu;
