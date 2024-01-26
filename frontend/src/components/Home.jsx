import axios from "axios";
import "../css/Home.css";
import RealEstateImage from "../css/images/pixabay-221457.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="main-content">
      <div className="description">
        <h1>Welcome to Our Real Estate Platform</h1>
        <p>Find your dream home with us. Explore listings, agents, and more.</p>
        {/* <Link to="/residences"> */}
        <div className="home-buttons">
          <button className="browse-button" onClick={() => {navigate("/forRent")}}>For Rent</button>
          <button className="browse-button" onClick={() => {navigate("/forSale")}}>For Sale</button>
        </div>
        {/* </Link> */}
      </div>
      <div className="image">
        <img src={RealEstateImage} alt="Real Estate" />
      </div>
    </div>
  );
};

export default Home;
