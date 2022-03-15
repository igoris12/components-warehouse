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
{
  /* <script
  src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
  integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>; */
}
