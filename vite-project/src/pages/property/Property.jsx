import Header from "../../components/header/Header";
import houses from "../../data/houses.json";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
function Property() {
    const { id } = useParams();
    const selectedHouse = houses.find((house)=>house.id === id);
  return (
    <>
      <Header />
      <h2>{selectedHouse.title}</h2>
      <p>${selectedHouse.price}</p>
    </>
  );
}

export default Property;
