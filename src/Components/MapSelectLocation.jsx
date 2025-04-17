import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix lỗi marker mặc định không hiển thị
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const centerDefault = {
  lat: 10.762622,
  lng: 106.660172,
};

const LocationMarker = ({ onLocationSelect, setMarkerPosition }) => {
  useMapEvents({
    click(e) {
      const position = {
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      };
      setMarkerPosition(position);
      if (onLocationSelect) onLocationSelect(position);
    },
  });
  return null;
};

const MapSelectLocation = ({ onLocationSelect }) => {
  const [markerPosition, setMarkerPosition] = useState(centerDefault);

  return (
    <MapContainer
      center={markerPosition}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={markerPosition} />
      <LocationMarker
        onLocationSelect={onLocationSelect}
        setMarkerPosition={setMarkerPosition}
      />
    </MapContainer>
  );
};

export default MapSelectLocation;
