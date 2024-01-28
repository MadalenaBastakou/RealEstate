import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidenceCard from "./ResidenceCard";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import "../css/Residences.css";

const Residences = () => {
  const [residences, setResidences] = useState([]);
  const [show, setShow] = useState(false);
  const [residenceId, setResidenceId] = useState("");
  const handleClose = () => setShow(false);
  const showAlert = () => setShow(true);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    axios
      .get("http://localhost:3001/residences", { withCredentials: true })
      .then(({ data }) => {
        setResidences(data);
      })
  }

  // show delete confirmation box
  const handleDeleteAlert = (id) => {
    setResidenceId(id);
    showAlert();
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  // handle delete residence
  const deleteResidence = async (id) => {
    await axios.delete(`http://localhost:3001/residences/${id}`, {
      withCredentials: true,
    });
    fetchData();
    handleClose();
    handleDeleteAlert();
  };

  return (
    <div className="exercise-page">
      <div className="exercise-list">
        {show && (
          <MDBModal open={show} tabIndex='-1'>
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Delete confirmation</MDBModalTitle>
                </MDBModalHeader>
                <MDBModalBody>Deleted successfully</MDBModalBody>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        )}
        {residences.map((residence, index) => {
          return (
              <ResidenceCard
                key={residence._id}
                residence={residence}
                deleteResidence={deleteResidence}
                handleDeleteAlert={handleDeleteAlert}
                fetchData={fetchData}
              ></ResidenceCard>
          );
        })}
      </div>
    </div>
  );
};

export default Residences;
