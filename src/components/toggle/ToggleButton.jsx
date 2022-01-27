import { useState } from 'react';
import './ToggleButton.css';

const ToggleButton = () => {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(!on);
  };

  return (
    <div
      onClick={toggle}
      className={on ? 'toggleButton' : 'toggleButton active'}
    >
      <i className="indicator"></i>
    </div>
  );
};

export default ToggleButton;
