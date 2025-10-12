import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHero from "../components/ui/SubHero";

const Blogs = () => {
  return (
    <>
      <Header />
      <SubHero title={"Latest Water Treatment Articles"} desc="Dive into expert knowledge about water purification innovations including RO plants, water softeners, and reverse osmosis solutions. From industry updates on industrial water treatment to technical insights on water filters in UAE, discover what's making waves in water engineering across Dubai." img={"/Blogs-Image-BG-scaled.jpg"}/>
      <BlogSection />
      <Footer />
    </>
  );
};

export default Blogs;
