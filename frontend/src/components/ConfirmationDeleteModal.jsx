import React from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBModalContent,
    MDBModalDialog,
  } from 'mdb-react-ui-kit';
  import "../css/Residences.css";

  // ask for the user's confirmation before finalizing the delete request
function ConfirmationDeleteModal({residenceId, show, handleClose, deleteResidence,deleteId}) {
    return (
      <>
        <MDBModal open={show} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Delete a residence</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={handleClose}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Are you sure you want to delete this residence?</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' style={{backgroundColor: "#FF725E", color:"white"}} onClick={() => deleteResidence(deleteId)}>
               Yes
              </MDBBtn>
              <MDBBtn color="secondary" style={{ color:"white"}} onClick={handleClose}>No</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </>
    );
  }

  export default ConfirmationDeleteModal;