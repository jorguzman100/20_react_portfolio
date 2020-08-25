import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {


    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Jorge Guzman</h3>
                <img className='profilePicture' src="/assets/img/profile/JorgeGuzman2.jpg" alt="Jorge Guzman profile" />
                <p className='role'>Full Stack Web Developer</p>
            </div>

            <ul className="list-unstyled components">
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/experience">Experience</Link>
                </li>
                <li>
                    <Link to="/education">Education</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            <ul className="list-unstyled CTAs">
                <li>
                    <Link to="#" className="article">Social medial</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;


// Portfolio dropdown 
/* 
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Portfolio</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <Link to="/portfolio">Front End</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Command Line Interface</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Full Stack</Link>
                        </li>
                    </ul>
                </li>
*/