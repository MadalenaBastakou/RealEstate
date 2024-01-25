import React from "react";
import "../css/SignUp.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddResidence = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3001/residence/add", {
  //       name: name,
  //       price: price,
  //       description: description,
  //       imageUrl: imageUrl,
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       navigate("/Residences");
  //     })
  //     // .then((res) => {
  //     //   if (res.data.added) {
  //     //     navigate("/Residences");
  //     //   } else {
  //     //     console.log(res);
  //     //   }
  //     // })
  //     .catch((err) => console.log(err));
  // };

const handleUpload = (e) => {
  e.preventDefault()
  console.log(image);
}

  return (
    <div className="athlete-form-container">
      <form className="athlete-form" >
        <h2>Add Residence</h2>
        <div className="form-group">
          <label htmlFor="residence">Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Price :</label>
          <input
            type="text"
            id="price"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description :</label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL :</label>
          <input type="file" onChange={e => setImage(e.target.files[0])}/>
          <button onClick={handleUpload}>Upload</button>
          {/* <input
            type="text"
            id="image"
            name="image"
            onChange={(e) => setImageUrl(e.target.value)}
          /> */}
        </div>
        <button type="submit" className="btn-register">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddResidence;
