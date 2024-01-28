import React from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
  import "../css/Residences.css";

function ConfirmationDeleteModal({residenceId, show, handleClose, deleteResidence,deleteId}) {
    return (
      <>
        <MDBModal id="modal" open={show} onHide={handleClose}>
            <MDBModalHeader closeButton >
              <MDBModalTitle>Delete a residence</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={handleClose}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Are you sure you want to delete this residence?</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" style={{backgroundColor: "#FF725E", color:"white"}} onClick={() => deleteResidence(deleteId)}>
                Yes
              </MDBBtn>
              <MDBBtn color="secondary" style={{ color:"white"}} onClick={handleClose}>
                No
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
      </>
    );
  }

  export default ConfirmationDeleteModal;