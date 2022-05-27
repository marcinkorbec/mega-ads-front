import React from "react";
import "./Map.css"
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon';

export const Map = ()=> {
  return (
    <div className="map">
      <MapContainer center={[50.0297138,22.0203527]} zoom={13} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="https://www.openstreetmap.org/copyright"
        />
        <Marker position={[50.0297138,22.0203527]}>
          <h2>Rzeszów</h2>
        </Marker>
      </MapContainer>
    </div>
  )
}
