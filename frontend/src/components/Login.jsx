import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/auth/login", {
        username: username,
        password: password,
      })
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-login" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
