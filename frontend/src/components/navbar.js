import React, { useState } from "react";
import bookshopLogo from "../assets/images/bookshop_logo.jpeg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className="navbar-container">
      <div className="left-section">
        <div className="logo-wrapper">
          <img className="logo-image" src={bookshopLogo} alt="Bookshop Logo" />
        </div>
        <div className="title-wrapper">
          <h4>Lelann</h4>
          <h4>Bookshop</h4>
        </div>
      </div>

      <div className="right-section">
        <div className="links-wrapper">
          <a href="/" className="home-link">Home</a>
          <button className="menu-btn" onClick={toggleMenu}>Menu</button>
          <div className={`hidden-links ${showMenu ? 'show-links': ""}`}>
            <a href="/lelann-stores" className="lelann-stores">Lelann stores</a>
            <a href="/contact" className="contact">Contact</a>
            <a href="/about-us" className="about-us">About Us</a>
            <a href="/services" className="services">Our services</a>
            <a href="/help" className="help-shopping-online">Need help shopping online?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
