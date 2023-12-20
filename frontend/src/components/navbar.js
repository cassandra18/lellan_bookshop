import React from "react";
import { Link } from "react-router-dom"
import ToggleMenu from "./toggleMenu";
import bookshopLogo from "../assets/images/bookshop_logo.jpeg";

const Navbar = () => {
  const menuItems = [
    { label: 'Home', link: '/'},
    { label: 'Our services', link: '/our-services'},
    { label: 'Contact', link: '/contact'},
    { label: 'Lelann stores', link: '/lelann-stores'},
    { label: 'About Us', link: '/about-us'},
    { label: 'Need help shopping online?', link: '/help'}
  ]

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
            <a href="/lelann-stores" className="lelann-stores">Lelann stores</a>
            <a href="/contact" className="contact">Contact</a>
            <a href="/about-us" className="about-us">About Us</a>
            <a href="/services" className="services">Our services</a>
            <a href="/help" className="help-shopping-online">Need help shopping online?</a>
        </div>
        <ToggleMenu menuItems={menuItems} />
      </div>
    </div>
  );
};

export default Navbar;
