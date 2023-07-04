import React from 'react'
import './Navbar.css';
import Toggle from "../Toggle/Toggle";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Amaan</div>
            <Toggle/>
        </div>
        
        <div className="n-right"></div>
        <div className="n-list">
            
            <ul style={{listStyleType:'none'}}>
                <Link spy={true} to="Navbar" smooth={true} activeClass='activeClass'>
                <li>Home</li>
                </Link>
                <Link spy={true} to="About" smooth={true} activeClass='activeClass'>
                <li>About</li>
                </Link>
                <Link spy={true} to="Skill" smooth={true} activeClass='activeClass'>
                <li>Skills</li>
                </Link>
                <Link spy={true} to="Portfolio" smooth={true} activeClass='activeClass'>
                <li>Projects</li>
                </Link>
            </ul>   
            
        </div>
        <Link spy={true} to="Contact" smooth={true} activeClass='activeClass'>
        <button className='button n-button'>
            Contact
        </button>
        </Link>
    </div>
    )
}

export default Navbar