import React from 'react';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import MainContent from './components/MainContent.js';
import './css/style.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
