import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

function RequireAuth(props) {
  const [loggedIn, setLoggedIn] = useState(null);

  const navigate =useNavigate();

  const checkAuth = async () => {
    axios
      .get("http://localhost:3001/verify", { withCredentials: true })
      .then(({data}) => {
        console.log (data);
        if (data.message === "User is not valid") {
          setLoggedIn(false);
          navigate("/login")
        } else setLoggedIn(true);
      })

};

useEffect(() => {
  if (loggedIn === null) {
    checkAuth();
  }
}, []);

if (loggedIn === null) {
  return <div>Loading...</div>;
}

// if (loggedIn === false) {
//   navigate("/login");
// }

return <div>{props.children}</div>;
}

export default RequireAuth;
