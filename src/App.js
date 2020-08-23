import React from 'react';
import './App.css';

// Components
import SideNav from './components/SideNav';
import Content from './components/Content';

function App() {
  return (
    <div className="wrapper">
      <SideNav />
      <Content />
    </div>
  );
}

export default App;

// Sidebar based on: BOOTSTRAP SIDEBAR
// Source: https://bootstrapious.com/p/bootstrap-sidebar