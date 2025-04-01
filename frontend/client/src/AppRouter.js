import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your components
import Home from './components/Home';
import Login from './components/Login';
import Signup from './Pages/Auth/Signup';

function AppRouter() {
  return (
    <div>
      {/* Define Routes */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
