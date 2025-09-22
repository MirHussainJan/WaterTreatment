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

export default function ActivatedCarbonFiltration() {
  const steps = [
    {
      title: "Detailed Needs Assessment",
      desc: "We analyze your water quality and filtration needs to recommend the most effective activated carbon system for your home or business.",
      icon: "/Custom-Purification-Systems-01.png",
    },
    {
      title: "Expert Installation Process",
      desc: "Our skilled technicians ensure proper installation of your activated carbon filtration system for seamless integration and reliable performance.",
      icon: "/Custom-Purification-Systems-02.png",
    },
    {
      title: "Rigorous System Testing",
      desc: "Thorough testing is conducted to verify that your filtration system operates efficiently and meets industry standards.",
      icon: "/Custom-Purification-Systems-03.png",
    },
    {
      title: "Continuous Maintenance Support",
      desc: "We provide ongoing maintenance services to keep your activated carbon filtration system running smoothly for long-lasting results.",
      icon: "/Custom-Purification-Systems-04.png",
    },
  ];
  return (
    <>
      <Header />
  <HeroSection title="Activated Carbon Filtration" description="Experience fresh, clean water with Water Engineering.ae's advanced activated carbon filtration systems. Our technology removes contaminants, odors, and chemicals, delivering pure water for every use. Whether you need a filtration system for residential, commercial, or industrial applications, we deliver reliable solutions tailored to your needs. Enjoy the benefits of superior water quality and peace of mind with every drop." imgUrl="/Banner-01-1024x480.jpg" />

      <SecondSection title="The Science of Activated Carbon Filtration: Pure Water, Pure Life" desc="Activated carbon filtration is a proven method for removing organic compounds, chlorine, and odors from water. Our systems use high-quality carbon media to adsorb impurities, ensuring your water is safe and tastes great. Activated carbon filtration is ideal for homes, offices, and industries seeking effective, eco-friendly water treatment. With Water Engineering.ae, you get powerful protection and superior water quality every time." />

      <ThirdSection text1="Water Engineering: Leading Provider of Custom Activated Carbon Filtration Systems" dec1="We offer the best activated carbon filtration systems for home and business use, featuring efficient and durable units. Our high-performance filters are customized to your needs, ensuring maximum effectiveness against contaminants and odors." dec2="Our activated carbon water treatment systems utilize the latest technology to deliver superior purification. The process effectively removes impurities, ensuring water that is clean and safe for your family or workplace." dec3="Whether for residential or industrial applications, we provide custom activated carbon filtration solutions for your specific water quality and volume demands. Partner with our experienced team for versatile and scalable water purification." />
      <FourthSection />
      <Clients />

      <EnhanceWaterSafety title="How Can Activated Carbon Filtration Improve Your Water?" dec="Transform your water quality with our activated carbon filtration systems and enjoy clean, fresh, and safe water every day. Discover the benefits and see how the best filtration system can make a difference for you." point1="Removes 99.99% of organic compounds and chlorine, making it a core component of any superior water purification system." point2="Safe purification, preserving the natural taste and safety of your water." point3="Reduces the need for bottled water, leading to substantial savings and less environmental waste." point4="Requires minimal upkeep, with only periodic media changes needed for ongoing performance and purity." />

      <MergeSection title="Video Tour of Activated Carbon Filtration Plant" dec="Take a video tour of our filtration plant and discover how advanced technology transforms water purification. See how our best activated carbon systems use advanced filters to deliver clean, safe water right to you." videoUrl="https://www.youtube.com/embed/XHOmBV4js_E?si=i0VNXc-88nbXjcdN" Heading="We consider the quality our quantity" description="We don’t just filter water – we perfect it." heading1="Precision-Engineered Systems" des1="Meticulously designed activated carbon water treatment systems for unparalleled performance." heading2="Continuous Innovation" des2="Integrating the latest advancements in filtration technology for complete purification." heading3="Rigorous Quality Control" des3="Stringent testing of all components to ensure the highest standards of water purity." heading4="Sustainable Practices" des4="Efficient filtration systems designed to reduce waste and conserve resources." />

      <Certifications />
      <ClientTestimonials />

      <ProjectJourney steps={steps} title="Explore Our" subtitle="Workflow Process" />
      <FrequentlyAskedQuestion />
      <BlogSection />
      <Footer />
    </>
  );
}
