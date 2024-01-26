import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidenceCard from "./ResidenceCard";
import "../css/Residences.css";

const Residences = () => {
  const [residences, setResidences] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    axios
      .get("http://localhost:3001/residences", { withCredentials: true })
      .then(({ data }) => {
        setResidences(data);
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
        {residences.map((residence) => {
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
