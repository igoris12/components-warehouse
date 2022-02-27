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
        <a href="#">
          <BsFacebook />
        </a>
      </li>
      <li style={{ '--clr': '#00dc82' }}>
        <a href="#">
          <BsWhatsapp />
        </a>
      </li>
      <li style={{ '--clr': '#42a7ff' }}>
        <a href="#">
          <BsLinkedin />
        </a>
      </li>
      <li style={{ '--clr': '#ff0000' }}>
        <a href="#">
          <BsYoutube />
        </a>
      </li>
      <li style={{ '--clr': '#4da1f2' }}>
        <a href="#">
          <BsTwitter />
        </a>
      </li>
    </ul>
  );
};

export default GlowingSocialMedia;
