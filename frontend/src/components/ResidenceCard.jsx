import React, {  useState } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResidenceCard = ({
  residence,
  deleteResidence,
  handleDeleteAlert,
  fetchData,
  show,
  editMode,
  finishEdit,
  handleEditMode,
  handleShow,
}) => {
  const { _id, name, category, description, image, price, location } =
    residence;
    
  const [favouriteRes, setFavouriteRes] = useState();
  const [currentUser, setCurrentUser] = useState(null);

const navigate = useNavigate()

  const handleFavorite = async () => {
    setFavouriteRes(prev => !favouriteRes)
  };

  return (
    <>
      <MDBCard className="mb-4" style={{ height: "600px" }}>
        <div
          style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <div style={{ position: "relative", flex: "1" }}>
            <MDBCardImage
              overlay
              src={image}
              alt={name}
              position="top"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <MDBCardOverlay
              style={{
                textAlign: "right",
                color: "black",
                fontSize: "1.3rem",
                fontWeight: "900",
                textAlign: "right",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ cursor: "pointer" }}>
                {favouriteRes ? (
                  <MDBIcon
                    fas
                    icon="heart"
                    style={{ color: "white" }}
                    onClick={handleFavorite}
                  />
                ) : (
                  <MDBIcon
                    far
                    icon="heart"
                    style={{ color: "white" }}
                    onClick={handleFavorite}
                  />
                )}
              </div>
              <div>
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
              </div>
            </MDBCardOverlay>
          </div>
          <MDBCardBody
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <MDBCardTitle style={{ fontSize: "1.3rem", fontWeight: "900" }}>
              {name}
            </MDBCardTitle>
            <hr
              style={{
                position: "absolute",
                top: "375px",
                left: 0,
                width: "100%",
                color: "#8e9096",
              }}
            />
            <MDBCardText>
              <MDBAccordion flush>
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle="Description"
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    position: "absolute",
                    top: "400px",
                  }}
                >
                  <span
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    {description}
                  </span>
                </MDBAccordionItem>
              </MDBAccordion>
            </MDBCardText>
            <MDBCardText className="text-muted small">
              <MDBIcon fas icon="map-marker-alt" /> {location}
            </MDBCardText>
          </MDBCardBody>
        </div>
        <MDBCardFooter
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <small style={{ color: "#bec2cc" }}>{category}</small>
          <div className="exercise-actions">
            <MDBBtn
              tag="a"
              onClick={() => handleEditMode(residence)}
              color="none"
              style={{ color: "#757575" }}
            >
              <MDBIcon fas icon="pen" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              className="ms-3"
              onClick={() => handleShow(_id)}
              color="none"
              style={{ color: "#757575" }}
            >
              <MDBIcon fas icon="trash" />
            </MDBBtn>
          </div>
        </MDBCardFooter>
      </MDBCard>
    </>
  );
};

export default ResidenceCard;
