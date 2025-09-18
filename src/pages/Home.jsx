import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LeadingSolutions from "../components/LeadingSolutions";
import AdvancedTechnologies from "../components/AdvancedTechnologies";
import Certifications from "../components/Certifications";
import ProjectJourney from "../components/ProjectJourney";
import IndustriesServed from "../components/IndustriesServed";
import VideoSection from "../components/VideoSection";
import QualityProducts from "../components/QualityProducts";
import BlogSection from "../components/BlogSection";
import BenefitsSection from "../components/BenefitsSection";
import Footer from "../components/Footer";
import Action from "../components/ui/Action";
import Clients from "../components/ClientTestimonials";
import ClientTestimonials from "../components/Reviews";
const Home = () => {
  const steps = [
    {
      title: "Design",
      desc: "We create custom designs that fit your needs perfectly, making sure everything works just right.",
      icon: "https://waterengineering.ae/wp-content/uploads/2024/12/Untitled-5-01.svg",
    },
    {
      title: "Fabrication",
      desc: "Our team carefully puts everything together to bring your design to life with care and attention.",
      icon: "https://waterengineering.ae/wp-content/uploads/2024/12/Untitled-5-02.svg",
    },
    {
      title: "Onsite Installation",
      desc: "We install the system at your site, making sure it’s set up and ready to run smoothly.",
      icon: "https://waterengineering.ae/wp-content/uploads/2024/12/Untitled-5-03.svg",
    },
    {
      title: "Servicing",
      desc: "We provide ongoing service and maintenance to keep your system running efficiently for the long term.",
      icon: "https://waterengineering.ae/wp-content/uploads/2024/12/Untitled-5-04.svg",
    },
  ]
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <HeroSection />
      <LeadingSolutions />
      <AdvancedTechnologies />
      <Certifications />
      <ProjectJourney steps={steps} title={"From Planning to Pure Water"} subtitle={"Your Project Journey"}/>
      <IndustriesServed />
      <VideoSection />
      <QualityProducts />
      <BlogSection />
      <BenefitsSection />
      <Clients />
      <ClientTestimonials />
      <Footer />
      <Action />
    </div>
  );
};

export default Home;
