import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';

const MapView = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'locations'), (snapshot) => {
      setLocations(snapshot.docs.map((doc) => doc.data()));
    });
    return unsubscribe;
  }, []);

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
