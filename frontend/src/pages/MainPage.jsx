import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/PageNavBar.jsx';
import '../styles/MainPage.css';
import SystemLoading from "../components/Loading/SystemLoading.jsx";

// Displays a loading screen for 2 seconds before showing the main content
const MainPage = () => {
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
      <header className="mainpage-navbar">
        <NavBar />
      </header>
      <main className="mainpage-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainPage;