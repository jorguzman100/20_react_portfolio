import React from 'react';
import './App.css';

// Components
import Nav from './components/Nav';
import Content from './components/Content';

function App() {
  return (
    <div class="wrapper">
      <Nav />
      <Content />
    </div>
  );
}

export default App;

// Sidebar based on: BOOTSTRAP SIDEBAR
// Source: https://bootstrapious.com/p/bootstrap-sidebar