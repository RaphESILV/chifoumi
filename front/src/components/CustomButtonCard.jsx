import React from 'react';

const CustomButtonCard = ({ image, onClick, choice }) => (
  <button 
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'contain',
      width: '250px',
      height: '345px',
      borderRadius: '8px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      border: 'none',
      margin: '5px',
      transition: 'transform 0.3s ease-in-out' 
    }} 
    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
    onClick={() => onClick(choice)}
  />
);

export default CustomButtonCard;