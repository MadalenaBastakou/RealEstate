import React, { useEffect } from "react";
import "../css/SignUp.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile,
  MDBRadio,
} from "mdb-react-ui-kit";
import AddLocation from "./AddLocation"

const EditResidence = ({
  residence,
  residenceId,
  editMode,
  finishEdit,
  fetchData,
  residenceToUpdate,
}) => {
  const [name, setName] = useState(residenceToUpdate.name);
  const [price, setPrice] = useState(residenceToUpdate.price);
  const [description, setDescription] = useState(residenceToUpdate.description);
  const [category, setCategory] = useState(residenceToUpdate.category);
  const [location, setLocation] = useState(residenceToUpdate.location);
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const [loadTime, setLoadTime] = useState(0);
  const [locationQuery, setLocationQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false)
  // get all the selected residence data before the user starts making any kind of change
  useEffect(() => {
    axios
      .get(`http://localhost:3001/residences/${residenceToUpdate._id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setName(res.data.name);
        setPrice(res.data.price);
        setDescription(res.data.description);
        setCategory(res.data.category);
        setLocationQuery(res.data.location);
        setImageUrl(res.data.image);
      })
      .catch((err) => console.log(err));
  }, []);
  // image change handler
  const handleImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);

    const startTime = performance.now(); // Record start time
    try {
      const res = await axios.post("http://localhost:3001/upload", formData, {
        withCredentials: true,
      });
      setImageUrl(res.data.path);
      console.log(imageUrl);
    } catch (err) {
      console.error("Error uploading image:", err);
    } finally {
      const endTime = performance.now();
      setLoadTime(endTime - startTime);
      setLoading(false);
    }
    navigate("/residences");
  };
  // updated residence data handler, request to the backend
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:3001/residences/${residenceToUpdate._id}`,
        {
          name: name,
          price: price,
          description: description,
          category: category,
          location: location,
          image: imageUrl,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.updated) {
          fetchData();
          finishEdit();
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };
  // location changes handler
  const handleLocationChange = async (e) => {
    const query = e.target.value;
    setLocationQuery(query);
    setShowSuggestions(true);

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json&accept-language=en`, { headers: { 'accept-language': 'en' } }
      );
      setSuggestions(response.data);
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
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="9" className="my-5">
          <MDBCard>
            <MDBCardBody className="px-4">
              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Residence Name</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput
                    label="Residence name"
                    size="lg"
                    id="form1"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Price</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput
                    label="Price"
                    size="lg"
                    id="form2"
                    name="price"
                    value={price}
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />
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
                  {showSuggestions && <ul style={{ backgroundColor: "white", listStyleType: "none", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", margin: "0", paddingInline: "15px", paddingTop: "10px" }}>
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
              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Category</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBRadio
                    onChange={(e) => setCategory(e.target.value)}
                    id="inlineRadio1"
                    value="for Rent"
                    name="category"
                    checked={category === "for Rent" ? true : false}
                    label="For Rent"
                    inline
                  />
                  <MDBRadio
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    id="inlineRadio2"
                    name="category"
                    value="for Sale"
                    checked={category === "for Sale" ? true : false}
                    label="For Sale"
                    inline
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />
              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Description</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBTextArea
                    label="Description"
                    id="textAreaExample"
                    name="description"
                    value={description}
                    rows={3}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Change Image</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBFile size="lg" id="customFile" onChange={handleImage} />
                  <div className="small text-muted mt-2">
                    Upload an image of your residence. Max file size 50 MB
                  </div>
                  <div>{loading && <BarLoader color="#2d9ee0" />}</div>
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBBtn
                className="my-4 me-3"
                size="lg"
                style={{ backgroundColor: "#f78864" }}
                onClick={handleSubmit}
              >
                Update
              </MDBBtn>
              <MDBBtn
                className="my-4"
                size="lg"
                style={{ backgroundColor: "#f78864" }}
                onClick={finishEdit}
              >
                Cancel
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default EditResidence;
