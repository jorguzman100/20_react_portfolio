import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";

// Components
import SideNav from './components/SideNav';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <SideNav />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;

// Sidebar based on: BOOTSTRAP SIDEBAR
// Source: https://bootstrapious.com/p/bootstrap-sidebar