import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from "./AppRouter";
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import './css/style.css';


function App() {
  return (
      <Router>
          <div className="app-container">
              <Header/>
              <div className="main-container">
                  <Sidebar/>
                  <AppRouter/>
              </div>
          </div>
      </Router>
  );
}

export default App;
