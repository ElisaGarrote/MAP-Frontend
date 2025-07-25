import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import Button from '../../components/Button';

const ButtonDemo = () => {
  const [clickCount, setClickCount] = useState(0);

  const EditIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );

  const DeleteIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );

  const ViewIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  return (
    <PageLayout>
      {/* Page Title */}
      <h1 style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: 'clamp(32px, 4vw, 40px)',
        fontWeight: '700',
        lineHeight: '1.2',
        marginBottom: '2rem',
        color: '#333'
      }}>
        Button Component Demo
      </h1>

      {/* Main Content Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 350px',
        gap: '3rem',
        alignItems: 'start'
      }}>
        
        {/* Left Side - Action Buttons and Check-in/out */}
        <div>
          {/* Action Buttons Section */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(28px, 3vw, 36px)',
              fontWeight: '600',
              lineHeight: '1.4',
              marginBottom: '24px',
              color: '#333'
            }}>
              Action Buttons
            </h2>
            
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <Button variant="action" size="action">
                <EditIcon />
              </Button>
              <Button variant="action" size="action">
                <DeleteIcon />
              </Button>
              <Button variant="action" size="action">
                <ViewIcon />
              </Button>
              <Button variant="action" size="action" disabled>
                <EditIcon />
              </Button>
            </div>
          </div>

          {/* Check-in/out Buttons Section */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(28px, 3vw, 36px)',
              fontWeight: '600',
              lineHeight: '1.4',
              marginBottom: '24px',
              color: '#333'
            }}>
              Check-in/out Buttons
            </h2>
            
            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <Button variant="checkin" size="checkin">
                Check In
              </Button>
              <Button variant="checkin" size="checkin">
                Check Out
              </Button>
              <Button variant="checkin" size="checkin" disabled>
                Disabled
              </Button>
            </div>
          </div>

          {/* Table Example with Action Buttons */}
          <div>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(28px, 3vw, 36px)',
              fontWeight: '600',
              lineHeight: '1.4',
              marginBottom: '24px',
              color: '#333'
            }}>
              Table with Action Buttons
            </h2>
            
            <div style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse',
                fontFamily: 'Poppins, sans-serif'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Name</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Status</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '12px', borderTop: '1px solid #eee' }}>John Doe</td>
                    <td style={{ padding: '12px', borderTop: '1px solid #eee' }}>Active</td>
                    <td style={{ 
                      padding: '12px', 
                      borderTop: '1px solid #eee',
                      textAlign: 'center'
                    }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        <Button variant="action" size="action">
                          <ViewIcon />
                        </Button>
                        <Button variant="action" size="action">
                          <EditIcon />
                        </Button>
                        <Button variant="action" size="action">
                          <DeleteIcon />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', borderTop: '1px solid #eee' }}>Jane Smith</td>
                    <td style={{ padding: '12px', borderTop: '1px solid #eee' }}>Inactive</td>
                    <td style={{ 
                      padding: '12px', 
                      borderTop: '1px solid #eee',
                      textAlign: 'center'
                    }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        <Button variant="action" size="action">
                          <ViewIcon />
                        </Button>
                        <Button variant="action" size="action">
                          <EditIcon />
                        </Button>
                        <Button variant="action" size="action" disabled>
                          <DeleteIcon />
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Side - Primary Buttons */}
        <div>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(28px, 3vw, 36px)',
            fontWeight: '600',
            lineHeight: '1.4',
            marginBottom: '24px',
            color: '#333'
          }}>
            Primary Buttons
          </h2>
          
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <Button onClick={() => setClickCount(clickCount + 1)}>
              Primary Button (Clicked {clickCount} times)
            </Button>

            <Button disabled>
              Disabled Button
            </Button>

            {/* Form-like layout with input */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px',
              marginTop: '20px',
              padding: '20px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              backgroundColor: '#fafafa'
            }}>
              <label style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                fontWeight: '500',
                color: '#333',
                marginBottom: '4px'
              }}>
                Sample Form
              </label>
              <input 
                type="text" 
                placeholder="Enter your text here"
                style={{
                  padding: '12px',
                  borderRadius: '6px',
                  border: '1px solid #ddd',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px'
                }}
              />
              <Button>
                Submit Form
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Layout for Mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .main-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </PageLayout>
  );
};

export default ButtonDemo;