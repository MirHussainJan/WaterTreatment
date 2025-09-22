import React from "react";
import Header from "../components/Header";
import HeroSection from "./Ui/Sections";
import Footer from "../components/Footer";
import BlogSection from "../components/BlogSection";
import FrequentlyAskedQuestion from "./Ui/FrequentlyAskedQuestion";
import ProjectJourney from "../components/ProjectJourney";
import Certifications from "../components/Certifications";
import ClientTestimonials from "../components/Reviews";
import SecondSection from "./Ui/SecondSection";
import ThirdSection from "./Ui/ThirdSection";
import FourthSection from "./Ui/FourthSection";
import Clients from "../components/ClientTestimonials";
import EnhanceWaterSafety from "./Ui/EnhanceWaterSaftey";
import MergeSection from "./Ui/MergeSection";

export default function Desalination() {
  const steps = [
    {
      title: "Detailed Needs Assessment",
      desc: "We analyze your specific water quality requirements to create an effective custom purification system that fits your needs",
      icon: "/Custom-Purification-Systems-01.png",
    },
    {
      title: "Expert Installation Process",
      desc: "Our skilled technicians ensure proper installation of the custom purification system for seamless integration and reliable performance",
      icon: "/Custom-Purification-Systems-02.png",
    },
    {
      title: "Rigorous System Testing",
      desc: "Thorough testing is conducted to verify that your custom purification system operates efficiently and meets industry standards .",
      icon: "/Custom-Purification-Systems-03.png",
    },
    {
      title: "Continuous Maintenance Support",
      desc: "We provide ongoing maintenance services to keep your custom purification system running smoothly for long-lasting results",
      icon: "/Custom-Purification-Systems-04.png",
    },
  ];
  return (
    <>
      <Header />
      <HeroSection
        title={"Desalination"}
        description={
          "Desalination is the process of turning seawater, saltwater into fresh, drinkable water. At Water Engineering.ae, we offer the best seawater desalination systems for various purposes across the world. Our desalination systems are designed to optimize the water desalination process, keeping desalination plant costs in check. We also provide expert support and maintenance, ensuring long-lasting, efficient operation. Let us help you achieve reliable, sustainable solutions with top-quality technology Personalized to your needs."
        }
        imgUrl={"/Water-Desalination-Plants-UAE.jpg"}
      />
      <SecondSection
        title={
          "Desalination Revolutions : Turning Sea and Brackish Water into Freshwater"
        }
        desc={
          "Desalination means to remove the unwanted materials from the water and to make the water for use. For water purification, we offer innovative technology at Water Engineering.ae, for the purification of sea and brackish water. This list includes desalination machines, industrial desalination systems and commercial desalination systems. For industrial use or commercial local use, our systems enable high quality output in water desalination while putting into consideration low costs of operation. Reach out to us today to explore our desalination systems!"
        }
      />
      <ThirdSection
        text1={
          "Turning Saltwater into Freshwater: The Future of Desalination Technology"
        }
        dec1={
          "At Water Engineering.ae, we specialize in delivering custom solutions for both commercial and residential applications. As leading desalination system manufacturers, we offer everything from desalination machines for home use to industrial systems, providing clean water at affordable prices."
        }
        dec2={
          "We provide whole desalination plant installation services for both small and large-scale projects. Our skilled team works with top seawater desalination equipment suppliers to deliver high quality systems. Let us help you achieve efficient, maintainable water solutions."
        }
        dec3={
          "Our water desalination services include maintenance and long-term support to ensure your system's efficiency. Whether you need desalination of water for drinking or industrial uses, we guarantee affordable desalination systems designed to last. Reach out to us for expert assistance and consultation."
        }
      />
      <FourthSection />
      <Clients />

      <EnhanceWaterSafety
        title={
          "Why Desalination Matters: The Vital Role of Water Purification Systems"
        }
        dec={
          "Desalination is an important process that helps provide clean water, especially in dry areas. Upon embracing modern technology, the systems have gained better benefits than before on the use of desalination. Here are some key advantages:."
        }
        point1={
          "Transforms seawater into drinkable water, offering a reliable fresh water source for regions facing severe water shortages."
        }
        point2={
          "Supports agricultural growth by supplying irrigation needs through innovative sea water RO systems, enhancing food security."
        }
        point3={
          "Promotes sustainability by decreasing reliance on traditional water sources and reducing environmental impact through efficient seawater membranes."
        }
        point4={
          "Ensures long-term efficiency through proper desalination plant maintenance, enabling manufacturers to provide reliable product performance consistently."
        }
      />

      <MergeSection
        title={"Explore Our Desalination Process Through Video"}
        dec={
          "Join us for a video tour of our desalination facilities at Water Engineering.ae and see how our advanced technology turns seawater into fresh water. Discover how our desalination systems work and learn about the benefits for your community today!"
        }
        videoUrl={
          "https://www.youtube.com/embed/XHOmBV4js_E?si=i0VNXc-88nbXjcdN"
        }
        Heading={"We consider the quality our quantity"}
        description={
          "At Water Engineering.ae, we’re passionate about providing you with top-quality desalination solutions that truly meet your needs."
        }
        heading1={"Custom Desalination Systems"}
        des1={
          "Our desalination systems use brackish water membranes to ensure optimal results for every application."
        }
        heading2={"Advanced Water Makers"}
        des2={
          "Discover reliable water makers for offshore, onshore, boats, oil platforms, emergencies, military, and exploration."
        }
        heading3={"Efficient Water Solutions"}
        des3={
          "Our marine water makers are efficient, perfect for ships and offshore platforms to maintain fresh water."
        }
        heading4={"Focus On Quality"}
        des4={
          "We ensure quality control for our water makers, providing reliable clean water solutions for boats and oil rigs."
        }
      />
      <Certifications />
      <ClientTestimonials />
      <ProjectJourney
        steps={steps}
        title={"Explore Our"}
        subtitle={"Workflow Process"}
      />
      <FrequentlyAskedQuestion />
      <BlogSection />
      <Footer />
    </>
  );
}
