import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RequireAuth(props) {
  const [loggedIn, setLoggedIn] = useState(null);

  const navigate =useNavigate();

  const checkAuth = async () => {
    axios
      .get("https://real-estate-server-88bm.onrender.com/verify", { withCredentials: true })
      .then(({data}) => {
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


return <div>{props.children}</div>;
}

export default RequireAuth;
