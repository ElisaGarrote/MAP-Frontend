import React from 'react';
import NavBar from '../components/PageNavBar.jsx';
import '../styles/MainPage.css';

const MainPage = () => {
  return (
    <div>
      <NavBar /> {/* Add NavBar at the top */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Welcome to MainPage</h1>
        <p>This is a simple test to check if MainPage is displayed correctly.</p>
      </div>
    </div>
  );
};

export default MainPage;