import React from 'react';
import '../styles/InputField.css';

const InputField = ({ 
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onBlur,
  disabled = false,
  className = '',
  label = '',
  required = false,
  error = '',
  ...props 
}) => {
  const hasError = error && error.trim() !== '';
  
  return (
    <div className={`input-group ${className}`}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span style={{ color: 'red', marginLeft: '2px' }}>*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        className={`input-field ${disabled ? 'input-disabled' : ''} ${hasError ? 'input-error' : ''}`}
        {...props}
      />
      {hasError && (
        <span className="input-error-message">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;