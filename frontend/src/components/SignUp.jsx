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
  MDBTooltip,
} from "mdb-react-ui-kit";

function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInput = (e) => {
    setShow(false);
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("https://real-estate-server-88bm.onrender.com/register", user, {
        withCredentials: true,
      });
      if (res.status === 200) {
        navigate("/login");
      }
    } catch (err) {
      console.log(err.response.data.msg);
      setError(err.response.data.msg);
      setShow(true);
    }
  };
  return (
    <div className="container fluid ">
      <MDBContainer fluid className=" p-5">
        <MDBRow className="g-0 align-items-center">
          <MDBCol col="6">
            <MDBCard
              className="my-1 cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <MDBCardBody className="p-5 shadow-5">
                <h2 className="fw-bold mb-5 text-center">Sign Up</h2>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Username"
                  id="form3"
                  type="username"
                  name="username"
                  size="lg"
                  value={user.username}
                  onChange={handleInput}
                />

                <MDBInput
                  wrapperClass="mb-2"
                  label="Email"
                  id="form3"
                  type="email"
                  value={user.email}
                  name="email"
                  size="lg"
                  onChange={handleInput}
                />
                <div className="d-flex justify-content-end">
                <MDBTooltip tag='a'  wrapperProps={{ href: '#' }} title="Password should be at least 6 characters"  >
                <MDBIcon fas icon="info-circle" color="secondary" className="text-right"/>
      </MDBTooltip>
      </div>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                  name="password"
                  size="lg"
                  value={user.password}
                  onChange={handleInput}
                />
                {show && (
                  <div
                    className="mb-4"
                    style={{
                      color: "red",
                      backgroundColor: "#f9e1e5",
                      color: "#af233a",
                      borderRadius: "5px",
                      textAlign: "left",
                      padding: "0.8rem",
                    }}
                  >
                    <MDBIcon fas icon="times" className="me-2" />
                    {error}
                  </div>
                )}
                <div className="d-flex justify-content-flex-start text-left">
                  <p>
                    Already have an account?{" "}
                    <a
                      href="/login"
                      style={{
                        color: "#2d9ee0",
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: "900",
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
              className="w-100 rounded-4 shadow-4"
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
