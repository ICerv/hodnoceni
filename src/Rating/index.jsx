import React, { useState } from 'react';
import Star from '../Star';
import './style.css';


// HODNOCENI 1.
/*
const Rating = () => {
  const [value, setValue] = useState(0);

  const handleGlow = () => {
    // console.log('xxx')
    setValue(value + 1);
  }

  const handleDim = () => {
    setValue(value - 1);
  };


  return (
    <div className="rating">
      <div className="rating__value">{value}</div>
      <div className="rating__stars">
        <Star onGlow={handleGlow} onDim={handleDim} />
        <Star onGlow={handleGlow} onDim={handleDim} />
        <Star onGlow={handleGlow} onDim={handleDim} />
        <Star onGlow={handleGlow} onDim={handleDim} />
        <Star onGlow={handleGlow} onDim={handleDim} />
      </div>
    </div>
  );
};

export default Rating;
*/
// HODNOCENI 2.

const Rating = () => {
  const [value, setValue] = useState(0);

  const handleSelect = (rating) => {
    setValue(rating);
  };

  return (
    <div className="rating">
      <div className="rating__value">{value}</div>
      <div className="rating__stars">
        <Star glowing={value >= 1} rating={1} onSelect={handleSelect} />
        <Star glowing={value >= 2} rating={2} onSelect={handleSelect} />
        <Star glowing={value >= 3} rating={3} onSelect={handleSelect} />
        <Star glowing={value >= 4} rating={4} onSelect={handleSelect} />
        <Star glowing={value >= 5} rating={5} onSelect={handleSelect} />
      </div>
    </div>
  );
};

export default Rating;
