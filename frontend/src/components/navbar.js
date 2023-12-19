import React from "react";
import bookshopLogo from "../assets/images/bookshop_logo.jpeg";

const Navbar = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
