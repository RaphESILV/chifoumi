import React from 'react';

function CustomButton(props) {
  const buttonStyle = {
    background: 'rgb(34,193,195)',
    background: 'linear-gradient(135deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
    borderRadius: '8px',
    border: '1px solid transparent',
    padding: '0.6em 1.2em',
    fontSize: '1em',
    fontWeight: 500,
    fontFamily: 'inherit',
    backgroundColor: '#1a1a1a',
    cursor: 'pointer',
    transition: 'border-color 0.25s'
  };

  return (
    <button
      style={buttonStyle}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default CustomButton;
