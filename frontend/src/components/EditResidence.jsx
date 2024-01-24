import React, { useEffect } from "react";
import "../css/SignUp.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditResidence = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3001/residence/residence/" + id)
      .then((res) => {
        setName(res.data.name);
        setPrice(res.data.price);
        setDescription(res.data.description);
        setImageUrl(res.data.imageUrl);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/residence/residence/" + id, {
        name,
        price,
        description,
        imageUrl,
      })
      .then((res) => {
        if (res.data.updated) {
          navigate("/residences");
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="athlete-form-container">
      <form className="athlete-form" onSubmit={handleSubmit}>
        <h2>Edit Residence</h2>
        <div className="form-group">
          <label htmlFor="residence">Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Price :</label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description :</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL :</label>
          <input
            type="text"
            id="image"
            name="image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-register">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditResidence;
