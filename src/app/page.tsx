"use client"
import CustomForm from "@/components/CurstomForm";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("../components/MapView"), { ssr: false });



export default function Home() {

  const center = { lat: -36.8932, lng: -60.3225 }; // Coordenadas de Alsina 2928, Olavarría


  return (
    <div>
      <Hero />
      <Gallery />
      <MapView center={center} />
      <CustomForm />
      <Footer />
    </div>
  );
}
