import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import Logo from "../css/images/logo.png";
import axios from "axios";
import { useCookies } from "react-cookie";
import { MDBIcon } from "mdb-react-ui-kit";

const Navbar = () => {
  const navigate = useNavigate()
  const [cookie, setCookie, removeCookie] = useCookies()
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    const res = await axios.get("http://localhost:3001/logout")
    removeCookie('token', { path: '/' });
    console.log(res);
  }

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

// return 2 different navbars depending if there is a cookie or not 
  return (
    <nav className="navbar ps-4 pe-4">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      {(Object.keys(cookie).length !== 0) ? <div className="navbar-right">
      <Link to="/all-residences" className="navbar-link">
          All Residences
        </Link>
        <div className="navbar-dropdown">
            <div className="navbar-link navbar-dropdown" onClick={toggleDropdown}>
              <span>My Account</span>{" "}
              <MDBIcon icon={showDropdown ? 'caret-up' : 'caret-down'} />
            </div>
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="/residences" className="dropdown-link">
                  My Residences
                </Link>
                <Link to="/favorites" className="dropdown-link">
                  My Favorites
                </Link>
              </div>
            )}
          </div>
        {/* <Link to="/residences" className="navbar-link">
          My Residences
        </Link> */}
        <Link to="/addresidence" className="navbar-link">
          Add Residence
        </Link>  
        <Link to="/login" className="navbar-link logout" onClick={handleLogout} >
          Logout
        </Link> </div> : 
        <div className="navbar-right">
          <Link to="/all-residences" className="navbar-link">
          Residences
        </Link>
        <Link to="/login" className="navbar-link">
          Add Residence
        </Link>  
        <Link to="/register" className="navbar-link">
          Sign Up
        </Link>
        <Link to="/login" className="navbar-link" style={{color:"#f78864"}}>
          Login
        </Link>
         </div> 
        }
    </nav>
  );
};

export default Navbar;
