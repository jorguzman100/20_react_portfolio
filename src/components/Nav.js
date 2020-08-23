import React from 'react';

const Nav = () => {


    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Jorge Guzman</h3>
                <img className='profilePicture' src="./images/JorgeGuzman2.jpg" alt="Jorge Guzman profile" />
            </div>

            <ul className="list-unstyled components">
                <p>Full Stack Web Developer</p>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Experience</a>
                </li>
                <li>
                    <a href="#">Education</a>
                </li>
                <li>
                    <a href="#">Skills</a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Portfolio</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Front End</a>
                        </li>
                        <li>
                            <a href="#">Command Line Interface</a>
                        </li>
                        <li>
                            <a href="#">Full Stack</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>

            <ul className="list-unstyled CTAs">
                <li>
                    <a href="#" className="article">Social medial</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;