import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidenceCard from "./ResidenceCard";
import "../css/Residences.css";
// import { useNavigate } from "react-router-dom";

const Residences = () => {
  const [residences, setResidences] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  console.log(residences);

  // const navigate = useNavigate();

  const fetchData = async () => {
    axios
      .get("http://localhost:3001/residences", { withCredentials: true })
      .then(({ data }) => {
        // console.log(data);
        setResidences(data);
      })
  }

  return (
    <div className="exercise-page">
      <div className="exercise-list">
        {residences.map((residence) => {
          return (
            <ResidenceCard
              key={residence.id}
              residence={residence}
            ></ResidenceCard>
          );
        })}
      </div>
    </div>
  );
};

export default Residences;
