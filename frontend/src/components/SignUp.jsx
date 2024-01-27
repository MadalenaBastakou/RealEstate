// import React from "react";
// import "../css/SignUp.css";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await axios.post("http://localhost:3001/register", user, {
//       withCredentials: true,
//     });
//     // console.log(res.data.message);
//     // console.log(res.status);
//     if (res.status === 200) {
//       navigate("/login");
//     }
//   };

//   return (
//     <div className="athlete-form-container">
//       <form className="athlete-form" onSubmit={handleSubmit}>
//         <h2>Sign Up</h2>
//         <div className="form-group">
//           <label htmlFor="username">Username :</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={user.username}
//             onChange={handleInput}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="roll">Email :</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={user.email}
//             onChange={handleInput}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password :</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={user.password}
//             onChange={handleInput}
//           />
//         </div>
//         <button type="submit" className="btn-register">
//           Sign UP
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/SignUp.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function SignUp() {
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
    <div className="container fluid ">
      <MDBContainer fluid className=" p-5" >
        <MDBRow className="g-0 align-items-center" >
          <MDBCol col="6">
            <MDBCard
              className="my-1 cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <MDBCardBody className="p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Sign Up</h2>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Username"
                  id="form3"
                  type="username"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form3"
                  type="email"
                  value={user.email}
                  name="email"
                  onChange={handleInput}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
 <div className="d-flex justify-content-flex-start text-left">
              <p>
                Already have an account?{" "}
                <a
                href="/login"
                  style={{
                    textDecoration: "underline",
                    color: "#2d9ee0",
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "900",
                    cursor: "pointer",
                  }}
                >
                 Log In
                </a>
              </p>
            </div>

                <MDBBtn
                  className="w-100 mb-4"
                  size="md"
                  style={{ backgroundColor: "#f78864" }}
                  onClick={handleSubmit}
                >
                  sign up
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol col="6">
            <img
              src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="w-100 rounded-4 shadow-4"
              alt=""
              style={{ maxHeight: "80vh" }}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default SignUp;
