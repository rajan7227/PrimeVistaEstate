import Header from "../../components/header/Header";
import Map from "../../components/map/map";
import houses from "../../data/houses.json";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Property.scss";
import axios from "axios";
import validateLogin from "../../hooks/validateLogin";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../../BookingModal/BookingModal";
import Heart from "../../components/Heart/Heart";
import { AiFillHeart } from "react-icons/ai";
import bedIcon from "../../assets/bedroom.png";
import bathroomIcon from "../../assets/bathroom.png";
import sqftIcon from "../../assets/sqft.png";

function Property() {
  const [modalOpened, setModelOpened] = useState(false);
  const { validateLogn } = validateLogin();

  const { id } = useParams();
  const [selectedHouse, setSelectedHouse] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9090/property/${id}`)
      .then((response) => {
        setSelectedHouse(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [setSelectedHouse]);
  const { user } = useAuth0();

  //const selectedHouse = houses.find((house)=>house.id === id);
  return (
    <>
      <Header />
      <div className="property-container">
        <img
          className="property-image"
          src={selectedHouse.image}
          alt="Property Image"
          width={"100%"}
          height={"40vh"}
        ></img>
        <div className="property-details">
          <h1 className="property-title">{selectedHouse.title}</h1>
          <p className="property-price">
            ${selectedHouse.price?.toLocaleString()}
          </p>
          {/* <Heart id={id} /> */}
          <p className="property-description">{selectedHouse.description}.</p>
          <div className="property-info">
            <span className="property-info-item">
              <img
                className="icon"
                src={bathroomIcon}
                alt="bed icon"
                width={"24px"}
                height={"24px"}
              />
              : {selectedHouse.facilities?.bathrooms}
            </span>
            <span className="property-info-item">
              {" "}
              <img
                className="icon"
                src={bedIcon}
                alt="bed icon"
                width={"24px"}
                height={"24px"}
              />
              : {selectedHouse.facilities?.bedrooms}
            </span>
            <span className="property-info-item">
              {" "}
              <img
                className="icon"
                src={sqftIcon}
                alt="bed icon"
                width={"24px"}
                height={"24px"}
              />
              : {selectedHouse.facilities?.sqft} sqft
            </span>
          </div>
          <p className="property-address"> <b>Address:</b>  {selectedHouse.address}</p>
          <button className="property__booktour"
            onClick={() => {
              validateLogn() && setModelOpened(true);
            }}
          >
            BOOK TOUR
          </button>
        </div>
        <BookingModal
          opened={modalOpened}
          setOpened={setModelOpened}
          id={id}
          email={user?.email}
        />
        <Map
          address={selectedHouse?.address}
          city={selectedHouse?.city}
          country={selectedHouse?.country}
        />
      </div>
    </>
  );
}

export default Property;
