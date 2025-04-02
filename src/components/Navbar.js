import React, { useState, useRef } from "react";
import "../styles/Navbar.css";
import { FaArrowRight, FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import logo from "../assets/Logo-1.jpg"; // Ensure the logo is inside src/assets/

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutId = useRef(null);

  // Function to open dropdown
  const openDropdown = () => {
    clearTimeout(timeoutId.current);
    setDropdownOpen(true);
  };

  // Function to close dropdown after delay
  const closeDropdown = () => {
    timeoutId.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // Delay of 300ms before closing
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="PR Granites & Marbles Logo" className="logo" />
      </div>

      {/* Desktop Navigation */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>

        {/* Dropdown for Our Offerings */}
        <li 
          className="dropdown"
          ref={dropdownRef}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <button className="dropdown-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
            Our Offerings <FaCaretDown />
          </button>

          {dropdownOpen && (
            <ul className="dropdown-content" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <li><a href="#projects" onClick={() => setDropdownOpen(false)}>Projects</a></li>
              <li><a href="#quarries" onClick={() => setDropdownOpen(false)}>Quarries</a></li>
              <li><a href="#slabs" onClick={() => setDropdownOpen(false)}>Slabs</a></li>
              <li><a href="#rough-blocks" onClick={() => setDropdownOpen(false)}>Rough Blocks</a></li>
              <li><a href="#monuments" onClick={() => setDropdownOpen(false)}>Monuments</a></li>
            </ul>
          )}
        </li>

        <li><a href="#gallery">Gallery</a></li>
      </ul>

      {/* "Let's Talk" Button */}
      <a  href="#contact" className="talk-btn">
        Let's Talk <span className="arrow-icon"><FaArrowRight /></span>
      </a>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes className="icon close-icon" /> : <FaBars className="icon" />}
      </div>

      {/* Full-Screen Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>

            {/* Mobile Dropdown - Now always shows options when opened */}
            <li className="mobile-dropdown">
              <button 
                className="dropdown-btn" 
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Our Offerings <FaCaretDown />
              </button>
              <ul className={`mobile-dropdown-content ${dropdownOpen ? "show" : ""}`}>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#quarries" onClick={() => setMenuOpen(false)}>Quarries</a></li>
                <li><a href="#slabs" onClick={() => setMenuOpen(false)}>Slabs</a></li>
                <li><a href="#rough-blocks" onClick={() => setMenuOpen(false)}>Rough Blocks</a></li>
                <li><a href="#monuments" onClick={() => setMenuOpen(false)}>Monuments</a></li>
              </ul>
            </li>

            <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
