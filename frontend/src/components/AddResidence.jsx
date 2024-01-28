// import React from "react";
// import "../css/SignUp.css";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import BarLoader from "react-spinners/BarLoader";

// const AddResidence = () => {
//   const [residence, setResidence] = useState({
//     name: "",
//     description: "",
//     category:"",
//     price: "",
//     image: "",
//   });
//   const [file, setFile] = useState();
//   const [loading, setLoading] = useState(false);
//   const [loadTime, setLoadTime] = useState(0);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:3001/residences/add",
//         residence,
//         { withCredentials: true }
//       );
//       if (res.status === 200) {
//         navigate("/residences");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setResidence({ ...residence, [name]: value });
//   };

//   const handleImage = async (e) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append("image", file);

//     setLoading(true);

//     const startTime = performance.now(); // Record start time
//     try {
//       const res = await axios.post("http://localhost:3001/upload", formData, {
//         withCredentials: true,
//       });
//       setResidence({ ...residence, image: res.data.path });
//     } catch (err) {
//       console.error("Error uploading image:", err);
//     } finally {
//       const endTime = performance.now();
//       setLoadTime(endTime - startTime);
//       setLoading(false);
//     }
//   };

// console.log(residence);

//   return (
//     <div className="athlete-form-container">
//       <form className="athlete-form" onSubmit={handleSubmit}>
//         <h2>Add Residence</h2>
//         <div className="form-group">
//           <label htmlFor="residence">Name :</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={residence.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="Category">Category</label>
//           <select name="category" id="category" onChange={handleChange}>
//             <option value="forRent">Select category</option>
//             <option value="forRent">For Rent</option>
//             <option value="forSale">For Sale</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Price :</label>
//           <input
//             type="text"
//             id="price"
//             name="price"
//             value={residence.price}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Description :</label>
//           <input
//             type="text"
//             id="description"
//             name="description"
//             value={residence.description}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="image">Image URL :</label>
//           <div>{loading && <BarLoader color="#36d7b7" />}</div>
//           {/* <img src={residence.image} alt="Uploaded" style={{ width: "120px", height: "120px", objectFit: "contain" }} /> */}
//           <input
//             type="file"
//             name="image"
//             onChange={handleImage}
//             accept="image/*"
//           />
//         </div>
//         <button type="submit" className="btn-register">
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddResidence;

import React from 'react';
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
  MDBBtnGroup
}
from 'mdb-react-ui-kit';

function AddResidence() {
  const [residence, setResidence] = useState({
        name: "",
        description: "",
        category:"forRent",
        price: "",
        image: "",
      });
      const [file, setFile] = useState();
      const [loading, setLoading] = useState(false);
      const [loadTime, setLoadTime] = useState(0);
    
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
            navigate("/residences");
          }
        } catch (err) {
          console.log(err);
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setResidence({ ...residence, [name]: value });
      };
    
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
          setResidence({ ...residence, image: res.data.path });
        } catch (err) {
          console.error("Error uploading image:", err);
        } finally {
          const endTime = performance.now();
          setLoadTime(endTime - startTime);
          setLoading(false);
        }
      };

      console.log(residence);
    
  return (
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
                  <MDBInput label='Residence name' size='lg' id='form1' name="name" type='text' value={residence.name} onChange={handleChange}/>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Price</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBInput label='Price' size='lg' id='form2' name="price" value={residence.price} type='text' onChange={handleChange}/>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />
              <MDBRow className='align-items-center pt-4 pb-3'>

<MDBCol md='3' className='ps-5'>
  <h6 className="mb-0">Category</h6>
</MDBCol>

<MDBCol md='9' className='pe-5'>


<MDBRadio  onChange={handleChange} id='inlineRadio1' value='forRent' name="category" label='For Rent' inline defaultChecked />
      <MDBRadio onChange={handleChange} id='inlineRadio2' name="category" value='forSale' label='For Sale' inline />

</MDBCol>

</MDBRow>

<hr className="mx-n3" />
              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Description</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBTextArea label='Description' id='textAreaExample' name="description" value={residence.description }rows={3} onChange={handleChange}/>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Upload Image</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBFile size='lg' id='customFile' onChange={handleImage}/>
                  <div className="small text-muted mt-2">Upload an image of your residence. Max file size 50 MB</div>
                  <div>{loading && <BarLoader color="#2d9ee0" />}</div>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBBtn className='my-4' size='lg'  style={{ backgroundColor: "#f78864" }} onClick={handleSubmit}>add residence</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default AddResidence;
