import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span href="#" by="Flowbite™" year={2022}></span>
      <ul>
        <li href="#">About</li>
        <li href="#">Privacy Policy</li>
        <li href="#">Contact</li>
      </ul>
    </footer>
  );
};

export default Footer;
