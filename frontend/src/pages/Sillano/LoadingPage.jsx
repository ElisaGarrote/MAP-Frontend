import React, { useState, useEffect } from 'react';
import NavBar from '../../components/PageNavBar.jsx';
import SystemLoading from "../../components/Loading/SystemLoading.jsx";

// Displays a loading screen for 2 seconds before showing the main content
const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initializing page data (replace with actual API calls)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SystemLoading />;
  }

  return (
    <div>
      <NavBar /> {/* Add NavBar at the top */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Welcome to Loading Page</h1>
        <p>This is a simple test to check if Loading Page is displayed correctly.</p>
      </div>
    </div>
  );
};

export default LoadingPage;