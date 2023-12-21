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
          <Link to="/" className="home-link">
            <h4>Lelann</h4>
            <h4>Bookshop</h4>
          </Link>
        </div>
      </div>

      <div className="right-section">
        <div className="links-wrapper">
          <Link to="/" className="home-link">Home</Link>
          <Link to="/lelann-stores" className="lelann-stores">Lelann stores</Link>
          <Link to="/contact" className="contact">Contact</Link>
          <Link to="/about-us" className="about-us">About Us</Link>
          <Link to="/our-services" className="services">Our services</Link>
          <Link to="/help" className="help-shopping-online">Need help shopping online?</Link>
        </div>
        <ToggleMenu className="toggle-menu" menuItems={menuItems} />
      </div>
    </div>
  );
};

export default Navbar;
