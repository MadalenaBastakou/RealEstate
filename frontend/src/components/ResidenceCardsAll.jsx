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
import "../css/Residences.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const ResidenceCardsAll = ({ residence }) => {
  const { _id, name, category, description, image, price, location } =
    residence;
  const [contactEmail, setContactEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [favouriteRes, setFavouriteRes] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const [cookie, setCookie, removeCookie] = useCookies()
  const [userLoggedIn, setUserLoggedIn] = useState((Object.keys(cookie).length !== 0) ? true : false)

const navigate = useNavigate()

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

  const handleFavorite = async () => {
    setFavouriteRes(prev => !prev)
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
                className="hover"
                style={{ color: "#757575" }}
                fas
                icon="envelope"
              />
            </div>
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
