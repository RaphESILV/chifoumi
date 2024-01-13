import React from 'react';
import { useNavigate } from 'react-router-dom';

function CustomButtonMenu({ to, onClick, children, ...props }) {
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
        display: 'block',
        width: '200px',
        height: '50px',
        borderRadius: '8px',
        border: '1px solid black',
        padding: '0.3em 0.6em',
        fontSize: '1em',
        fontWeight: 500,
        fontFamily: 'inherit',
        cursor: 'pointer',
        transition: 'border-color 0.25s',
        marginTop: '30px',
        background: isHovered ? 'transparent' : 'initial',
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

export default CustomButtonMenu;
