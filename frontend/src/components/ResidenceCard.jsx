import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const ResidenceCard = ({ residence, deleteResidence }) => {
  const { _id, name, description, image, price } = residence;

  return (
    <div className="exercise-card">
      <img src={image.url} alt={name} className="exercise-image" />
      <div className="exercise-details">
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{description}</p>
      </div>
      <div className="exercise-actions">
        <button>
          <Link to={`/exercise/${residence._id}`} className="btn-link">
            Edit
          </Link>
        </button>
        <button
          className="btn-link"
          onClick={() => deleteResidence(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ResidenceCard;
