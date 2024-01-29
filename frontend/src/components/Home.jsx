import "../css/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      <div className="image"></div>
      <div className="description">
        <h1>Welcome to Our Real Estate Platform</h1>
        <p>Find your dream home with us. Explore listings, agents, and more.</p>
        <div className="home-buttons">
          <button
            className="browse-button"
            onClick={() => {
              navigate("/all-residences");
            }}
          >
            Get Started
          </button>
          {/* <button
            className="browse-button"
            onClick={() => {
              navigate("/forSale");
            }}
          >
            For Sale
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
