import React, { useState } from "react";

import ConfirmationDeleteModal from "./ConfirmationDeleteModal";
import EditResidence from "./EditResidence";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardOverlay,
  MDBCardText,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";

const ResidenceCard = ({
  residence,
  deleteResidence,
  handleDeleteAlert,
  fetchData,
  show,
  editMode,
  finishEdit,
  handleEditMode,
  handleShow
}) => {
  const { _id, name, category, description, image, price, location } = residence;
  // handle the confirmation delete modal
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  //handle edit residence
  // const [editMode, setEditMode] = useState(false);
  // const finishEdit = () => setEditMode(false);

  return (
    <>
      {/* {show && (
        <ConfirmationDeleteModal
          residence={residence}
          show={show}
          handleClose={handleClose}
          deleteResidence={deleteResidence}
        />
      )}

      {editMode && (
        <EditResidence
          show={editMode}
          residence={residence}
          finishEdit={finishEdit}
          fetchData={fetchData}
        />
      )} */}

<MDBCard className="mb-4" style={{height:"600px"}}>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ position: "relative", flex: "1" }}>
        <MDBCardImage
          overlay
          src={image}
          alt={name}
          position="top"
          style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}
        />
        <MDBCardOverlay
          style={{
            textAlign: "right",
            color: "black",
            fontSize: "1.3rem",
            fontWeight: "900",
            textAlign: "right",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              textAlign: "center",
              display: "inline",
              padding: "8px",
            }}
          >
            {price} €
          </div>
        </MDBCardOverlay>
</div>
<MDBCardBody style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <MDBCardTitle style={{ fontSize: "1.3rem", fontWeight: "900" }}>
            {name}
          </MDBCardTitle>
          <hr style={{  position:"absolute", top:"375px", left:0, width:"100%", color:"#8e9096" }} />
          <MDBCardText>
            <MDBAccordion flush  >
              <MDBAccordionItem collapseId={1} headerTitle="Description" style={{  backgroundColor:"white", position:"absolute", top:"400px"}}>
                {description}
              </MDBAccordionItem>
            </MDBAccordion>
            
          </MDBCardText>
          <MDBCardText className="text-muted small"  >
            <MDBIcon fas icon="map-marker-alt" /> {location}
            </MDBCardText>
        </MDBCardBody>
        </div>
        <MDBCardFooter style={{display:"flex", justifyContent:"space-between"}}>
          <small className="text-muted">{category}</small>
          <div className="exercise-actions">
        <MDBBtn tag="a"
          onClick={() => handleEditMode(residence)} color='none' style={{ color: '#d8dfeb' }}>
            <MDBIcon  fas icon="pen" />
        </MDBBtn>
        <MDBBtn
          tag="a" className="ms-3" onClick={() => handleShow(_id)} color='none' style={{ color: '#d8dfeb' }}
        >
          <MDBIcon fas icon="trash" />
        </MDBBtn>
      </div>
        </MDBCardFooter>
      </MDBCard>



{/* 
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
    </div> */}
    </>
  );
};

export default ResidenceCard;
