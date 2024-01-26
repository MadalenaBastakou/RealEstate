import "../css/Home.css";
import RealEstateImage from "../css/images/pixabay-221457.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-content">
      <div className="description">
        <h1>Welcome to Our Real Estate Platform</h1>
        <p>Find your dream home with us. Explore listings, agents, and more.</p>
        <Link to="/residences">
          <button className="browse-button">Browse Listings</button>
        </Link>
      </div>
      <div className="image">
        <img src={RealEstateImage} alt="Real Estate" />
      </div>
    </div>
  );
};

export default Home;
