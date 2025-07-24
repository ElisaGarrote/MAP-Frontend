import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageLayout from './components/PageLayout';

// Import demo pages
import ButtonDemo from './pages/lacusong/ButtonDemo';
import InputDemo from './pages/lacusong/InputDemo';
import NavbarDemo from './pages/lacusong/NavbarDemo';
import PageLayoutDemo from './pages/lacusong/PageLayoutDemo';
import PrimaryButtonDemo from './pages/lacusong/PrimaryButtonDemo';

import './App.css';

const HomePage = () => (
  <PageLayout>
    <h1>Component Demo Home</h1>
    <p>Welcome to the component demonstration pages!</p>
    <p>Use the navigation above to explore different components:</p>
    <ul>
      <li><strong>Button:</strong> Various button styles and states</li>
      <li><strong>Input:</strong> Form input fields with different states</li>
      <li><strong>Navbar:</strong> Navigation bar with responsive behavior</li>
      <li><strong>Layout:</strong> Page layout container demonstration</li>
      <li><strong>Primary Button:</strong> Focused primary button examples</li>
    </ul>
  </PageLayout>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lacusong/button" element={<ButtonDemo />} />
          <Route path="/lacusong/input" element={<InputDemo />} />
          <Route path="/lacusong/navbar" element={<NavbarDemo />} />
          <Route path="/lacusong/layout" element={<PageLayoutDemo />} />
          <Route path="/lacusong/primary-button" element={<PrimaryButtonDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;