import React, { useState } from 'react';
import './style.css';


// HODNOCENI 1.
/*
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
*/
// HODNOCENI 2.

const Star = ({ glowing, rating, onSelect }) => {
  const starClass = glowing ? 'rating__star rating__star--on' : 'rating__star';

  const handleOnClick = () => {
    onSelect(rating);
  };

  return (
    <div onClick={handleOnClick} className={starClass}></div>
  );
};

export default Star;
