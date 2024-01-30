import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidenceCard from "./ResidenceCard";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
// favorite residences display
function Favorites() {
  const [favorites, setFavorites] = useState([{}, {}, {}]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    const res = await axios.get(`http://localhost:3001/residences/favorites`, {
      withCredentials: true,
    });
    setFavorites(res);
    setFavorites(res.data);
  };

  const refetchFavorites = () => {
    fetchFavorites();
  };

  return (
    <>
      <MDBContainer>
       

        {favorites.length === 0 ? (
          <div>
            <p>No favorites found.</p>
          </div>
        ) : (
          <div>
            <MDBRow className="mt-3">
             
               <MDBCard style={{ maxWidth: '22rem' }} aria-hidden='true'>
               <MDBCardImage
                 src='https://images.unsplash.com/photo-1603204077809-d94bb1ea0fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                 position='top'
                 alt='Sunset Over the Sea'
               />
               <MDBCardBody>
                 <MDBCardTitle className='placeholder-glow'>
                   <span className='placeholder col-6'></span>
                 </MDBCardTitle>
                 <MDBCardText className='placeholder-glow'>
                   <span className='placeholder col-7'></span>
                   <span className='placeholder col-4'></span>
                   <span className='placeholder col-4'></span>
                   <span className='placeholder col-6'></span>
                   <span className='placeholder col-8'></span>
                 </MDBCardText>
                 <MDBBtn href='#' tabIndex={-1} disabled className='placeholder col-6'></MDBBtn>
               </MDBCardBody>
             </MDBCard>
             <MDBCard style={{ maxWidth: '22rem' }} aria-hidden='true'>
               <MDBCardImage
                 src='https://images.unsplash.com/photo-1603204077809-d94bb1ea0fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                 position='top'
                 alt='Sunset Over the Sea'
               />
               <MDBCardBody>
                 <MDBCardTitle className='placeholder-glow'>
                   <span className='placeholder col-6'></span>
                 </MDBCardTitle>
                 <MDBCardText className='placeholder-glow'>
                   <span className='placeholder col-7'></span>
                   <span className='placeholder col-4'></span>
                   <span className='placeholder col-4'></span>
                   <span className='placeholder col-6'></span>
                   <span className='placeholder col-8'></span>
                 </MDBCardText>
                 <MDBBtn href='#' tabIndex={-1} disabled className='placeholder col-6'></MDBBtn>
               </MDBCardBody>
             </MDBCard>
             <MDBCard style={{ maxWidth: '22rem' }} aria-hidden='true'>
               <MDBCardImage
                 src='https://images.unsplash.com/photo-1603204077809-d94bb1ea0fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                 position='top'
                 alt='Sunset Over the Sea'
               />
               <MDBCardBody>
                 <MDBCardTitle className='placeholder-glow'>
                   <span className='placeholder col-6'></span>
                 </MDBCardTitle>
                 <MDBCardText className='placeholder-glow'>
                   <span className='placeholder col-7'></span>
                   <span className='placeholder col-4'></span>
                   <span className='placeholder col-4'></span>
                   <span className='placeholder col-6'></span>
                   <span className='placeholder col-8'></span>
                 </MDBCardText>
                 <MDBBtn href='#' tabIndex={-1} disabled className='placeholder col-6'></MDBBtn>
               </MDBCardBody>
             </MDBCard>
            </MDBRow>
          </div>
        )}
      </MDBContainer>
    </>
  );
}

export default Favorites;
