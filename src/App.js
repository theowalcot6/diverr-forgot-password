import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ResetPassword from './components/ResetPassword';
import Error from './components/Error';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation /> {/* Navigation component */}
        <AppRoutes/>
      </Router>
    </div>
  );
}

function AppRoutes() {

  return (
    <>
    <Routes>
      <Route path="/reset-password/*" element={<ResetPassword />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  </>
  );
}

export default App;
