// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../css/Login.css";
// import axios from "axios";

// const Login = () => {
//   const [user, setUser] = useState({
//     username: "",
//     password: ""
//   })

//   const navigate = useNavigate();

//   const handleInput = (e) => {
//     const {name, value} = e.target
//     setUser((prevUser )=> ({...prevUser, [name]: value}))
//   }

//   const handleSubmit = async () => {
//     try{
//       const res = await axios.post("http://localhost:3001/login", user, {withCredentials:true})
//       if(res.status === 200) {
//        navigate("/");
//       }
//     } catch(err) {
//       console.error("Login failed", err)
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2>Login</h2>
//         <div className="form-group">
//           <label htmlFor="username">Username :</label>
//           <input
//             type="text"
//             placeholder="Enter Username"
//             name="username"
//             value={user.username}
//             onChange={handleInput}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password :</label>
//           <input
//             type="password"
//             placeholder="Enter Password"
//             name="password"
//             value={user.password}
//             onChange={handleInput}
//           />
//         </div>
//         <button className="btn-login" onClick={handleSubmit}>
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;
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

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3001/login", user, {
        withCredentials: true,
      });
      if (res.status === 200) {
        navigate("/");
      }
    } catch (err) {
      console.error("Login failed", err);
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
              value={user.username}
              type="username"
              onChange={handleInput}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              name="password"
              value={user.password}
              type="password"
              onChange={handleInput}
            />
            <div className="d-flex justify-content-flex-start text-left">
              <p>
                Don't have an account yet?{" "}
                <a
                href="/register"
                  style={{
                    textDecoration: "underline",
                    color: "#2d9ee0",
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "900",
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
