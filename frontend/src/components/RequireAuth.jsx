import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";

function RequireAuth(props) {
  const [loggedIn, setLoggedIn] = useState(null);


  const checkAuth = async () => {
    try {
      await axios.get("http://localhost:3001/verify", { withCredentials: true });
      setLoggedIn(true);
    } catch (err) {
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    if (loggedIn === null) {
      checkAuth();
    }
  }, []);

  if (loggedIn === null) {
    return <div>Loading...</div>;
  }

  if (loggedIn === false) {
    return <Navigate to="/login" />;
  }

  return <div>{props.children}</div>;
}

export default RequireAuth;
