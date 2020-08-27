import React from 'react';
import { Link } from "react-router-dom";

// import profilePic from '../../public/img/profile/JorgeGuzman2.jpg'

const Nav = (props) => {

    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <Link to='/about'>
                    <h3 className='my-5'>Jorge Guzman</h3>
                    <img className='profilePicture mb-5' src={process.env.PUBLIC_URL + '/img/profile/JorgeGuzman2.jpg'} alt="Jorge Guzman profile" />
                    <p className='role mb-5 mt-0'>Full Stack Web Developer</p>
                </Link>
            </div>

            <ul className="list-unstyled components">
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">About</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#" rel='bookmark' data-link='about' onClick={props.handleOnClickLink}>About</a>
                        </li>
                        <li>
                            <a href="#" rel='bookmark' data-link='experience' onClick={props.handleOnClickLink}>Experience</a>
                        </li>
                        <li>
                            <a href="#" rel='bookmark' data-link='education' onClick={props.handleOnClickLink}>Education</a>
                        </li>
                        <li>
                            <a href="#" rel='bookmark' data-link='skills' onClick={props.handleOnClickLink}>Skills</a>
                        </li>
                    </ul>
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
                    <a href="https://github.com/jorguzman100" target="_blank">
                        <i className="fab fa-github display-4 align-middle mr-2"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/jorge-guzman-992401a/"
                        target="_blank"
                    >
                        <i className="fab fa-linkedin display-4 align-middle mr-2"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.facebook.com/jorguzman75"
                        target="_blank"
                    >
                        <i className="fab fa-facebook-square display-4 align-middle mr-2"></i>
                    </a>
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