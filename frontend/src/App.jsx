import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import ToastPage from './pages/Sillano/ToastPage.jsx';
import LoadingPage from './pages/Sillano/LoadingPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sillano/component1" element={<ToastPage />} />
        <Route path="/sillano/component2" element={<LoadingPage />} />
      </Routes>
    </Router>
  );
}

export default App;