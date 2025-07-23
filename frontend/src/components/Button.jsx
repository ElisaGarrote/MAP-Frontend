import React from 'react';
import '../styles/Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  disabled = false, 
  onClick,
  className = '',
  ...props 
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''} ${className}`;
  
  return (
    <button 
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;