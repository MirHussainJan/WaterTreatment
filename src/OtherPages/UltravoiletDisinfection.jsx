import Certifications from "../components/Certifications";
import Clients from "../components/ClientTestimonials";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FourthSection from "./Ui/FourthSection";
import SecondSection from "./Ui/SecondSection";
import HeroSection from "./Ui/Sections";
import ThirdSection from "./Ui/ThirdSection";
import BlogSection from "../components/BlogSection";
import ClientTestimonials from "../components/Reviews";
import EnhanceWaterSafety from "./Ui/EnhanceWaterSaftey";
import MergeSection from "./Ui/MergeSection";
import FrequentlyAskedQuestion from "./Ui/FrequentlyAskedQuestion";
import ProjectJourney from "../components/ProjectJourney";

export default function UltravoiletDisinfection() {
  const steps = [
    {
      title: "Detailed Needs Assessment",
      desc: "We analyze your water quality and disinfection needs to recommend the most effective UV system for your home or business.",
      icon: "/Custom-Purification-Systems-01.png",
    },
    {
      title: "Expert Installation Process",
      desc: "Our skilled technicians ensure proper installation of your UV disinfection system for seamless integration and reliable performance.",
      icon: "/Custom-Purification-Systems-02.png",
    },
    {
      title: "Rigorous System Testing",
      desc: "Thorough testing is conducted to verify that your UV system operates efficiently and meets industry standards.",
      icon: "/Custom-Purification-Systems-03.png",
    },
    {
      title: "Continuous Maintenance Support",
      desc: "We provide ongoing maintenance services to keep your UV disinfection system running smoothly for long-lasting results.",
      icon: "/Custom-Purification-Systems-04.png",
    },
  ];
  return (
    <>
      <Header />
  <HeroSection title="Ultravoilet Disinfection" description="Protect your water supply with Water Engineering.ae's advanced UV disinfection systems. Our ultraviolet technology destroys bacteria, viruses, and other harmful microorganisms, ensuring safe, clean water for every use. Whether you need a UV system for residential, commercial, or industrial applications, we deliver reliable solutions tailored to your needs. Experience the benefits of chemical-free water purification and enjoy peace of mind with every drop." imgUrl="/Banner-09-1024x480.jpg" />

      <SecondSection title="The Science of UV Disinfection: Pure Water, Pure Life" desc="Ultraviolet disinfection is a proven method for eliminating pathogens from water without the use of chemicals. By exposing water to UV light, our systems deactivate bacteria, viruses, and protozoa, making your water safe for drinking, cooking, and bathing. UV disinfection is ideal for homes, offices, and industries seeking effective, eco-friendly water treatment. With Water Engineering.ae, you get powerful protection and superior water quality every time." />

      <ThirdSection text1="Water Engineering: Leading Provider of Custom UV Disinfection Systems" dec1="We offer the best UV disinfection systems for home and business use, featuring efficient and durable units. Our high-performance UV filters are customized to your needs, ensuring maximum effectiveness against waterborne pathogens." dec2="Our UV water treatment systems utilize the latest technology to deliver superior purification. The UV process effectively removes contaminants, ensuring water that is clean and safe for your family or workplace." dec3="Whether for residential or industrial applications, we provide custom UV disinfection solutions for your specific water quality and volume demands. Partner with our experienced team for versatile and scalable water purification." />
      <FourthSection />
      <Clients />

      <EnhanceWaterSafety title="How Can UV Disinfection Improve Your Water?" dec="Transform your water quality with our UV disinfection systems and enjoy clean, fresh, and safe water every day. Discover the benefits and see how the best UV system can make a difference for you." point1="Destroys 99.99% of bacteria, viruses, and protozoa, making it a core component of any superior water purification system." point2="Chemical-free purification, preserving the natural taste and safety of your water." point3="Reduces the need for bottled water, leading to substantial savings and less environmental waste." point4="Requires minimal upkeep, with only periodic lamp changes needed for ongoing performance and purity." />

      <MergeSection title="Video Tour of UV Disinfection Plant" dec="Take a video tour of our UV disinfection plant and discover how ultraviolet technology transforms water purification. See how our best UV systems use advanced filters to deliver clean, safe water right to you." videoUrl="https://www.youtube.com/embed/XHOmBV4js_E?si=i0VNXc-88nbXjcdN" Heading="We consider the quality our quantity" description="We don’t just disinfect water – we perfect it." heading1="Precision-Engineered Systems" des1="Meticulously designed UV water treatment systems for unparalleled performance." heading2="Continuous Innovation" des2="Integrating the latest advancements in UV technology for complete purification." heading3="Rigorous Quality Control" des3="Stringent testing of all components to ensure the highest standards of water purity." heading4="Sustainable Practices" des4="Efficient UV water systems designed to reduce waste and conserve resources." />

      <Certifications />
      <ClientTestimonials />

      <ProjectJourney steps={steps} title="Explore Our" subtitle="Workflow Process" />
      <FrequentlyAskedQuestion />
      <BlogSection />
      <Footer />
    </>
  );
}
