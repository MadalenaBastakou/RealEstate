import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  // logout the user, request to the backend
  useEffect(() => {
    const logout = async () => {
      const res = await axios.get("https://real-estate-server-88bm.onrender.com/logout")

      // if(res.status === 200) {
      //   navigate('/login')
      // }
    }
    logout()
  }, []);
};

export default Logout;
