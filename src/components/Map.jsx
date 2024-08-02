import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ farmers, customers }) => {
  return (
    <MapContainer center={[7.9465, -1.0232]} zoom={7} className="h-96">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {farmers.map((farmer) => (
        <Marker key={farmer.id} position={[farmer.location.lat, farmer.location.lng]}>
          <Popup>{farmer.name}</Popup>
        </Marker>
      ))}
      {customers.map((customer) => (
        <Marker key={customer.id} position={[customer.location.lat, customer.location.lng]}>
          <Popup>{customer.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
