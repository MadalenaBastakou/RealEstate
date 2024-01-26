import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import Logo from "../css/images/logo.png";
import axios from "axios";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const navigate = useNavigate()
  const [cookie, setCookie, removeCookie] = useCookies()

  const handleLogout = async () => {
    const res = await axios.get("http://localhost:3001/logout")
    removeCookie('token', { path: '/' });
    console.log(res);
    // browser.cookies.remove('loginToken')
  }

// return 2 different navbars depending if there is a cookie or not 
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      {(Object.keys(cookie).length != 0) ? <div className="navbar-right">
        <Link to="/residences" className="navbar-link">
          Residences
        </Link>
        <Link to="/addresidence" className="navbar-link">
          Add Residence
        </Link>  
        <Link to="/login" className="navbar-link" onClick={handleLogout} >
          Logout
        </Link> </div> : 
        <div className="navbar-right">
        <Link to="/register" className="navbar-link">
          Sign Up
        </Link>
        <Link to="/login" className="navbar-link">
          Login
        </Link>
         </div> 
        }
    </nav>
  );
};

export default Navbar;
