import Header from "../../components/header/Header";
import houses from "../../data/houses.json";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import './Property.scss';


function Property() {
    const { id } = useParams();
    const selectedHouse = houses.find((house)=>house.id === id);
  return (
    <>
      <Header />
      <div className="property-container">
    <img className="property-image" src={selectedHouse.image} alt="Property Image"></img>
    <div className="property-details">
      <h1 className="property-title">{selectedHouse.title}</h1>
      <p className="property-price">${selectedHouse.price}</p>
      <p className="property-description">{selectedHouse.description}.</p>
      <div className="property-info">
        <span className="property-info-item">Bathrooms: {selectedHouse.facilities.bathrooms}</span>
        <span className="property-info-item">Parking: 2</span>
        <span className="property-info-item">Bedrooms: {selectedHouse.facilities.bedrooms}</span>
      </div>
      <p className="property-address">Address: {selectedHouse.address}</p>
    </div>
  </div>
    </>
  );
}

export default Property;
