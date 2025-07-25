import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

const InputDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    company: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    company: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
    phone: false,
    company: false
  });

  const validateField = (field, value) => {
    let error = '';
    
    switch (field) {
      case 'name':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters long';
        }
        break;
      
      case 'email':
        if (!value.trim()) {
          error = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters long';
        }
        break;
      
      case 'phone':
        // Phone is optional, but if provided, should be valid
        if (value.trim() && !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ''))) {
          error = 'Please enter a valid phone number';
        }
        break;
      
      default:
        break;
    }
    
    return error;
  };

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    
    setFormData({
      ...formData,
      [field]: value
    });

    // Validate field if it has been touched
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors({
        ...errors,
        [field]: error
      });
    }
  };

  const handleBlur = (field) => () => {
    setTouched({
      ...touched,
      [field]: true
    });

    const error = validateField(field, formData[field]);
    setErrors({
      ...errors,
      [field]: error
    });
  };

  const validateAllFields = () => {
    const newErrors = {};
    const newTouched = {};
    
    Object.keys(formData).forEach(field => {
      newTouched[field] = true;
      newErrors[field] = validateField(field, formData[field]);
    });
    
    setTouched(newTouched);
    setErrors(newErrors);
    
    // Return true if no errors
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = () => {
    if (validateAllFields()) {
      alert(`Form Data:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
      // Here you could also reset the form if needed
      // resetForm();
    } else {
      alert('Please fix the errors in the form before submitting.');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
      phone: '',
      company: ''
    });
    setErrors({
      name: '',
      email: '',
      message: '',
      phone: '',
      company: ''
    });
    setTouched({
      name: false,
      email: false,
      message: false,
      phone: false,
      company: false
    });
  };

  return (
    <PageLayout>
      <div style={{ 
        paddingTop: '80px', 
        paddingLeft: '38px', 
        paddingRight: '38px',
        paddingBottom: '40px'
      }}>
        {/* Header Section */}
        <div style={{ marginBottom: '24px' }}>
          {/* Breadcrumb */}
          <div style={{ 
            fontSize: '14px', 
            color: '#6B7280', 
            marginBottom: '16px' 
          }}>
            <span>Forms</span>
            <span style={{ padding: '0 8px' }}>/</span>
            <span>Input Demo</span>
          </div>
          
          {/* Page Title */}
          <h1 style={{ 
            fontSize: '24px', 
            color: '#111827', 
            fontWeight: '500',
            margin: 0
          }}>
            Input Field Demo
          </h1>
          
          {/* Divider */}
          <hr style={{ 
            border: 'none',
            borderTop: '1px solid #D1D5DB',
            margin: '16px 0 24px 0'
          }} />
        </div>

        {/* Form Container */}
        <div style={{ 
          backgroundColor: 'white',
          boxShadow: '0 0 20px rgba(211, 211, 211, 0.3)',
          borderRadius: '25px',
          border: '1px solid #d3d3d3',
          padding: '24px',
          maxWidth: '600px'
        }}>
          {/* Personal Information Fieldset */}
          <fieldset style={{ border: 'none', padding: 0, margin: '0 0 20px 0' }}>
            <legend style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#111827',
              marginBottom: '16px'
            }}>
              Personal Information
            </legend>
            
            <InputField
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange('name')}
              onBlur={handleBlur('name')}
              required
              error={errors.name}
              style={{ marginBottom: '16px' }}
            />
            
            <InputField
              type="email"
              label="Email Address"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange('email')}
              onBlur={handleBlur('email')}
              required
              error={errors.email}
              style={{ marginBottom: '16px' }}
            />
            
            <InputField
              type="tel"
              label="Phone Number"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange('phone')}
              onBlur={handleBlur('phone')}
              error={errors.phone}
              style={{ marginBottom: '16px' }}
            />
          </fieldset>

          {/* Company Information Fieldset */}
          <fieldset style={{ border: 'none', padding: 0, margin: '0 0 20px 0' }}>
            <legend style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#111827',
              marginBottom: '16px'
            }}>
              Company Information
            </legend>
            
            <InputField
              label="Company Name"
              placeholder="Enter your company name"
              value={formData.company}
              onChange={handleInputChange('company')}
              onBlur={handleBlur('company')}
              error={errors.company}
              style={{ marginBottom: '16px' }}
            />
          </fieldset>

          {/* Message Fieldset */}
          <fieldset style={{ border: 'none', padding: 0, margin: '0 0 20px 0' }}>
            <legend style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#111827',
              marginBottom: '16px'
            }}>
              Message
            </legend>
            
            <div style={{ marginBottom: '16px' }}>
              <label style={{ 
                display: 'block',
                fontSize: '14px',
                color: '#666',
                fontWeight: '600',
                marginBottom: '8px'
              }}>
                Message <span style={{ color: 'red' }}>*</span>
              </label>
              <textarea
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleInputChange('message')}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.message ? '#DC2626' : '#d3d3d3';
                  handleBlur('message')();
                }}
                style={{
                  width: '100%',
                  minHeight: '120px',
                  padding: '13px 16px',
                  border: `1px solid ${errors.message ? '#DC2626' : '#d3d3d3'}`,
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = errors.message ? '#DC2626' : '#2563EB'}
                required
              />
              {errors.message && (
                <div style={{ 
                  color: '#DC2626', 
                  fontSize: '12px', 
                  marginTop: '4px' 
                }}>
                  {errors.message}
                </div>
              )}
            </div>
          </fieldset>

          {/* Demo Disabled Field */}
          <fieldset style={{ border: 'none', padding: 0, margin: '0 0 20px 0' }}>
            <legend style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#111827',
              marginBottom: '16px'
            }}>
              Demo Fields
            </legend>
            
            <InputField
              label="Disabled Field"
              placeholder="This field is disabled"
              disabled
              style={{ marginBottom: '16px' }}
            />
          </fieldset>

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            justifyContent: 'flex-end',
            marginTop: '32px'
          }}>
            <Button 
              variant="secondary"
              onClick={resetForm}
              style={{
                padding: '10px 24px',
                backgroundColor: '#f3f4f6',
                color: '#374151',
                border: '1px solid #d1d5db',
                minWidth: '100px'
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              style={{
                padding: '10px 24px',
                minWidth: '100px'
              }}
            >
              Save Form
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default InputDemo;