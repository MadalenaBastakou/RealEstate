import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidenceCard from "./ResidenceCard";
import "../css/Residences.css";

const Residences = () => {
  const [residences, setResidences] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

console.log(residences);

const fetchData = async () => {
  const res = await axios.get("http://localhost:3001/residences", {withCredentials:true})
 setResidences(res.data)
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
