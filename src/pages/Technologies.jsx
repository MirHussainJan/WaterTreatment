import Footer from "../components/Footer";
import Header from "../components/Header";
import TechCards from "../components/TechCards";
import SubHero from "../components/ui/SubHero";

const Technologies = () => {
  return (
    <>
      <Header />
      <SubHero title="Water Treatment Technologies We Work In" desc="Mastering water's potential through advanced RO systems, water softeners, and ultra violet purification. Our innovative water treatment technologies including reverse osmosis, deionization, and water filters transform challenges into pure, flowing success. Let's explore the perfect water purification solution for you in UAE." img="Technologies-Image-BG-scaled.jpg" />
      <TechCards />
      <Footer/>
    </>
  );
};

export default Technologies;
