import React from "react";
import "../css/SignUp.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3001/register", user, {
      withCredentials: true,
    });
    // console.log(res.data.message);
    // console.log(res.status);
    if (res.status === 200) {
      navigate("/login");
    }
  };

  return (
    <div className="athlete-form-container">
      <form className="athlete-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="roll">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleInput}
          />
        </div>
        <button type="submit" className="btn-register">
          Sign UP
        </button>
      </form>
    </div>
  );
};

export default SignUp;
