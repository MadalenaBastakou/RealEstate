import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidenceCardsAll from "./ResidenceCardsAll";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "../css/Residences.css";
import Select from 'react-select';

const AllResidences = () => {
  const [residences, setResidences] = useState([]);

  // filter for residences, to display either all the residences, for rent only or for sale only
  const options = [
    { value: "all", label: 'All residences' },
    { value: { x: "forRent", y: "for Rent" }, label: 'For rent only' },
    { value: { x: "forSale", y: "for Sale" }, label: 'For sale only' },
  ];
  // select state for filtering residences
  const [selectedOption, setSelectedOption] = useState({ value: "all", label: 'All residences' });

  useEffect(() => {
    fetchData();
  }, []);
  // get all the residences of all the users
  const fetchData = async () => {
    axios
      .get("http://localhost:3001/residences/all")
      .then(({ data }) => {
        setResidences(data);
      });
  };

  

  return (
    <MDBContainer>
      <MDBRow className='mt-3'>
        <MDBCol md='3'>
          <h5 style={{ fontWeight: "bold" }}>Show: </h5>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className='mt-3'>
        {selectedOption.value === "all" ? residences.map((residence) => {
          return (
            <MDBCol md='3'>
              <ResidenceCardsAll
                key={residence._id}
                residence={residence}
              ></ResidenceCardsAll>
            </MDBCol>
          );
        })
          : residences.map((residence) => {
            if (residence.category == selectedOption.value.x || residence.category == selectedOption.value.y) {
              return (
                <MDBCol md='3'>
                  <ResidenceCardsAll
                    key={residence._id}
                    residence={residence}
                  ></ResidenceCardsAll>
                </MDBCol>
              );
            }
          })
        }
      </MDBRow>
    </MDBContainer>
  );
};

export default AllResidences;