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

export default function WaterChillers() {
  const steps = [
    {
      title: "Detailed Needs Assessment",
      desc: "We analyze your water cooling needs to recommend the most effective water chiller system for your home or business.",
      icon: "/Custom-Purification-Systems-01.png",
    },
    {
      title: "Expert Installation Process",
      desc: "Our skilled technicians ensure proper installation of your water chiller system for seamless integration and reliable performance.",
      icon: "/Custom-Purification-Systems-02.png",
    },
    {
      title: "Rigorous System Testing",
      desc: "Thorough testing is conducted to verify that your water chiller system operates efficiently and meets industry standards.",
      icon: "/Custom-Purification-Systems-03.png",
    },
    {
      title: "Continuous Maintenance Support",
      desc: "We provide ongoing maintenance services to keep your water chiller system running smoothly for long-lasting results.",
      icon: "/Custom-Purification-Systems-04.png",
    },
  ];
  return (
    <>
      <Header />
  <HeroSection title="Water Chillers" description="Experience efficient water cooling with Water Engineering.ae's advanced water chillers. Our technology ensures optimal temperature and performance for water systems in homes, industries, and labs. Whether you need a chiller for residential, commercial, or industrial applications, we deliver reliable solutions tailored to your needs. Enjoy the benefits of superior water cooling and peace of mind with every drop." imgUrl="/water-chillers-1-1024x703.jpg" />

      <SecondSection title="The Science of Water Chilling: Pure Water, Pure Life" desc="Water chillers are essential for maintaining the right temperature in water systems, ensuring efficiency and longevity. Our advanced chillers use high-quality components to deliver consistent cooling, making them ideal for homes, industries, and labs seeking effective, eco-friendly water treatment. With Water Engineering.ae, you get powerful cooling and superior water quality every time." />

      <ThirdSection text1="Water Engineering: Leading Provider of Custom Water Chiller Systems" dec1="We offer the best water chiller systems for home and business use, featuring efficient and durable units. Our high-performance chillers are customized to your needs, ensuring maximum effectiveness and reliability." dec2="Our water chiller systems utilize the latest technology to deliver superior cooling. The process effectively maintains optimal temperature, ensuring water systems that are efficient and safe for your family or workplace." dec3="Whether for residential or industrial applications, we provide custom water chiller solutions for your specific cooling and system demands. Partner with our experienced team for versatile and scalable water treatment." />
      <FourthSection />
      <Clients />

      <EnhanceWaterSafety title="How Can Water Chillers Improve Your Water Systems?" dec="Transform your water systems with our water chillers and enjoy efficient, reliable cooling every day. Discover the benefits and see how the best chiller system can make a difference for you." point1="Maintains optimal temperature, making it a core component of any superior water system." point2="Safe cooling, preserving the natural performance and safety of your water systems." point3="Reduces the need for frequent repairs, leading to substantial savings and less environmental waste." point4="Requires minimal upkeep, with only periodic maintenance needed for ongoing performance and reliability." />

      <MergeSection title="Video Tour of Water Chiller Plant" dec="Take a video tour of our water chiller plant and discover how advanced technology transforms water cooling. See how our best chillers use advanced components to deliver efficient, safe water cooling right to you." videoUrl="https://www.youtube.com/embed/XHOmBV4js_E?si=i0VNXc-88nbXjcdN" Heading="We consider the quality our quantity" description="We don’t just cool water – we perfect it." heading1="Precision-Engineered Systems" des1="Meticulously designed water chiller systems for unparalleled performance." heading2="Continuous Innovation" des2="Integrating the latest advancements in cooling technology for complete system efficiency." heading3="Rigorous Quality Control" des3="Stringent testing of all components to ensure the highest standards of water system performance." heading4="Sustainable Practices" des4="Efficient chiller systems designed to reduce waste and conserve resources." />

      <Certifications />
      <ClientTestimonials />

      <ProjectJourney steps={steps} title="Explore Our" subtitle="Workflow Process" />
      <FrequentlyAskedQuestion />
      <BlogSection />
      <Footer />
    </>
  );
}
