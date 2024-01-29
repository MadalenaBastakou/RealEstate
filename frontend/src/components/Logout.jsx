import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async() => {
      const res = await axios.get("http://localhost:3001/logout")

      // if(res.status === 200) {
      //   navigate('/login')
      // }
    }
  logout()
  }, []);
};

export default Logout;
