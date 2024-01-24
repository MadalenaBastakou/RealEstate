import React from "react";
import "../css/SignUp.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user/register", {
        username: username,
        email: email,
        password: password,
      })
      .then(({ data }) => {
        console.log(data);
        if (data.msg === "user created successfully") {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
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
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="roll">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
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
