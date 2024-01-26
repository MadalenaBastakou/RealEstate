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
    image:""
  });



  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:3001/residences/add", residence, {withCredentials:true});
      setResidence({
        name: "",
        description: "",
        price: "",
        image:""
      })
      if(res.status === 200) {
navigate("/residences")
      }
    } catch(err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResidence({ ...residence, [name]: value });
  };

  const handleImage = (e) => {
   const file = e.target.files[0]
   setFileToBase(file)
  };

  const setFileToBase = (file) => {
const reader = new FileReader()
reader.readAsDataURL(file)
reader.onloadend = () => {
  setResidence({...residence, image: reader.result})
}
  }

console.log(residence);
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
          <img src={residence.image} alt="Uploaded" style={{ width: "120px", height: "120px", objectFit: "contain" }} />
          <input type="file" name="image" onChange={handleImage} accept="image/*" />
        </div>
        <button type="submit" className="btn-register">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddResidence;
