import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidenceCard from "./ResidenceCard";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "../css/Residences.css";
import toast, { Toaster } from "react-hot-toast";
import ConfirmationDeleteModal from "./ConfirmationDeleteModal";
import EditResidence from "./EditResidence";

const Residences = () => {
  const [residences, setResidences] = useState([]);
  // const [show, setShow] = useState(false);
  const [residenceId, setResidenceId] = useState("");
  const [residenceToUpdate, setResidenceToUpdate] = useState()
  
const [deleteId, setDeleteId] = useState()
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);


  const finishEdit = () => setEditMode(false);
  const handleClose = () => setShow(false);
  // const showAlert = () => setShow(true);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("http://localhost:3001/residences", { withCredentials: true })
      .then(({ data }) => {
        setResidences(data);
      });
  };

  // show delete confirmation box
  const handleDeleteAlert = (id) => {
    setResidenceId(id);
    // showAlert();
  };

  // handle delete residence
  const deleteResidence = async (id) => {
    await axios.delete(`http://localhost:3001/residences/${id}`, {
      withCredentials: true,
    });
    toast.success("Residence deleted successfully!", { duration: 1500 });
    fetchData();
  // showAlert()
  setShow(false)
    handleClose();
    handleDeleteAlert();
  };

  const handleEditMode = (residence) => {
    setResidenceToUpdate(residence)
    setEditMode(true)
  }

  const handleShow = (id) => {
    setDeleteId(id)
    setShow(true)
  }

  return (
    <MDBContainer>
        {show && (
               <ConfirmationDeleteModal
                 residenceId={residenceId}
                 show={show}
                 handleClose={handleClose}
                 deleteResidence={deleteResidence}
                 deleteId={deleteId}
               />
             )}
       
             {editMode && (
               <EditResidence
                 show={editMode}
                 residenceId={residenceId}
                 finishEdit={finishEdit}
                 fetchData={fetchData}
                 residenceToUpdate={residenceToUpdate}
               />
             )}
      <MDBRow className='mt-3'>
        <Toaster />
        {residences.map((residence, index) => {
          
          return (
            <MDBCol md='3'>
            <ResidenceCard
              key={residence._id}
              residence={residence}
              deleteResidence={deleteResidence}
              handleDeleteAlert={handleDeleteAlert}
              fetchData={fetchData}
              show={show}
              editMode={editMode}
              finishEdit={finishEdit}
              handleEditMode={handleEditMode}
              handleShow={handleShow}
            ></ResidenceCard>
        </MDBCol>
          );
        })}
        </MDBRow>
        </MDBContainer>
   
  );
};

export default Residences;
