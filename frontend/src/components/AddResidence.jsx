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
    image: "",
  });

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", residence.image);
  //   formData.append("name", residence.name);
  //   formData.append("price", residence.price);
  //   formData.append("description", residence.description);

  //   console.log(residence.image);

  //   const res = await axios.post("http://localhost:3001/upload", formData);
  //   setImageUrl(`http://localhost:3001/public/images/${res.data.filename}`);
  //   console.log(res);
  // };

  const handleSubmit = async(e) => {
e.preventDefault()
const {name, description, price} = e.target
const res = await axios.post("http://localhost:3001/residences/add", residence, {withCredentials:true})
console.log(res);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResidence({ ...residence, [name]: value });
  };

  // const handleImage = (e) => {
  //   console.log(e.target.files);
  //   setResidence({ ...residence, image: e.target.files[0] });
  //   console.log(residence.image);
  // };

  return (
    <div className="athlete-form-container">
      <form className="athlete-form" onSubmit={handleSubmit} >
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
          <input type="file" accept="image/*" />
          <button >Upload</button>
        </div>

        {/* <img
          src={`http://localhost:3001/images/${imageName}`}
          alt="Residence"
          style={{ maxWidth: "100%" }}
        /> */}

        <button type="submit" className="btn-register">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddResidence;
