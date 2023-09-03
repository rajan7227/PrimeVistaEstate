import Header from "../../components/header/Header";
import Map from "../../components/map/map";
import houses from "../../data/houses.json";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './Property.scss';
import axios from 'axios'


function Property() {
    const { id } = useParams();
    const [selectedHouse, setSelectedHouse] = useState([]);
    useEffect(()=>{
      axios.get(`http://localhost:9090/property/${id}`)
      .then((response)=>{
          setSelectedHouse(response.data);
      })
      .catch((error)=>{
        console.error("error", error);
      });
    },[setSelectedHouse]);

    //const selectedHouse = houses.find((house)=>house.id === id);
  return (
    <>
      <Header />
      <div className="property-container">
    <img className="property-image" src={selectedHouse.image} alt="Property Image"></img>
    <div className="property-details">
      <h1 className="property-title">{selectedHouse.title}</h1>
      <p className="property-price">${selectedHouse.price?.toLocaleString()}</p>
      <p className="property-description">{selectedHouse.description}.</p>
      <div className="property-info">
        <span className="property-info-item">Bathrooms: {selectedHouse.facilities?.bathrooms}</span>
        <span className="property-info-item">Parking: 2</span>
        <span className="property-info-item">Bedrooms: {selectedHouse.facilities?.bedrooms}</span>
      </div>
      <p className="property-address">Address: {selectedHouse.address}</p>
    </div>
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
