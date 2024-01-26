import axios from "axios";
import "../css/Home.css";
import RealEstateImage from "../css/images/pixabay-221457.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState()
  const [residences, setResidences] = useState([])

console.log(category);

  const handleFetch = async(e) => {
    setCategory(e.target.value)
    const res = await axios.get(`http://localhost:3001/residences/${category}`, {withCredentials: true})
    console.log();
    // setResidences(res.data)
  }
// console.log(residences);

  return (
    <div className="main-content">
      <div className="description">
        <h1>Welcome to Our Real Estate Platform</h1>
        <p>Find your dream home with us. Explore listings, agents, and more.</p>
        {/* <Link to="/residences"> */}
        <div className="home-buttons">
          <button className="browse-button" name="category" value="forRent" onClick={handleFetch}>For Rent</button>
          <button className="browse-button" name="category" value="forSale" onClick={handleFetch}>For Sale</button>
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
