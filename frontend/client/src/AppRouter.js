import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your components
import Home from './components/Home';
import Login from './components/Login';
import Signup from './Pages/Auth/Signup';
import ProtectedRoute from './Auth/ProtectedRoute';

function AppRouter() {
  return (
    <div>
      {/* Define Routes */}
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Route for Home */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>

        {/* Default Route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
