import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidenceCard from "./ResidenceCard";
import "../css/Residences.css";

const Residences = () => {
  const [residences, setResidences] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/residence/residence")
      .then((res) => {
        setResidences(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
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
