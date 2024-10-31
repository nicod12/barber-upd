"use client";
import React from "react";
import { useEffect, useRef } from "react";
import L, { Map } from "leaflet";
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

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-100 py-16 md:py-32">
      <section className="flex flex-col items-center justify-center px-6 py-5 lg:py-10 lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1280px] w-full bg-white shadow-lg rounded-lg">
        <h1 className="text-center text-[3rem] font-bold uppercase m-5 lg:m-10 junigardenSerif text-gray-800" >Ubicación</h1>
        <div id="map" className="w-full h-[50vh] lg:h-[600px] shadow-black shadow-md rounded-lg overflow-hidden"></div>

      </section>
    </div>
  );
};

export default MapView;


