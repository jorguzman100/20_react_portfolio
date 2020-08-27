import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

// Components
import SideNav from './components/SideNav';
import Content from './components/Content';

const App = () => {
  const [aboutLinkState, setAboutLinkState] = useState({
    scrollToId: 'about'
  });

  const handleOnClickLink = (e) => {
    let dataLink = e.target.getAttribute('data-link');
    setAboutLinkState({
      scrollToId: dataLink
    });
    window.history.pushState(aboutLinkState, '', `/about/#${dataLink}`)
  }

  return (
    <BrowserRouter>
      <div className="wrapper">
        <SideNav handleOnClickLink={handleOnClickLink}/>
        <Content scrollToId={aboutLinkState.scrollToId}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Sidebar based on: BOOTSTRAP SIDEBAR
// Source: https://bootstrapious.com/p/bootstrap-sidebar