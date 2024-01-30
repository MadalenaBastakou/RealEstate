
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  // save the user's input data to be sent to the backend
  const handleInput = (e) => {
    setShow(false)
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  // request with the user's data sent to the backed
  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3001/login", user, {
        withCredentials: true,
      });
      if (res.status === 200) {
        navigate("/");
      }
    } catch (err) {
      setError(err.response.data.msg);
      setShow(true)
    }
  };
  return (
    <div className="container p-5">
      <MDBContainer fluid>
        <div
          className="p-3 bg-image"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1629236714859-3a1ec2d8f6c3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundPosition: "0 90%",
            height: "400px",
          }}
        ></div>

        <MDBCard
          className="mx-auto mb-5 p-2 shadow-5"
          style={{
            marginTop: "-200px",
            maxWidth: "800px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <MDBCardBody className="p-5 text-center">
            <h2 className="fw-bold mb-5">Login</h2>

            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              name="username"
              id="form1"
              type="username"
              size="lg"
              onChange={handleInput}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              name="password"
              type="password"
              size="lg"
              onChange={handleInput}
            />
            {show && <div
              className="mb-4"
              style={{
                color: "red",
                backgroundColor: "#f9e1e5",
                color: "#af233a",
                borderRadius: "5px",
                textAlign: "left",
                padding: "0.8rem"
              }}
            >
              <MDBIcon fas icon="times" className="me-2" />{error}
            </div>}
            <div className="d-flex justify-content-flex-start text-left">
              <p>
                Don't have an account yet?{" "}
                <a
                  href="/register"
                  style={{

                    color: "#2d9ee0",
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: "900",
                    cursor: "pointer",
                  }}
                >
                  Sign Up
                </a>
              </p>
            </div>

            <MDBBtn
              className="w-100 mb-4"
              size="md"
              style={{ backgroundColor: "#f78864" }}
              onClick={handleSubmit}
            >
              log in
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Login;
