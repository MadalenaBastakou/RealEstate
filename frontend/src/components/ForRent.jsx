import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidenceCard from "./ResidenceCard";
import "../css/Residences.css";

const Residences = () => {
  const [resForRent, setResForRent] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    axios
      .get("http://localhost:3001/residences/forRent", { withCredentials: true })
      .then(({ data }) => {
        setResForRent(data);
      })
  }

  const deleteResidence = async (id) => {
    await axios.delete(`http://localhost:3001/residences/${id}`, {
      withCredentials: true,
    });
    fetchData()
  };

  return (
    <div className="exercise-page">
      <div className="exercise-list">
        {resForRent.map((residence) => {
          return (
            <ResidenceCard
              key={residence._id}
              residence={residence}
              deleteResidence={deleteResidence}
            ></ResidenceCard>
          );
        })}
      </div>
    </div>
  );
};

export default Residences;
