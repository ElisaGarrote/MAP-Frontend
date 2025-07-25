import React from 'react';
import PageLayout from '../../components/PageLayout';
import MAPLOGO from '../../assets/MAPLOGO.png';

const NavbarDemo = () => {
  return (
    <PageLayout>
      <div style={{ padding: '20px 0' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '20px',
          color: '#0c0c0c'
        }}>
          Enhanced Navbar Component Demo
        </h1>
        
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
            The updated navbar follows the design specifications with enhanced functionality:
          </p>
          <ul style={{ 
            fontSize: '1rem', 
            lineHeight: '1.8', 
            color: '#555',
            paddingLeft: '20px',
            marginTop: '15px'
          }}>
            <li><strong>Fixed positioning:</strong> 60px height with white background (#FFFFFF)</li>
            <li><strong>Text color:</strong> Base text color (#0C0C0C) throughout</li>
            <li><strong>Logo sizing:</strong> 4.5rem height that shrinks on scroll</li>
            <li><strong>Scroll effect:</strong> Navbar shrinks and adds shadow when scrolling</li>
            <li><strong>38px horizontal padding</strong> on both sides</li>
            <li><strong>Z-index 100</strong> with box shadow (0 0 10px #d3d3d3)</li>
            <li><strong>Mobile layout:</strong> Hamburger on left, logo centered on mobile</li>
            <li><strong>Column layout:</strong> User profile at top in mobile menu</li>
          </ul>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '600', 
            marginBottom: '20px',
            color: '#0c0c0c'
          }}>
            Design Specifications Implementation:
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '25px',
            marginBottom: '30px'
          }}>
            <div style={{ 
              padding: '25px', 
              backgroundColor: '#f8f9fa', 
              borderRadius: '12px',
              border: '2px solid #007bff'
            }}>
              <h3 style={{ 
                color: '#007bff', 
                marginBottom: '15px',
                fontSize: '1.3rem',
                fontWeight: '600'
              }}>
                Layout Structure
              </h3>
              <ul style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.6', 
                color: '#0c0c0c',
                paddingLeft: '15px'
              }}>
                <li>Company logo and name on left side</li>
                <li>Navigation links centered with 20px gaps</li>
                <li>User controls (notifications + profile) on right</li>
                <li>Dropdown arrows rotate when active</li>
                <li>Click outside to close dropdowns</li>
              </ul>
            </div>

            <div style={{ 
              padding: '25px', 
              backgroundColor: '#f8f9fa', 
              borderRadius: '12px',
              border: '2px solid #28a745'
            }}>
              <h3 style={{ 
                color: '#28a745', 
                marginBottom: '15px',
                fontSize: '1.3rem',
                fontWeight: '600'
              }}>
                Notification System
              </h3>
              <ul style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.6', 
                color: '#0c0c0c',
                paddingLeft: '15px'
              }}>
                <li>35px circular icon with border</li>
                <li>Red badge counter in top-right corner</li>
                <li>320px wide overlay with notifications</li>
                <li>Each notification shows icon, title, message, time</li>
                <li>Clear All button and individual delete options</li>
              </ul>
            </div>

            <div style={{ 
              padding: '25px', 
              backgroundColor: '#f8f9fa', 
              borderRadius: '12px',
              border: '2px solid #dc3545'
            }}>
              <h3 style={{ 
                color: '#dc3545', 
                marginBottom: '15px',
                fontSize: '1.3rem',
                fontWeight: '600'
              }}>
                Profile Dropdown
              </h3>
              <ul style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.6', 
                color: '#0c0c0c',
                paddingLeft: '15px'
              }}>
                <li>35px circular user image/avatar</li>
                <li>250px wide dropdown panel</li>
                <li>User info section with name and role badge</li>
                <li>Admin-only sections conditionally rendered</li>
                <li>Default profile image fallback</li>
              </ul>
            </div>

            <div style={{ 
              padding: '25px', 
              backgroundColor: '#f8f9fa', 
              borderRadius: '12px',
              border: '2px solid #6f42c1'
            }}>
              <h3 style={{ 
                color: '#6f42c1', 
                marginBottom: '15px',
                fontSize: '1.3rem',
                fontWeight: '600'
              }}>
                Responsive Behavior
              </h3>
              <ul style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.6', 
                color: '#0c0c0c',
                paddingLeft: '15px'
              }}>
                <li>Hamburger menu positioned on left side</li>
                <li>Logo moves to center on mobile screens</li>
                <li>User profile section at top of mobile menu</li>
                <li>Navigation links in column layout below</li>
                <li>Touch-friendly button sizes and spacing</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '600', 
            marginBottom: '20px',
            color: '#0c0c0c'
          }}>
            Navigation Menu Structure:
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '20px',
            marginBottom: '30px'
          }}>
            {/* Sillano Dropdown */}
            <div style={{ 
              padding: '20px', 
              backgroundColor: '#ffffff', 
              borderRadius: '10px',
              border: '1px solid #e0e0e0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ 
                color: '#007bff', 
                marginBottom: '15px',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                Sillano Components
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#0c0c0c' }}>Component 1</li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#0c0c0c' }}>Component 2</li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#0c0c0c' }}>Component 3</li>
                <li style={{ padding: '8px 0', color: '#0c0c0c' }}>Component 4</li>
              </ul>
            </div>

            {/* Lacusong Dropdown */}
            <div style={{ 
              padding: '20px', 
              backgroundColor: '#ffffff', 
              borderRadius: '10px',
              border: '1px solid #e0e0e0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ 
                color: '#007bff', 
                marginBottom: '15px',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                Lacusong Components
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#0c0c0c' }}>Button</li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#0c0c0c' }}>Input</li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#0c0c0c' }}>Navbar</li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#0c0c0c' }}>Layout</li>
                <li style={{ padding: '8px 0', color: '#0c0c0c' }}>Primary Button</li>
              </ul>
            </div>

            {/* Afable Dropdown */}
            <div style={{ 
              padding: '20px', 
              backgroundColor: '#ffffff', 
              borderRadius: '10px',
              border: '1px solid #e0e0e0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ 
                color: '#007bff', 
                marginBottom: '15px',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                Afable Components
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#0c0c0c' }}>Component 1</li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#0c0c0c' }}>Component 2</li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#0c0c0c' }}>Component 3</li>
                <li style={{ padding: '8px 0', color: '#0c0c0c' }}>Component 4</li>
              </ul>
            </div>

            {/* Gile Dropdown */}
            <div style={{ 
              padding: '20px', 
              backgroundColor: '#ffffff', 
              borderRadius: '10px',
              border: '1px solid #e0e0e0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ 
                color: '#007bff', 
                marginBottom: '15px',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                Gile Components
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#0c0c0c' }}>Component 1</li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#0c0c0c' }}>Component 2</li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#0c0c0c' }}>Component 3</li>
                <li style={{ padding: '8px 0', color: '#0c0c0c' }}>Component 4</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '600', 
            marginBottom: '20px',
            color: '#0c0c0c'
          }}>
            Key Features & Specifications:
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '25px'
          }}>
            <div style={{ 
              padding: '25px', 
              backgroundColor: '#e8f4fd', 
              borderRadius: '12px',
              border: '2px solid #007bff'
            }}>
              <h3 style={{ 
                color: '#0056b3', 
                marginBottom: '15px',
                fontSize: '1.4rem',
                fontWeight: '600'
              }}>
                Desktop Features (≥768px)
              </h3>
              <ul style={{ 
                fontSize: '1rem', 
                lineHeight: '1.7', 
                color: '#0c0c0c',
                paddingLeft: '20px'
              }}>
                <li>Logo positioned on left with company name</li>
                <li>Centered navigation with 20px gaps</li>
                <li>10px padding on dropdown triggers</li>
                <li>Arrow icons that rotate on dropdown open</li>
                <li>35px circular notification and profile buttons</li>
                <li>White dropdown backgrounds with shadows</li>
                <li>Smooth scroll effects with navbar shrinking</li>
              </ul>
            </div>
            
            <div style={{ 
              padding: '25px', 
              backgroundColor: '#f0f8e8', 
              borderRadius: '12px',
              border: '2px solid #28a745'
            }}>
              <h3 style={{ 
                color: '#155724', 
                marginBottom: '15px',
                fontSize: '1.4rem',
                fontWeight: '600'
              }}>
                Mobile Layout (≤768px)
              </h3>
              <ul style={{ 
                fontSize: '1rem', 
                lineHeight: '1.7', 
                color: '#0c0c0c',
                paddingLeft: '20px'
              }}>
                <li>Hamburger menu positioned on the left side</li>
                <li>Logo centered in the navbar</li>
                <li>User profile section at top of mobile menu</li>
                <li>Navigation links displayed in column format</li>
                <li>Mobile-optimized touch targets</li>
                <li>Responsive font sizing and spacing</li>
                <li>Proper mobile menu hierarchy</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ 
          padding: '30px', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '15px',
          border: '1px solid #e0e0e0',
          marginTop: '40px'
        }}>
          <h3 style={{ 
            color: '#0c0c0c', 
            marginBottom: '15px',
            fontSize: '1.5rem',
            fontWeight: '600'
          }}>
            Technical Implementation Notes:
          </h3>
          <ul style={{ 
            fontSize: '1rem', 
            lineHeight: '1.8', 
            color: '#555',
            paddingLeft: '20px'
          }}>
            <li><strong>Color Variables:</strong> Uses CSS custom properties for consistent theming</li>
            <li><strong>Accessibility:</strong> Proper ARIA labels and keyboard navigation support</li>
            <li><strong>Performance:</strong> Optimized re-renders with proper React hooks usage</li>
            <li><strong>Responsive:</strong> Mobile-first approach with proper breakpoints</li>
            <li><strong>Animation:</strong> Smooth transitions and scroll effects</li>
            <li><strong>State Management:</strong> Efficient dropdown and notification state handling</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default NavbarDemo;