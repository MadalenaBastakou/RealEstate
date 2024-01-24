import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Logo from "../css/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <>
          <Link to="/residences" className="navbar-link">
            Residences
          </Link>
          <Link to="/addresidence" className="navbar-link">
            Add Residence
          </Link>
          <Link to="/signup" className="navbar-link">
            Sign Up
          </Link>
          <Link to="/login" className="navbar-link">
            Login
          </Link>
          <Link to="/logout" className="navbar-link">
            Logout
          </Link>
        </>
      </div>
    </nav>
  );
};

export default Navbar;
