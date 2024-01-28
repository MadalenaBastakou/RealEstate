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
  MDBBtnGroup
}
from 'mdb-react-ui-kit';

const EditResidence = ({residence, editMode, finishEdit, fetchData}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const [loadTime, setLoadTime] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/residences/${residence._id}`, { withCredentials: true })
      .then((res) => {
        setName(res.data.name);
        setPrice(res.data.price);
        setDescription(res.data.description);
        setImageUrl(res.data.image);
      })
      .catch((err) => console.log(err));
  }, []);

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
    } catch (err) {
      console.error("Error uploading image:", err);
    } finally {
      const endTime = performance.now();
      setLoadTime(endTime - startTime);
      setLoading(false);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/residences/${residence._id}`, {
        name: name,
        price: price,
        description: description,
        image: imageUrl,
      }, { withCredentials: true } )
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

  return (
  //  <div className="athlete-form-container" show={editMode}>
  //     <form className="athlete-form" onSubmit={handleSubmit}>
  //       <h2>Edit Residence</h2>
  //       <div className="form-group">
  //         <label htmlFor="residence">Name :</label>
  //         <input
  //           type="text"
  //           id="name"
  //           name="name"
  //           value={name}
  //           onChange={(e) => setName(e.target.value)}
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="description">Price :</label>
  //         <input
  //           type="text"
  //           id="price"
  //           name="price"
  //           value={price}
  //           onChange={(e) => setPrice(e.target.value)}
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="description">Description :</label>
  //         <input
  //           type="text"
  //           id="description"
  //           name="description"
  //           value={description}
  //           onChange={(e) => setDescription(e.target.value)}
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="image">Image URL :</label>
  //         <input
  //           type="text"
  //           id="image"
  //           name="image"
  //           value={imageUrl}
  //           onChange={(e) => setImageUrl(e.target.value)}
  //         />
  //       </div>
  //       <button type="submit" className="btn-register" onClick={(e)=> handleSubmit(e)}>
  //         Update
  //       </button>
  //       <button className="btn-register" onClick={finishEdit}>
  //         Cancel
  //       </button>
  //     </form>
  //   </div>
  <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center'>
        <MDBCol lg='9' className='my-5'>

          <MDBCard>
            <MDBCardBody className='px-4'>

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Residence Name</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBInput label='Residence name' size='lg' id='form1' name="name" type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Price</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBInput label='Price' size='lg' id='form2' name="price" value={price} type='text' onChange={(e) => setPrice(e.target.value)}/>
                </MDBCol>

              </MDBRow>

<hr className="mx-n3" />
              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Description</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBTextArea label='Description' id='textAreaExample' name="description" value={residence.description }rows={3} onChange={(e) => setDescription(e.target.value)}/>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Change Image</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBFile size='lg' id='customFile' onChange={handleImage}/>
                  <div className="small text-muted mt-2">Upload an image of your residence. Max file size 50 MB</div>
                  <div>{loading && <BarLoader color="#2d9ee0" />}</div>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBBtn className='my-4' size='lg'  style={{ backgroundColor: "#f78864" }} onClick={handleSubmit}>Update</MDBBtn>
              <MDBBtn className='my-4' size='lg'  style={{ backgroundColor: "#f78864" }} onClick={finishEdit}>Cancel</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
};

export default EditResidence;
