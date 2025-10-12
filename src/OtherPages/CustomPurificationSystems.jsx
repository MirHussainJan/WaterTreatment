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
export default function WaterPurificationTechnologies() {
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
  ]
  return (
    < >
        <Header />
        <HeroSection title="Custom Purification Systems" description="Enhance your water quality with Innovators, the trusted provider of custom water purification systems. Our customized solutions ensure clean, safe drinking water for homes and businesses. Whether you need custom purification systems for drinking water or industrial custom purification systems, we’ve got you covered. Experience the difference with our innovative technology and expert support. Reach us today to discuss how we can meet your unique purification needs!" imgUrl="/CPS.png" />
        <SecondSection title="Transform Your Water With Custom Purification Systems" desc="At Innovators, we specialize in designing custom purification systems that meet your specific water needs. Our best custom purification systems for home provide safe and clean drinking water. With our expert team, we focus on custom purification system design that integrates seamlessly into your lifestyle. Whether for residential or industrial use, our custom-built water filtration solutions guarantee optimal performance and reliability. Enjoy peace of mind knowing your water is purified to the highest standards. Discover how our systems can transform your water quality by contacting us today!" />
        <ThirdSection text1={"Upgrade Your Water Standards with Custom Solutions"} dec1={"We offer innovative custom purification systems designed to meet various water quality needs. Our solutions are customized to optimize performance, ensuring you receive the cleanest water possible. With Innovators, enjoy peace of mind knowing your system is reliable."} dec2={"Our custom filtration and purification systems include advanced technology, effectively removing impurities from water. We focus on enhancing water quality for both residential and industrial applications. Trust our expertise to deliver top-tier solutions that exceed your expectations."} dec3={"For specialized environments, our custom air purification systems are designed to improve air quality in any space. We utilize advanced technology to address unique filtration needs. Reach out to Innovators today for personalized solutions that ensure clean air and water."}/>
        <FourthSection />
        <Clients />
        <EnhanceWaterSafety title={"Enhance Your Water Safety: Explore Benefits of Sterilization Water Treatment Systems"} dec={"Looking for a way to ensure clean and safe water? Our sterilization water treatment systems effectively eliminate harmful microorganisms, providing you with fresh, pure water for drinking, cooking, and bathing. Discover the benefits that make a difference."} point1={"Our sterilization water filters eliminate harmful bacteria and germs, ensuring the water you consume is safe for your health."}
        point2={"Enhances water quality with natural filtration methods, making it the best sterilization water system for home and daily use."} point3={"Our sterilization filtration system enhances the flavor, color, and texture of your water, making it better for drinking and cooking."} point4={"Our reliable systems offer water treatment and sterilization services for your home or business. Get in touch today!"}/>
        <MergeSection title={"Video Tour of Custom Purification Systems" } dec={"Take a video tour to explore the inner workings of Custom Purification Systems. Discover how advanced filtration technology provides cleaner water, removing impurities efficiently and effectively. See why customized systems offer unmatched benefits for home and industry."} videoUrl={"https://www.youtube.com/embed/XHOmBV4js_E?si=i0VNXc-88nbXjcdN"} Heading={"We consider the quality over quantity"} dec1={"We are committed to providing our clients with the highest quality products and services, ensuring that they are satisfied with their experience with us."}  description={"At Innovators, we don’t just deliver custom purification systems—we deliver excellence and reliability. "} heading1={"Customized Systems"} des1={"We design systems around your unique purification needs for effective results."} heading2={"Innovative Solutions"} des2={"Utilizing the latest in custom purification technology for advanced performance."} heading3={"Trusted Quality"} des3={"Stringent testing ensures durability and unmatched purification standards."} heading4={"Comprehensive Support"} des4={"Dedicated team for continuous support, including equipment servicing."}/>
        <Certifications />
        <ClientTestimonials />
        <ProjectJourney steps={steps} title={"Explore Our"} subtitle={"Workflow Process"}/>
        <FrequentlyAskedQuestion />
        <BlogSection />
        <Footer />
    </>
  )    
}
