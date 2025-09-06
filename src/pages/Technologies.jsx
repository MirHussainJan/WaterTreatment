import Footer from "../components/Footer";
import Header from "../components/Header";
import TechCards from "../components/TechCards";
import SubHero from "../components/ui/SubHero";

const Technologies = () => {
  return (
    <>
      <Header />
      <SubHero title="Technologies We Work In" desc="Mastering water’s potential through advanced solutions. Our technology transforms challenges into pure, flowing success. Let’s explore the perfect solution for you." img="https://waterengineering.ae/wp-content/uploads/2025/01/Technologies-Image-BG-scaled.jpg" />
      <TechCards />
      <Footer/>
    </>
  );
};

export default Technologies;
