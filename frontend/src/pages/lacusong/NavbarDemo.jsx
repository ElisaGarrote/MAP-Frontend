import React from 'react';
import PageLayout from '../../components/PageLayout';
import MAPLOGO from '../../assets/MAPLOGO.jpg';

const NavbarDemo = () => {
  return (
    <PageLayout>
      <div style={{ padding: '20px 0' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '20px',
          color: '#333'
        }}>
          Navbar Component Demo
        </h1>
        
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
            The navbar is displayed at the top of this page with comprehensive functionality including:
          </p>
          <ul style={{ 
            fontSize: '1rem', 
            lineHeight: '1.8', 
            color: '#555',
            paddingLeft: '20px',
            marginTop: '15px'
          }}>
            <li>Fixed positioning at the top with shadow effect</li>
            <li>Company logo displayed on the left side</li>
            <li>Multi-level dropdown navigation (Sillano, Lacusong, Afable, Gile)</li>
            <li>Notification system with badges and management</li>
            <li>User profile dropdown with role-based features</li>
            <li>Responsive design that adapts to mobile screens</li>
            <li>Mobile hamburger menu with full navigation</li>
            <li>Outside click detection for dropdown closing</li>
          </ul>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '600', 
            marginBottom: '20px',
            color: '#333'
          }}>
            Navigation Structure:
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
              backgroundColor: '#f8f9fa', 
              borderRadius: '10px',
              border: '1px solid #e0e0e0'
            }}>
              <h3 style={{ 
                color: '#007bff', 
                marginBottom: '15px',
                fontSize: '1.3rem',
                fontWeight: '600'
              }}>
                Sillano Components
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '5px 0', borderBottom: '1px solid #e9ecef' }}>Component 1</li>
                <li style={{ padding: '5px 0', borderBottom: '1px solid #e9ecef' }}>Component 2</li>
                <li style={{ padding: '5px 0', borderBottom: '1px solid #e9ecef' }}>Component 3</li>
                <li style={{ padding: '5px 0' }}>Component 4</li>
              </ul>
            </div>

            {/* Lacusong Dropdown */}
            <div style={{ 
              padding: '20px', 
              backgroundColor: '#f8f9fa', 
              borderRadius: '10px',
              border: '1px solid #e0e0e0'
            }}>
              <h3 style={{ 
                color: '#007bff', 
                marginBottom: '15px',
                fontSize: '1.3rem',
                fontWeight: '600'
              }}>
                Lacusong Components
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '5px 0', borderBottom: '1px solid #e9ecef' }}>Button</li>
                <li style={{ padding: '5px 0', borderBottom: '1px solid #e9ecef' }}>Input</li>
                <li style={{ padding: '5px 0', borderBottom: '1px solid #e9ecef' }}>Navbar</li>
                <li style={{ padding: '5px 0', borderBottom: '1px solid #e9ecef' }}>Layout</li>
                <li style={{ padding: '5px 0' }}>Primary Button</li>
              </ul>
            </div>

            {/* Afable Dropdown */}
            <div style={{ 
              padding: '20px', 
              backgroundColor: '#f8f9fa', 
              borderRadius: '10px',
              border: '1px solid #e0e0e0'
            }}>
              <h3 style={{ 
                color: '#007bff', 
                marginBottom: '15px',
                fontSize: '1.3rem',
                fontWeight: '600'
              }}>
                Afable Components
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '5px 0', borderBottom: '1px solid #e9ecef' }}>Component 1</li>
                <li style={{ padding: '5px 0', borderBottom: '1px solid #e9ecef' }}>Component 2</li>
                <li style={{ padding: '5px 0', borderBottom: '1px solid #e9ecef' }}>Component 3</li>
                <li style={{ padding: '5px 0' }}>Component 4</li>
              </ul>
            </div>

            {/* Gile Dropdown */}
            <div style={{ 
              padding: '20px', 
              backgroundColor: '#f8f9fa', 
              borderRadius: '10px',
              border: '1px solid #e0e0e0'
            }}>
              <h3 style={{ 
                color: '#007bff', 
                marginBottom: '15px',
                fontSize: '1.3rem',
                fontWeight: '600'
              }}>
                Gile Components
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '5px 0', borderBottom: '1px solid #e9ecef' }}>Component 1</li>
                <li style={{ padding: '5px 0', borderBottom: '1px solid #e9ecef' }}>Component 2</li>
                <li style={{ padding: '5px 0', borderBottom: '1px solid #e9ecef' }}>Component 3</li>
                <li style={{ padding: '5px 0' }}>Component 4</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '600', 
            marginBottom: '20px',
            color: '#333'
          }}>
            Responsive Features:
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
                Desktop View (≥768px)
              </h3>
              <ul style={{ 
                fontSize: '1rem', 
                lineHeight: '1.7', 
                color: '#333',
                paddingLeft: '20px'
              }}>
                <li>Company logo positioned on the left</li>
                <li>Horizontal navigation with dropdown menus</li>
                <li>Notification bell with badge counter</li>
                <li>User profile avatar with dropdown menu</li>
                <li>Hover effects and smooth transitions</li>
                <li>Outside click detection for dropdowns</li>
                <li>Role-based menu items (Admin features)</li>
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
                Mobile View (≤768px)
              </h3>
              <ul style={{ 
                fontSize: '1rem', 
                lineHeight: '1.7', 
                color: '#333',
                paddingLeft: '20px'
              }}>
                <li>Smaller logo for space optimization</li>
                <li>Hamburger menu icon</li>
                <li>Collapsible mobile navigation menu</li>
                <li>User profile section at top of mobile menu</li>
                <li>Mobile-optimized notification display</li>
                <li>Organized dropdown sections in mobile view</li>
                <li>Touch-friendly button sizes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NavbarDemo;