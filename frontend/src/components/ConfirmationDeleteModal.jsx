import React from 'react';
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

function ConfirmationDeleteModal({residence, show, handleClose, deleteResidence}) {
    return (
      <>
        <MDBModal id="modal" open={show} onHide={handleClose} animation={false}>
            <MDBModalHeader closeButton >
              <MDBModalTitle>Delete a residence</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={handleClose}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Are you sure you want to delete this residence?</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" style={{backgroundColor: "#FF725E"}} onClick={() => deleteResidence(residence._id)}>
                Yes
              </MDBBtn>
              <MDBBtn color="secondary" onClick={handleClose}>
                No
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
      </>
    );
  }

  export default ConfirmationDeleteModal;