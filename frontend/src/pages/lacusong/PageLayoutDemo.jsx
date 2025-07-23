import React from 'react';
import PageLayout from '../../components/PageLayout';

const PageLayoutDemo = () => {
  return (
    <PageLayout>
      <h1>Page Layout Component Demo</h1>
      
      <div style={{ marginBottom: '30px' }}>
        <h2>Layout Features</h2>
        <p>This page demonstrates the PageLayout component which provides:</p>
        <ul>
          <li>Full viewport width and height structure</li>
          <li>Light gray background (#F8F8F8)</li>
          <li>White inner container with rounded corners</li>
          <li>Proper padding that accommodates the fixed navbar</li>
          <li>Responsive design for different screen sizes</li>
        </ul>
      </div>

      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <div style={{ padding: '20px', backgroundColor: '#E3F2FD', borderRadius: '10px' }}>
          <h3>Top Section</h3>
          <p>This demonstrates how content can be organized in the top section of the layout.</p>
        </div>
        
        <div style={{ padding: '20px', backgroundColor: '#F3E5F5', borderRadius: '10px' }}>
          <h3>Middle Section</h3>
          <p>This shows content in the middle section with proper spacing and layout.</p>
        </div>
        
        <div style={{ padding: '20px', backgroundColor: '#E8F5E8', borderRadius: '10px' }}>
          <h3>Bottom Section</h3>
          <p>This demonstrates the bottom section of the page layout structure.</p>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '30px', border: '2px dashed #007BFF', borderRadius: '10px' }}>
        <h2>Layout Specifications</h2>
        <ul>
          <li><strong>Background:</strong> Light #F8F8F8</li>
          <li><strong>Text Color:</strong> Base #0C0C0C</li>
          <li><strong>Padding:</strong> 100px 38px 38px 38px (accommodates navbar)</li>
          <li><strong>Inner Container:</strong> White background, 20px border-radius</li>
          <li><strong>Responsive:</strong> Adapts margins and padding on mobile</li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default PageLayoutDemo;