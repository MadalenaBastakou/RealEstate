import React, { useState } from "react";
import {
  MDBAccordion,
  MDBDrawer,
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
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader,
  MDBCollapse,
} from "mdb-react-ui-kit";
import axios from "axios";

const ResidenceCardsAll = ({ residence }) => {
  const { _id, name, category, description, image, price, location } =
    residence;
  const [contactEmail, setContactEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleContact = async (residence) => {
    const res = await axios.get(
      `http://localhost:3001/residences/${residence._id}`
    );
    const user = await axios.get(
      `http://localhost:3001/users/${res.data.user}`
    );
    setContactEmail(user.data.email);
    setIsOpen((prev) => !prev);
  };

  const toggleOpen = () => setIsOpen(!isOpen);

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
                    backgroundColor: "white",
                    position: "absolute",
                    top: "400px",
                  }}
                >
                  {description}
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
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleContact(residence)}
            >
              <MDBIcon
                tag="a"
                color="none"
                style={{ color: "#757575" }}
                fas
                icon="envelope"
              />
            </div>
            {/* <div style={{ backgroundColor:"none", cursor: "pointer" }}>
              <MDBPopover
                style={{ backgroundColor: "none", border: "none" }}
                size="lg"
                color="none"
                placement="right"
                btnChildren={
                  <MDBIcon
                    tag="a"
                    onClick={() => handleContact(residence)}
                    color="none"
                    style={{ backgroundColor: "none", color: "#d8dfeb", padding: 0 }}
                    fas
                    icon="envelope"
                  />
                }
              >
                <MDBPopoverHeader text="secondary small">
                  Contact email
                </MDBPopoverHeader>
                <MDBPopoverBody>{contactEmail}</MDBPopoverBody>
              </MDBPopover>
            </div> */}
          </div>
        </MDBCardFooter>
        <MDBCollapse
          open={isOpen}
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f1f3f4",
            borderRadiusBottomRight: "10px",
            borderRadiusBotttomLeft: "10px",
          }}
        >
          {isOpen && (
            <>
              <span
                backgroundColor="secondary"
                className="small mx-2 my-1"
                style={{ color: "#878d8d" }}
              >
                Contact Email
              </span>

              <div className="mx-2">{contactEmail}</div>
            </>
          )}
        </MDBCollapse>
      </MDBCard>
    </>
  );
};

export default ResidenceCardsAll;
