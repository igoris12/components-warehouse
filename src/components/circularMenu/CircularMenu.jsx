import React from 'react';
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
  return (
    <div className="circularMenu">
      <div className="toggle">
        <ImPlus />
      </div>
      <li style={{ '--i': '0' }}>
        {' '}
        <ImWrench />
      </li>
      <li style={{ '--i': '1' }}>
        {' '}
        <ImLinkedin />
      </li>
      <li style={{ '--i': '2' }}>
        {' '}
        <ImDatabase />
      </li>
      <li style={{ '--i': '3' }}>
        {' '}
        <ImAddressBook />
      </li>
      <li style={{ '--i': '4' }}>
        {' '}
        <ImCreditCard />
      </li>
      <li style={{ '--i': '5' }}>
        {' '}
        <ImHome3 />
      </li>
      <li style={{ '--i': '6' }}>
        {' '}
        <ImLocation2 />
      </li>
      <li style={{ '--i': '7' }}>
        {' '}
        <ImUsers />
      </li>
    </div>
  );
};

export default CircularMenu;
