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
      <li>
        <a href="#">
          <BsFacebook />
        </a>
      </li>
      <li>
        <a href="#">
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a href="#">
          <BsWhatsapp />
        </a>
      </li>
      <li>
        <a href="#">
          <BsYoutube />
        </a>
      </li>
      <li>
        <a href="#">
          <BsTwitter />
        </a>
      </li>
    </ul>
  );
};

export default GlowingSocialMedia;
