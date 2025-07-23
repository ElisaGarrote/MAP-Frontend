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

  const handleInputChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert(`Form Data:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
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
              required
              style={{ marginBottom: '16px' }}
            />
            
            <InputField
              type="email"
              label="Email Address"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange('email')}
              required
              style={{ marginBottom: '16px' }}
            />
            
            <InputField
              type="tel"
              label="Phone Number"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange('phone')}
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
                style={{
                  width: '100%',
                  minHeight: '120px',
                  padding: '13px 16px',
                  border: '1px solid #d3d3d3',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2563EB'}
                onBlur={(e) => e.target.style.borderColor = '#d3d3d3'}
                required
              />
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