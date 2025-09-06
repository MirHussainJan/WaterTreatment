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
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <HeroSection />
      <LeadingSolutions />
      <AdvancedTechnologies />
      <Certifications />
      <ProjectJourney />
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
