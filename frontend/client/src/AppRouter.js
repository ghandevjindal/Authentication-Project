import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your components
import Home from './components/Home';
import Login from './components/Login';

function AppRouter() {
  return (
    <div>
      {/* Define Routes */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
