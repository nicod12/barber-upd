"use client";

import { useEffect, useRef } from "react";
import L, { Map, Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility"; // Asegura que los íconos se carguen correctamente

interface MapViewProps {
  center: {
    lat: number;
    lng: number;
  };
}

const MapView = ({ center }: MapViewProps) => {
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (mapRef.current) return;

    const map = L.map("map", {
      center: [center.lat, center.lng],
      zoom: 15,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    const marker = L.marker([center.lat, center.lng]).addTo(map);
    marker.bindPopup("<b>Alsina 2928</b><br>Olavarría").openPopup();

    mapRef.current = map;
  }, [center]);

  return <div id="map" style={{ width: "100%", height: "200px" }} />;
};

export default MapView;


