import React from 'react';
import { useNavigate } from 'react-router-dom';

function CustomButton({ to, onClick, children, ...props }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (to) {
      navigate(to);
    }
  };

  const buttonStyle = {
    background: 'rgb(34,193,195)',
    background: 'linear-gradient(135deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
    borderRadius: '8px',
    border: '1px solid black',
    padding: '0.6em 1.2em',
    fontSize: '1em',
    fontWeight: 500,
    fontFamily: 'inherit',
    backgroundColor: '#1a1a1a',
    cursor: 'pointer',
    transition: 'border-color 0.25s',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  };

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
}

export default CustomButton;