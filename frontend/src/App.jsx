import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";

// Lawrence added import
import Canvas from "./pages/afable/Canvas.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />

        {/* Lawrence added routes */}
        {/* Eto yung routes ko */}
        <Route path="/afable/canvas" element={<Canvas />} />
      </Routes>
    </Router>
  );
}

export default App;
