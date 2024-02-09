import axios from "axios";
import  { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// delete the selected residence request
const DeleteResidence = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .delete("https://real-estate-server-88bm.onrender.com/residence/residence/" + id)
      .then((res) => {
        if (res.data.deleted) {
          navigate("/residences");
        }
      })
      .catch((err) => console.log(err));
  }, []);
};

export default DeleteResidence;
