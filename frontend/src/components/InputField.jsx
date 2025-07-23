import React from 'react';
import '../styles/InputField.css';

const InputField = ({ 
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  className = '',
  label = '',
  required = false,
  error = '',
  ...props 
}) => {
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
        disabled={disabled}
        required={required}
        className={`input-field ${disabled ? 'input-disabled' : ''}`}
        {...props}
      />
      {error && (
        <div style={{ 
          color: '#DC2626', 
          fontSize: '12px', 
          marginTop: '4px' 
        }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default InputField;