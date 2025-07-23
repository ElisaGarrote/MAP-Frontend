import React from 'react';
import '../styles/PageLayout.css';

const PageLayout = ({ children, className = '' }) => {
  return (
    <div className={`page-layout ${className}`}>
      <div className="page-container">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;