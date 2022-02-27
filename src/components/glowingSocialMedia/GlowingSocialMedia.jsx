import './GlowingSocialMedia.css';

import {
  BsFacebook,
  BsLinkedin,
  BsWhatsapp,
  BsYoutube,
  BsTwitter,
} from 'react-icons/bs';

const GlowingSocialMedia = () => {
  return (
    <ul className="socialMedia">
      <li style={{ '--clr': '#1877f2' }}>
        <a href="#" target="_blank">
          <BsFacebook />
        </a>
      </li>
      <li style={{ '--clr': '#00dc82' }}>
        <a href="#" target="_blank">
          <BsWhatsapp />
        </a>
      </li>
      <li style={{ '--clr': '#42a7ff' }}>
        <a
          href="https://www.linkedin.com/in/igoris-ivanovas-839645194/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </li>
      <li style={{ '--clr': '#ff0000' }}>
        <a href="#" target="_blank">
          <BsYoutube />
        </a>
      </li>
      <li style={{ '--clr': '#4da1f2' }}>
        <a href="#" target="_blank">
          <BsTwitter />
        </a>
      </li>
    </ul>
  );
};

export default GlowingSocialMedia;
