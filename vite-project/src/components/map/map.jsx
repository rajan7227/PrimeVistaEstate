import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import GeoCoderMarker from "../GeoCoderMarker/GeoCoderMarker";


function Map({address, city , country}) {
  return (
    <>
      <MapContainer
    //   STYLING THE MAP ELEMENT
        center={[53.35, 18.8]}
        zoom={1}
        scrollWheelZoom={false}
        style={{
          height: "40vh",
          width: "100%",
          marginTop: "20px",
          zIndex: 0,
          background: "grey",
        }}
      >
        {/* ////* TO DISPLAY MAP */ }
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
       <GeoCoderMarker address={`${address} ${city} ${country}`} />
      </MapContainer>
    </>
  );
}

export default Map;
<></>;
