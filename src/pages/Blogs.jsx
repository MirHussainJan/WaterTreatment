import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHero from "../components/ui/SubHero";

const Blogs = () => {
  return (
    <>
      <Header />
      <SubHero title={"Latest Articles"} desc="Dive into expert knowledge about water treatment innovations and solutions. From industry updates to technical insights, discover what’s making waves in water engineering." img={"https://waterengineering.ae/wp-content/uploads/2025/01/Blogs-Image-BG-scaled.jpg"}/>
      <BlogSection />
      <Footer />
    </>
  );
};

export default Blogs;
