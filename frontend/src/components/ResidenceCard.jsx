import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConfirmationDeleteModal from "./ConfirmationDeleteModal";
import EditResidence from "./EditResidence";

const ResidenceCard = ({ residence, deleteResidence, handleDeleteAlert, fetchData }) => {
  const { _id, name, category, description, image, price } = residence;
  // handle the confirmation delete modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  //handle edit residence
  const [editMode, setEditMode] = useState(false);
  const finishEdit = () => setEditMode(false);

  return (
    <>
    {show && (
        <ConfirmationDeleteModal
          residence={residence}
          show={show}
          handleClose={handleClose}
          deleteResidence={deleteResidence}
        />
      )}

    {editMode && <EditResidence show={editMode} residence={residence} finishEdit={finishEdit} fetchData={fetchData}/>}
    <div className="exercise-card">
      <img src={image} alt={name} className="exercise-image" />
      <div className="exercise-details">
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{price}</p>
        <p>{description}</p>
      </div>
      <div className="exercise-actions">
        <button className="btn-link"
          onClick={() => setEditMode(true)}>
            Edit
        </button>
        <button
          className="btn-link"
          onClick={() => setShow(true)}
        >
          Delete
        </button>
      </div>
    </div>
    
    </>
    
  );
};

export default ResidenceCard;
