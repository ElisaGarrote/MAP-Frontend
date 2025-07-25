import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import CheckboxDemo from './pages/gile/CheckboxDemo.jsx';
import DropdownDemo from './pages/gile/DropdownDemo.jsx';
import ModalDemo from './pages/gile/ModalDemo.jsx';
import TabsDemo from './pages/gile/TabsDemo.jsx';
import '../src/index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="gile/checkbox" element={<CheckboxDemo />} />
          <Route path="gile/dropdown" element={<DropdownDemo />} />
          <Route path="gile/modal" element={<ModalDemo />} />
          <Route path="gile/tabs" element={<TabsDemo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;