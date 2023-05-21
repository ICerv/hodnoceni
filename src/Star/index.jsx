import React, { useState } from 'react';
import './style.css';

const Star = ({ onGlow, onDim }) => {
  const [glowing, setGlowing] = useState(false);

  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

  const handleOnClick = () => {
    const newGlowing = !glowing;
    setGlowing(newGlowing);
    if (newGlowing) {
      onGlow();
    } else {
      onDim();
    }
  }

  return (
    <div onClick={handleOnClick} className={starClass}></div>
  );
};

export default Star;