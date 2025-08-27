import React from 'react';
import './ReusableButton.css';

const ReusableButton = ({ 
  text, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  size = 'medium',
  disabled = false 
}) => {
  return (
    <button
      type={type}
      className={`reusable-button ${variant} ${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ReusableButton;
