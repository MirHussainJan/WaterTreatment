import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LeadingSolutions from "./components/LeadingSolutions";
import AdvancedTechnologies from "./components/AdvancedTechnologies";
import Certifications from "./components/Certifications";
import ProjectJourney from "./components/ProjectJourney";
import IndustriesServed from "./components/IndustriesServed";
import VideoSection from "./components/VideoSection";
import QualityProducts from "./components/QualityProducts";
import BlogSection from "./components/BlogSection";
import BenefitsSection from "./components/BenefitsSection";
import ClientTestimonials from "./components/ClientTestimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header />
      <HeroSection />
      <LeadingSolutions />
      <AdvancedTechnologies />
      <Certifications />
      <ProjectJourney />
      <IndustriesServed />
      <VideoSection /> */}
      {/* <QualityProducts /> */}
      <BlogSection />
      <BenefitsSection />
      <ClientTestimonials />
      <Footer />
    </div>
  );
};

export default App;
