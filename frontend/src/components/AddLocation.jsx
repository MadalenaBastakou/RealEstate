import React, { useState } from "react";
import axios from "axios";
import { MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";

const AddResidence = ({setLocation, residence}) => {
  const [locationQuery, setLocationQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleLocationChange = async (e) => {
    const query = e.target.value;
    setLocationQuery(query);

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json&accept-language=en`,  { headers: { 'accept-language': 'en' } }
      );
      console.log(response);
      setSuggestions(response.data);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
    }
  };

  const handleSelectLocation = (suggestion) => {
    const country = suggestion.display_name.split(',').pop().trim();
  const locationName = suggestion.name;
    setLocation(`${locationName},${country}`)
    setLocationQuery(`${locationName},${country}`)
    setShowSuggestions(false);
  };

  return (
    <>
      <MDBRow className="align-items-center pt-4 pb-3">
        <MDBCol md="3" className="ps-5">
          <h6 className="mb-0">Location</h6>
        </MDBCol>

        <MDBCol md="9" className="pe-5">
          <MDBInput
            label="Enter location"
            size="lg"
            id="form2"
            name="price"
            value={locationQuery}
            type="text"
            onChange={handleLocationChange}
          />
         {showSuggestions && <ul style={{backgroundColor:"white", listStyleType:"none", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", margin:"0", paddingInline:"15px", paddingTop:"10px" }}>
            {suggestions.map((suggestion) => (
                <>
              <li
              className="mb-3"
                key={suggestion.place_id}
                onClick={() => handleSelectLocation(suggestion)}
              >
                {suggestion.display_name}
              </li>
              <hr />
              </>
            ))}
          </ul>}
        </MDBCol>
      </MDBRow>

      <hr className="mx-n3" />
    </>
  );
};

export default AddResidence;
