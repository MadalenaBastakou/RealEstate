import React from "react";
import { useState } from "react";
import axios from "axios";
import BarLoader from "react-spinners/BarLoader";
import { useNavigate } from "react-router-dom";
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
  MDBIcon,
} from "mdb-react-ui-kit";
import toast, { Toaster } from "react-hot-toast";


function AddResidence() {
  const [residence, setResidence] = useState({
    name: "",
    description: "",
    category: "for Rent",
    price: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [loadTime, setLoadTime] = useState(0);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/residences/add",
        residence,
        { withCredentials: true }
      );

      if (res.status === 200) {
        toast.success("Residence added successfully!");
        setTimeout(() => {
          navigate("/residences");
        }, 2000);
      }
    } catch (err) {
      setError(err.response.data.msg);
      setShow(true);
    }
  };

  const handleChange = (e) => {
    setShow(false);
    const { name, value } = e.target;
    if(name === "name" && value.length > 55){
      setError("The residence name exceeds the maximum character limit.")
      setShow(true);
    } else if(name==="price" && isNaN(value)){
      setError("Please enter a valid number for the price.")
      setShow(true);
  }else {
      setError("");
    setShow(false); 

    }
    setResidence({ ...residence, [name]: value });
  };

  console.log(error);

  const handleImage = async (e) => {
    setShow(false);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);

    const startTime = performance.now(); // Record start time
    try {
      const res = await axios.post("http://localhost:3001/upload", formData, {
        withCredentials: true,
      });
      setResidence({ ...residence, image: res.data.path });
    } catch (err) {
      console.error("Error uploading image:", err);
    } finally {
      const endTime = performance.now();
      setLoadTime(endTime - startTime);
      setLoading(false);
    }
  };

  return (
    <MDBContainer fluid>
    
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="9" className="my-5">
          <MDBCard>
            <MDBCardBody className="px-4">
              <MDBRow className="align-items-center pt-4 pb-3">
              <Toaster />
                {show && (
                  <div
                    className="mb-4"
                    style={{
                      color: "red",
                      backgroundColor: "#f9e1e5",
                      color: "#af233a",
                      borderRadius: "5px",
                      textAlign: "left",
                      padding: "0.8rem",
                    }}
                  >
                    <MDBIcon fas icon="times" className="me-2" />
                    {error}
                  </div>
                )}
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
                    value={residence.name}
                    onChange={handleChange}
                  />
                   <div className="small text-muted mt-2">
                   Please enter the name of the residence. The name should not exceed 55 characters.
                  </div>
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
                    value={residence.price}
                    type="text"
                    onChange={handleChange}
                  />
                  <div className="small text-muted mt-2">
                   Please enter amount in euro.
                  </div>
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />
              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Category</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBRadio
                    onChange={handleChange}
                    id="inlineRadio1"
                    value="for Rent"
                    name="category"
                    label="For Rent"
                    inline
                    defaultChecked
                  />
                  <MDBRadio
                    onChange={handleChange}
                    id="inlineRadio2"
                    name="category"
                    value="for Sale"
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
                    value={residence.description}
                    rows={3}
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Upload Image</h6>
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
                className="my-4"
                size="lg"
                style={{ backgroundColor: "#f78864" }}
                onClick={handleSubmit}
              >
                add residence
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default AddResidence;
