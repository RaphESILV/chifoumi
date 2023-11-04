import React from 'react';

function CustomButton({ className, text, onClick }) {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}


export default CustomButton;