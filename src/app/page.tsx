import CustomForm from "@/components/CurstomForm";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MapComponent from "@/components/MapComponent";


export default function Home() {
  return (
    <div>
      <Hero />
      <Gallery />
      <MapComponent />
      <CustomForm />
      <Footer />
    </div>
  );
}
