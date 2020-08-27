import React from 'react';
import { Route } from "react-router-dom";

// Components
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

const Content = (props) => {
    console.log('Content - props.scrollToId: ', props.scrollToId);

    return (
        <div id="content">
            <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="btn btn-info">
                    <i className="fas fa-align-left"></i>
                </button>
            </div>

            <Route exact path='/' component={About} />
            <Route
                path={[
                    "/about",
                    '/20_react_portfolio',
                    '/about/about',
                    '/about/experience#',
                    '/about/education#',
                    '/about/skills#'
                ]}
                component={() => <About scrollToId={props.scrollToId} />}
            />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
        </div>
    );
}

export default Content;