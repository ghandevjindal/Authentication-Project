import React from 'react';
import AppRouter from './AppRouter';  // Keep this import

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App container">
      <Navbar />
      <h1 className="text-center mt-5">Welcome to the MERN Authentication App</h1>
      
      {/* Render AppRouter to handle routing */}
      <AppRouter />
    </div>
  );
}

export default App;
