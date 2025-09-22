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

export default function CartridgeFilterHousings() {
  const steps = [
    {
      title: "Detailed Needs Assessment",
      desc: "We analyze your water filtration needs to recommend the most effective cartridge filter housing system for your home or business.",
      icon: "/Custom-Purification-Systems-01.png",
    },
    {
      title: "Expert Installation Process",
      desc: "Our skilled technicians ensure proper installation of your cartridge filter housing system for seamless integration and reliable performance.",
      icon: "/Custom-Purification-Systems-02.png",
    },
    {
      title: "Rigorous System Testing",
      desc: "Thorough testing is conducted to verify that your cartridge filter housing system operates efficiently and meets industry standards.",
      icon: "/Custom-Purification-Systems-03.png",
    },
    {
      title: "Continuous Maintenance Support",
      desc: "We provide ongoing maintenance services to keep your cartridge filter housing system running smoothly for long-lasting results.",
      icon: "/Custom-Purification-Systems-04.png",
    },
  ];
  return (
    <>
      <Header />
  <HeroSection title="Cartridge Filter Housings" description="Experience reliable water filtration with Water Engineering.ae's advanced cartridge filter housings. Our technology ensures clean and safe water for all uses, providing durable and efficient filtration for homes, industries, and labs. Whether you need a filter housing for residential, commercial, or industrial applications, we deliver reliable solutions tailored to your needs. Enjoy the benefits of superior water quality and peace of mind with every drop." imgUrl="/Banner-05-1024x480.jpg" />

      <SecondSection title="The Science of Cartridge Filter Housings: Pure Water, Pure Life" desc="Cartridge filter housings are essential for maintaining pure water in filtration systems. Our advanced housings use high-quality materials to ensure durability and efficiency, making them ideal for homes, industries, and labs seeking effective, eco-friendly water treatment. With Water Engineering.ae, you get powerful filtration and superior water quality every time." />

      <ThirdSection text1="Water Engineering: Leading Provider of Custom Cartridge Filter Housing Systems" dec1="We offer the best cartridge filter housing systems for home and business use, featuring efficient and durable units. Our high-performance housings are customized to your needs, ensuring maximum effectiveness and reliability." dec2="Our cartridge filter housing systems utilize the latest technology to deliver superior filtration. The process effectively removes impurities, ensuring water that is clean and safe for your family or workplace." dec3="Whether for residential or industrial applications, we provide custom cartridge filter housing solutions for your specific filtration and system demands. Partner with our experienced team for versatile and scalable water treatment." />
      <FourthSection />
      <Clients />

      <EnhanceWaterSafety title="How Can Cartridge Filter Housings Improve Your Water Systems?" dec="Transform your water systems with our cartridge filter housings and enjoy efficient, reliable filtration every day. Discover the benefits and see how the best housing system can make a difference for you." point1="Provides reliable filtration, making it a core component of any superior water system." point2="Durable technology, preserving the natural performance and safety of your water systems." point3="Reduces the need for frequent repairs, leading to substantial savings and less environmental waste." point4="Requires minimal upkeep, with only periodic maintenance needed for ongoing performance and reliability." />

      <MergeSection title="Video Tour of Cartridge Filter Housing Plant" dec="Take a video tour of our filter housing plant and discover how advanced technology transforms water filtration. See how our best housings use advanced materials to deliver efficient, safe water filtration right to you." videoUrl="https://www.youtube.com/embed/XHOmBV4js_E?si=i0VNXc-88nbXjcdN" Heading="We consider the quality our quantity" description="We don’t just filter water – we perfect it." heading1="Precision-Engineered Systems" des1="Meticulously designed cartridge filter housing systems for unparalleled performance." heading2="Continuous Innovation" des2="Integrating the latest advancements in housing technology for complete system efficiency." heading3="Rigorous Quality Control" des3="Stringent testing of all components to ensure the highest standards of water system performance." heading4="Sustainable Practices" des4="Efficient housing systems designed to reduce waste and conserve resources." />

      <Certifications />
      <ClientTestimonials />

      <ProjectJourney steps={steps} title="Explore Our" subtitle="Workflow Process" />
      <FrequentlyAskedQuestion />
      <BlogSection />
      <Footer />
    </>
  );
}
