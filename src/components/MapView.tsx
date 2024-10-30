import { memo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  ZoomControl,
} from "react-leaflet";
import { Icon, LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

// Coordenadas de Alsina 2928, Olavarría.
const ALSINA_COORDS: LatLngLiteral = {
  lat: -36.89259,
  lng: -60.32254,
};

const MapView = memo(() => {
  const [selectedLocation, setSelectedLocation] = useState<LatLngLiteral | null>(
    null
  );

  const mapMarkIcon = new Icon({
    iconUrl: "map-marker.png",
    iconSize: [47, 55],
  });

  const mapMarkActiveIcon = new Icon({
    iconUrl: "active-map-marker.png",
    iconSize: [57, 65],
  });

  const renderMarker = () => (
    <Marker
      icon={selectedLocation ? mapMarkActiveIcon : mapMarkIcon}
      position={ALSINA_COORDS}
      eventHandlers={{
        click: () => setSelectedLocation(ALSINA_COORDS),
      }}
    />
  );

  const SelectedLocation = ({ center }: { center: LatLngLiteral }) => {
    const map = useMap();
    map.panTo(center, { animate: true });
    return null;
  };

  return (
    <div
      style={{
        width: "80%",
        height: "80vh",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={ALSINA_COORDS}
        zoom={15}
        minZoom={5}
        zoomControl={false}
        attributionControl={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />
        {selectedLocation && <SelectedLocation center={selectedLocation} />}
        {renderMarker()}
        <ZoomControl position="topright" />
      </MapContainer>
    </div>
  );
});

export default MapView;

