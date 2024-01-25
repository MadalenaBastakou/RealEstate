import React from "react";
import "../css/SignUp.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddResidence = () => {
  const [residence, setResidence] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [fileData, setFileData] = useState();


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{

      const formData = new FormData();
      formData.append("image", fileData);
      formData.append("name", residence.name);
      formData.append("price", residence.price);
      formData.append("description", residence.description);
      const res = await axios.post("http://localhost:3001/residences/add", formData, {withCredentials:true});
      console.log(res);
    } catch(err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResidence({ ...residence, [name]: value });
  };

  const handleImage = (e) => {
    setFileData(e.target.files[0] );
  };


  const handleUpload = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("image", fileData);

    const res = await axios.post("http://localhost:3001/single", data, {
      withCredentials: true,
    });
    console.log(res);
  };


  return (
    <div className="athlete-form-container">
      <form className="athlete-form" onSubmit={handleSubmit}>
        <h2>Add Residence</h2>
        <div className="form-group">
          <label htmlFor="residence">Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={residence.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Price :</label>
          <input
            type="text"
            id="price"
            name="price"
            value={residence.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description :</label>
          <input
            type="text"
            id="description"
            name="description"
            value={residence.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL :</label>
        {/* <img
          src={`http://localhost:3001/public/images/${residence.image}`}
          alt="Residence"
          style={{ maxWidth: "100%" }}
        /> */}
          <input type="file" name="image" onChange={handleImage} accept="image/*" />
          <button onClick={handleUpload}>Upload</button>
        </div>


        <button type="submit" className="btn-register">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddResidence;
