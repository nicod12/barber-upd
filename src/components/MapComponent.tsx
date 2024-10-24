"use client"
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const MapComponent = () => {
  useEffect(() => {
    // Establece la vista inicial en las coordenadas de Olavarría
    const map = L.map('map').setView([-36.8927, -60.3225], 17);

    // Añadir una capa de mapa desde OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Añadir un marcador
    const marker = L.marker([-36.8927, -60.3225]).addTo(map);
    marker.bindPopup('Alsina 2928, Olavarría').openPopup();

    return () => {
      map.remove();
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-100 py-16 md:py-32">
      <section className="flex flex-col items-center justify-center px-6 py-5 lg:py-10 lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1280px] w-full bg-white shadow-lg rounded-lg">
        <h1 className="text-center text-[3rem] font-bold uppercase m-5 lg:m-10 junigardenSerif text-gray-800">
          Ubicación
        </h1>
        <div id="map" className="w-full h-[50vh] lg:h-[600px] shadow-black shadow-md rounded-lg overflow-hidden"></div>
      </section>
    </div>
  );
};

export default MapComponent;
